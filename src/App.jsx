import React, { useEffect } from "react";
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Details from './Components/Details'
import Footer from './Components/Footer'


function App() {

    useEffect(() => {
        document.title = "Tarification"
      })  

    return (
        <div className="App">
            <Navbar />
            <Main />
            <Details />
            <Footer />
        </div>
    );
}

export default App;
