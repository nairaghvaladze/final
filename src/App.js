import Navbar from "./Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./page/Home";
import News from "./page/News";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import About from "./page/About";








function App(){
    
 
    
    return(
        <>  <Navbar />
        <div>

        <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                 
                    <Route path="/news" element={<News />} /> 
                    
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />                 
          
                  
                   
                  
                </Routes>
            </BrowserRouter>
          
        </div>

       
        <Footer />
        </>
    
    )
}

export default App