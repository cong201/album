import React from "react";
import { Link } from "react-router-dom";
const navigations = [
    {
        name: 'HOME',
        path: '/'
    },
    {
        name: 'PRODUCTS',
        path: '/products'
    },
    {
        name: 'ABOUT',
        path: '/about'
    },
    {
        name: 'CONTACT',
        path: '/contact'
    }
]

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container cursor-pointer mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Welcome</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {
                        navigations.map((navigation) => {
                            return <Link to={navigation.path} className="mr-5 hover:text-gray-900  ">{navigation.name}</Link>
                        })
                    }

                </nav>
                <Link to={'/carts'} className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Go to Cart
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </header>
    );
}

export default Header;