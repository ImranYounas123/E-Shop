import { useEffect, useState } from 'react';
// import { collection, getDocs, limit, query } from 'firebase/firestore';
// import { db } from '../../config/firebase.config';
// import { IProducts } from '../../types/productsType';
import products from '../../data/ProductsData';
// import { Loader } from '../../components';
import Loader  from '../../components/Loader/Loader';

import ProductCard  from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';
import './NewProducts.css';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    // const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //   useEffect(() => {
    //     setLoading(true);
    //     // fetch and get product
    //     const allProducts = [];
    //     (async () => {
    //       const querySnap = query(collection(db, 'products'), limit(6));
    //       const snapShot = await getDocs(querySnap);
    //       snapShot.forEach((doc) => {
    //         const data = doc.data();
    //         allProducts.push(data);
    //       });
    //       setProducts(allProducts);
    //       setLoading(false);
    //     })();
    //   }, []);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    },[])
    console.log(products)
    return (
        <div className='new-product'>
            <div className='new-product__head-title'>
                <span className='head-title__notic'>Hurry up to buy</span>
                <h2 className='head-title__main'>New Arrivals</h2>
                <p className='head-title__des'>How can you evaluate content without design</p>
            </div>
            {loading && <Loader />}
            <div className='new-product__wrapper'>
                {products.map((product) => (
                    <ProductCard key={product.id} productData={product} />
                ))}
            </div>
            <div className='new-product__button-wrapper'>
                <Button onClick={() => navigate('/shop')}>Go To Shop</Button>
            </div>
        </div>
    );
};

export default NewProduct;
