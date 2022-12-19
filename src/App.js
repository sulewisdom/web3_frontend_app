import React from "react";
import './App.css';
import'./index.css';


//import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './container';
//import {Cta, Brand, Navbar, Feature, Article} from './components';
import Article from './components/article/Article';

import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'

import Blog from './container/blog/Blog';
import Features from './container/features/Features'
import Footer from './container/footer/Footer'
import Header from './container/header/Header'
import Possibility from './container/possibility/Possibility'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
const App = () => {
    return(
        <div className="App">
            <div className="gradient_bg">
                   <Navbar />
                   <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />

            <Article />
            <WhatGPT3 />
            <Feature />
        </div>
    )
} 

export default App