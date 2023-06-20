import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCart from "../../components/ProductCart"

const CategoryProduct = () => {
    const { name } = useParams()
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            console.log(data)
            setAlbums(data)
        }
        fetchAlbums()
    }, [])
    if (albums.length === 0) return <div>Loading....</div>
    return (
        <ProductCart albums={albums} />
    )
}

export default CategoryProduct