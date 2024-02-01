import React from "react";
import Singup from "./Singup";
import Singin from "./Singin";

import "./home.css"


function Home(){


    
    const alert1 = () => {
       

        
        
         document.getElementById("overlay1").style.display="none";
        document.getElementById("overlay").style.display="block";
       
        
    }
const alert = () => {
    
    document.getElementById("overlay1").style.display="block";
    document.getElementById("overlay").style.display="none";

    
}

return (
    <div className="container">
        <div className="row">
            <div className=" col-sm-12 col-md-6 overlay-container">
          <div><Singin /></div> 
         
          <div className="overlay" id="overlay" >
            <h4>კეთილი იყოს თქვენი მობრძანება! </h4>
           <p className="text2"> თუ გინდათ მიიღოთ დეტალური ინფორმაცია საიტზე, 
           გთხოვთ გაიარეთ ავტორიზაცია ან დარეგისტრირდეთ</p>
          <button onClick={alert} className="avto">რეგისტრაცია</button>
          </div>

          <div className="overlay1 " id="overlay1" >
            <h4>კეთილი იყოს თქვენი მობრძანება! </h4>
           <p className="text2"> საიტზე შესასვლედად გაიარეთ რეგისტრაცია ან გადადით ავტორიზაციის გვერდზე </p>
          <button onClick={alert1} className="reg">ავტორიზაცია</button>
          </div>
          </div>
           

            <div className="col-sm-12 col-md-6  mt-3">
           <Singup />
           
            </div>
          
        </div>
    </div>
)

}
export default Home