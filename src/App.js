import React from 'react'
import { Brand, CTA, Navbar } from './components';
import { Blog, Footer, Header, Features, WhatGPT3, Possibility } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
