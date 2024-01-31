import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Singin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleUserName = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   

    axios.post('https://apitest.reachstar.io/signin', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data);
        console.log("Successful login");
        alert("Successful login");
        localStorage.setItem('success', response.data.success)
        // Redirect to the "/news" page upon successful login
        navigate('/news', { state: { email}} );
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert(err.response.data);
      });
  }

 

  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center mt-5'>ავტორიზაცია </h2>
          
        </div>
        <div className='col-sm-12 col-md-6 mx-auto mt-4'>
          <form onSubmit={handleSubmit}>
            <label className='mt-3'>  Email </label>
            <input type="email" name="email" value={email} onChange={handleUserName} required placeholder='enter your Email' className='form-control' />
            <label className='mt-3'>   Password </label>
            <input type="password" name="password" value={password} onChange={handlePassword} required placeholder='enter your password' className='form-control' />
            <div className='text-center mt-5'>
              <button className='btn1' type="submit">ავტორიზაცია </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singin;
