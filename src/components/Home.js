import * as React from 'react';
import Values from './home-components/Values'
import Footer from './home-components/Footer'
import Hero from './home-components/Hero'
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>EV-Map</title>
            </Helmet>
            <Hero />
            <Values />
            <Footer />
        </React.Fragment>
    );
}

export default Home;