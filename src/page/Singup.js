
import React, { useState } from 'react';
import axios from 'axios';
import "./singup.css"

function Singup(){
  const [fData, setFData] = useState({
    name: '',
    email: ' ',
    password: '',
  });

  const handleChange = (e) => {
    setFData({
      ...fData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // jeisona
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Make a POST API
      const response = await axios.post('https://apitest.reachstar.io/signup', fData, config);

      // წარმატებული რეგისტრაცია
      console.log('Registration successful:', response.data);
    } catch (error) {
      // ჩაფლავდი
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
<div className='col-12'>
<h1 className='text-center mt-4'> რეგისტრაცია</h1>

</div>    
     <div className='col-sm-12 col-md-6 mx-auto'>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Username</label>
          <input type="text" name="name" value={fData.name} onChange={handleChange} className='form-control' required />
        
     
        <label> Email</label>
          <input type="email" name="email" value={fData.email} onChange={handleChange}  className='form-control' required />
       
      
        <label>  Password </label>
          <input type="password" name="password" value={fData.password} onChange={handleChange} className='form-control' />
       
       <div className='text-center mt-5'>
       <button type="submit" className='btn1  '>რეგისტრაცია</button>
       </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Singup;
