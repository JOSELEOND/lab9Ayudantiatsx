import { useEffect, useState } from "react"
import "./Card.css"

export const Card = () => {
    const [ data, setProduct ] = useState({});
    const productId = Math.floor(Math.random() * 100) + 1;
    
    useEffect (() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    },[]);
    return(
        <div className="card">
            {data.images && data.images.length > 0 && (
                <img className="img" src={data.images[0]} alt="Product" />
            )}
            <p> {data.title} </p>
            <p> Descrption: {data.description} </p>
            <p>USD$:{data.price}</p>
            <p>{data.brand}</p>
        </div>
    )

}

    
