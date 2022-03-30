import * as React from 'react';
import Values from './home-components/Values'
import Footer from './home-components/Footer'
import Hero from './home-components/Hero'

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <Values />
            <Footer />
        </React.Fragment>
    );
}

export default Home;