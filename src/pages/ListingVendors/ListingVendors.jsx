import React from 'react'
import Footer from '../../components/ui/Footer'
import Header from '../../components/ui/Header'
import ProductCard from '../../components/ui/ProductCard'

const ListingVendors = () => {
    return (
        <>
            <Header />
                 <main className='main-section'>
                    <ProductCard />
                 </main>
            <Footer />
        </>
    )
}

export default ListingVendors