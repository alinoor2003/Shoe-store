"use client";
import Link from "next/link";

import "./card.css";
export default function Card({meraad}){
    return  <div className="card" style={{ width: "18rem" }}>
    <Link href={"/product-details/"+meraad.name} >
    {/* <h1>{m}</h1> */}
<div style={ {textAlign:'center'} }>
    <img className="card-img-top" src={meraad.src} alt="Card image cap" />
</div>
  <h5 className="card-title">{meraad.name}</h5>
  <p className="card-text">
    Price Rs:{meraad.price}
  </p>
 
</Link>
</div>
} 




//href={"/product-detail/"+meraad.name}