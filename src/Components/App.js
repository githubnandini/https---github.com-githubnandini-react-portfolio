import React from "react";
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'



const App = () => {
    return <>
    <Header />

        <Banner />
        <div style = {{maxWidth : '1200px', margin : '0 auto', background : 'black' , color : 'white' }}>
        <About id  = "about" />
        <Skills id = "skills" />
        <Work />
        </div>
        <Contact/>
        </>
}


export default App