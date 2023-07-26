import { BiGitCompare, BiSearch, BiHeart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
// import { useCartContext } from '../../context/Cart/CartContext';
// import { IProducts } from '../../types/productsType';
import './ProductCard.css';
import { useEffect, useState } from 'react';

const ProductCard = ({ productData }) => {
    //   const { addToCart } = useCartContext();
    const navigate = useNavigate();
    const discountPrice = (productData.price - (productData.price * productData.discountPercent) / 100).toFixed(2);
    const [cartData, setCartData] = useState()
    const handleOpenProduct = () => {
        navigate(`/shop/${productData.id}`);
    };
    const products = []



    const handleAddToCart = (e) => {
        e.stopPropagation();
        const storedData = localStorage.getItem('products');
        const existingProducts = storedData ? JSON.parse(storedData) : [];

        // Check if the product already exists in the cart based on some unique identifier (e.g., product ID)
        const productExists = existingProducts.some((item) => item.id === productData.id);

        // If the product does not exist in the cart, add it
        if (!productExists) {
            // Clone the productData to avoid modifying the original data
            const productToAdd = { ...productData };
            // Add the product to the existing products array
            existingProducts.push(productToAdd);

            // Store the updated products array in localStorage
            localStorage.setItem('products', JSON.stringify(existingProducts));
        } else {
            alert('Product is already in cart!');
        }
    }

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // },[])
    return (
        <div onClick={handleOpenProduct} className='product-card'>
            {productData.discountPercent > 0 && (
                <div className='product-card__discount-percent'>-{productData.discountPercent}%</div>
            )}
            <div className='product-card__tools'>
                <button className='product-card__tools-tool'>
                    <BiGitCompare size={20} />
                    <span className='product-card__tools-tool__info'>compare</span>
                </button>
                <button className='product-card__tools-tool'>
                    <BiSearch size={20} />
                    <span className='product-card__tools-tool__info'>quick review</span>
                </button>
                <button className='product-card__tools-tool'>
                    <BiHeart size={20} />
                    <span className='product-card__tools-tool__info'>add to favourite</span>
                </button>
            </div>
            <div className='product-card__image'>
                <img
                    className='product-card__image-image'
                    loading='lazy'
                    src={productData.imageUrls[0]}
                    alt={productData.name}
                />
                {/* <button disabled={!productData.inStock} onClick={handleAddToCart} className='add-to-cart'> */}
                <button disabled={!productData.inStock} onClick={handleAddToCart} className='add-to-cart'>
                    <h2>{productData.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}</h2>
                </button>
            </div>
            <div className='product-card__content'>
                <h4 className='product-card__name'>{productData.name}</h4>
                <div className='product-card__content__price'>
                    {productData.discountPercent > 0 && <del className='product-card__regular-price'>{productData.price}</del>}
                    <span className='product-card__discount-price'>{discountPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
