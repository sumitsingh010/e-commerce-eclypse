import React from 'react';
import { Header, Footer, ProductCard } from '../components';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Example ProductCard components */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;