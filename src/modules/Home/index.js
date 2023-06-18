import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import Products from "../../components/ProductCard";
import StatCard from "../../components/StatCard";
import Categories from "../../components/Categories"

const Home = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)
            setAlbums(data)
        }
        fetchAlbums()
    }, [])

    return (
        <>
            <Hero />
            <Categories />
            <div className="flex flex-col text-center w-full mb-20 mt-20">
                <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                albums.length > 0 ?
                    <ProductCard albums={albums} />
                    :
                    <div>Loading...</div>
            }
            <Products />
            <StatCard />
        </>
    );
}

export default Home;
