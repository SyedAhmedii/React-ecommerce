import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

const SingleProduct = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
            })
            .catch((err) => console.log("Error: ", err))
    }, [])
    return (
        <>
        <div className='flex justify-center items-center'>
            <Card title={data.title} description={data.description} price={data.price} image={data.image} />
        </div>
        </>
    )
}

export default SingleProduct;