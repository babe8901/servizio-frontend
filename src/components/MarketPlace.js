import Header from "./Header"
import Footer from "./Footer"
import Cookies from 'js-cookie'
import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Wheat',
        href: '/market-place/crop-modal',
        imageSrc: process.env.PUBLIC_URL + '/crops/wheat.jpg',
        imageAlt: "Wheat",
        price: '₹15/kg',
    },
    {
        id: 2,
        name: 'Rice',
        href: '#',
        imageSrc: process.env.PUBLIC_URL + '/crops/rice.jpg',
        imageAlt: "Rice",
        price: '₹51/kg',
    },
    {
        id: 3,
        name: 'Cotton',
        href: '#',
        imageSrc: process.env.PUBLIC_URL + '/crops/cotton.jpeg',
        imageAlt: "Cotton",
        price: '₹40/kg',
    },
    {
        id: 4,
        name: 'Coffee',
        href: '#',
        imageSrc: process.env.PUBLIC_URL + '/crops/coffee.jpg',
        imageAlt: "Coffee",
        price: '₹800/kg',
    },
]

export default function MarketPlace() {


    return (
        <>
            <Header />
            {/* <p>{this.state.crops}</p> */}
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="pb-5">
                        <h2 className="text-5xl text-indigo-600 font-bold tracking-wide uppercase lg:text-center">Market Place</h2>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to="/market-place/crop-modal">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
