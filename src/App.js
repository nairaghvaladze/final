import Navbar from "./Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import News from "./page/News";
import Contact from "./page/Contact";
import Reg from "./page/Reg";
import Footer from "./page/Footer";


function App(){
    return(
        <>  <Navbar />
        <div>

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singup" element={<Reg />} />


            </Routes>
            </BrowserRouter>
        </div>
        <Footer />
        </>
    
    )
}

export default App