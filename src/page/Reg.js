import "./Reg.css"
import axios from "axios";
import React, { useState } from 'react';

function Reg(){
  const [fData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios('https://apitest.reachstar.io/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fData),
    })
      .then((response) => response.json())
      .then((data) => {
       if(fData.name.length === ' ' || fData.email.length === ' ' ||fData.password.length<4 )
       { window.alert("არ შეიძლება ველები იყოს ცარიელი ან პაროლი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს ")}
       else {
        window.alert("რეგისტრაცია წარმატებით გაიარეთ ")}
        console.log('Registration successful:', data);
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
  <div className="card-class">
    <h1 className="mt-5">Registration</h1>
<form onSubmit={handleSubmit}>
<div className="form-group mt-3">
  <label>Name Lastname</label>
  <input type="text"  className="form-control"  placeholder="Enter Name and Lastname"
value={handleChange}
  />

  
</div>



<div className="form-group mt-3">
  <label>email</label>
  <input type="email"  className="form-control"  placeholder="Enter Email"
  
  value={fData.email} 
  
  />
  
  
  
</div>

<div className="form-group mt-3">
    <label>password</label>
    <input type="password"  className="form-control"  placeholder="Enter Paassword"
    
    value={fData.password} 
    
    />
  </div>
  <button type="submit" className="btn btn-primary mt-4 btn1" >რეგისტრაცია</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  );
};


export default Reg;
