import React from "react";
import "./Navbar.css"


export default function Navbar(){
  return<nav className="nav">
    <a href="/" className="site-title">
      Infinity
      </a>
    <ul>
      <li className="active">
        <a href="/">Home</a>
       
      </li>
      <li>
      <a href="/about">About</a>
      </li>
      <li>
      <a href="/news">News</a>
      </li>
      <li>
      <a href="/contact">Contact</a>
      </li>
      <li>
      <a href="/singin">
        <button className="singin">Sing In</button></a>      
      </li>
      <li>
      <a href="/singup">
        <button className="singup">Sing Up</button></a>
      
      </li>
    </ul>
  </nav>
}
