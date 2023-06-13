import React from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import FeatureCard from "../../components/FeatureCard";

function Home() {
    return (
        <>
            <Hero />
            <h2 className="text-4xl font-bold text-center">Products</h2>
            <Products />
            <FeatureCard />
        </>
    );
}

export default Home;
