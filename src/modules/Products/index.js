import React, { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";


const Products = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setAlbums(data)
        }
        fetchAlbums()
    }, [])
    return (
        <div>
            <Categories />
            <div className="flex flex-col text-center w-full mb-20 mt-20">
                <h2 className="text-xl tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
            </div>
            {
                albums.length > 0 ?
                    <ProductCard albums={albums} />
                    : <div>Loading...</div>
            }
        </div>
    );
}

export default Products;