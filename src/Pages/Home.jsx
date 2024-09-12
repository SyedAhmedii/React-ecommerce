// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import Card from '../Components/Card';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Components/Header';

// const Home = () => {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => console.log("Error:", err))
//     }, [])

//     const singleProduct = (itemId) => {
//         navigate(`/singleproduct/${itemId}`);
//     }

//     return (
//         <>
//         <h1 className="text-center mt-5 mb-5 font-bold text-4xl">Ecommerce app</h1>

//         <Header/>
//             <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
//                 {data.length > 0 ? (data.map((item) => {
//                     return (
//                         <Card key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} showMore={() => singleProduct(item.id)} />
//                     );
//                 })) : <span className="loading loading-spinner loading-lg"></span>}
//             </div>
//         </>
//     )
// }

// export default Home;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log("Error:", err))
    }, []);

    const singleProduct = (itemId) => {
        navigate(`/singleproduct/${itemId}`);
    }

    return (
        <>

        <Header/>
        
        <h1 className="text-center mt-5 mb-5 font-bold text-4xl">Ecommerce App</h1>


        <div className="categories-section my-10">
            <h2 className="text-center font-semibold text-3xl mb-5">Shop by Category</h2>
            <div className="flex justify-center items-center gap-5">
                <div className="category-card p-5 shadow-lg rounded-md text-center cursor-pointer">Electronics</div>
                <div className="category-card p-5 shadow-lg rounded-md text-center cursor-pointer">Clothing</div>
                <div className="category-card p-5 shadow-lg rounded-md text-center cursor-pointer">Accessories</div>
            </div>
        </div>


        <div className="featured-products-section my-10">
            <h2 className="text-center font-semibold text-3xl mb-5">Featured Products</h2>
            <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
                {data.length > 0 ? (
                    data.map((item) => (
                        <Card 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                            showMore={() => singleProduct(item.id)} 
                        />
                    ))
                ) : (
                    <span className="loading loading-spinner loading-lg"></span>
                )}
            </div>
        </div>

        {/* Call-to-Action */}
        <div className="cta-section text-center my-10">
            <h2 className="text-2xl font-bold">Don't Miss Out on Our Exclusive Offers!</h2>
            <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition">Shop Now</button>
        </div>

        {/* Footer */}
        <footer className="footer bg-gray-800 text-white p-10 text-center">
            <p>&copy; 2024 Ecommerce Inc. | All Rights Reserved</p>
            <div className="social-icons mt-4">
                <i className="fa fa-facebook mr-4"></i>
                <i className="fa fa-twitter mr-4"></i>
                <i className="fa fa-instagram mr-4"></i>
            </div>
        </footer>
        </>
    )
}

export default Home;
