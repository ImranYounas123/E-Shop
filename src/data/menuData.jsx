const menuData = [
    { name: 'HOME', url: '/' },
    { name: 'SHOP', url: '/shop' },
    { name: 'CONTACT US', url: '/COMPARE' },
    {
        name: 'CATAGORY',
        url: '/catagory',
        submenu: [
            { name: 'Gaming consoles', url: '/catagory/consols' },
            { name: 'Phone', url: '/catagory/phone' },
            { name: 'Accessories', url: '/catagory/accessories' },
            { name: 'Headphone', url: '/catagory/headphone' },
        ],
    },
    { name: 'ABOUT US', url: '/about' },
];
export default menuData;