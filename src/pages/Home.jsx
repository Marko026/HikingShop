import React from 'react'
import HeroHeader from "../components/HeroHeader"
import FeaturedItmes from "../components/FeaturedItems"
import Subscribe from "../components/Subscribe"

const Home = () => {
    return (
        <>
            <HeroHeader />
            <FeaturedItmes />
            <Subscribe />
        </>
    )
}

export default Home