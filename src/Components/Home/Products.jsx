import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='space-y-4 mt-8 '>
            <div className='text-center space-y-2'>
                <h1 className='font-semibold text-xl text-[#FF3811]'>Popular Products</h1>
                <h1 className='font-bold text-5xl text-black'>Browse Our Products</h1>
                <p className='w-2/3 text-center mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>

            <div className='mt-10 grid grid-cols-3 gap-4'>
                {
                    products.map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)
                }

            </div>

            <button className="btn bg-[#FF3811] text-white">More Products</button>
        </div>
    );
};

export default Products;