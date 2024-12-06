"use client";
import "./header.css";
import Link from "next/link";


export default function Header(){
   
  
   
   return <nav className="navbar navbar-expand-lg navbar-light ">
    <a id="bb" className="navbar-brand" href="#">
      Shoe Store
    </a>
    <button className="navbar-toggler" type="button" onClick={() => {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  navbarCollapse.classList.toggle('show');
}}>
  <span className="navbar-toggler-icon" />
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a  className="uio" href="/">
            Home <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/menscard">
            Mens
          </Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link" href="/kidscard">
            Kids
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" href="/womenscard ">
            Womens
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
}