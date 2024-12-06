'use client';
import { useParams } from 'next/navigation';
import './styles.css';
import { useEffect, useState } from 'react';
import { kidsads, mensads, Womensads } from '@/app/data';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Provider, useDispatch } from 'react-redux';
import { merastore } from '@/store/store';
import { createUser } from '@/store/slices/user';
import { toast } from 'react-toastify';


export default function Page(){
    return <Provider store={merastore}>
        <Mun></Mun>
    </Provider>
}

 function Mun(){

    let dispatch = useDispatch();
  let [ad, setAd] =  useState({})
  let params = useParams();
  const allProducts =[...mensads, ...Womensads,...kidsads]
  useEffect(()=>{

  let adMilgya = allProducts.find((ad)=>{
    if(decodeURI(params.abc) == ad.name){
      return true;
    }
  });

  if(adMilgya){
    setAd(adMilgya);
  }
    

  }, []);

    return  <div className="container d-flex justify-content-center">
    <figure className="card card-product-grid card-lg">
      {" "}
      <a href="#" className="img-wrap" data-abc="true">
        {" "}
        <Zoom> 
                      <img src={ad.src} />
                     </Zoom> 
      </a>
      <figcaption className="info-wrap">
        <div className="row">
          <div className="col-md-9 col-xs-9">
            {" "}
            <a href="#" className="title" data-abc="true">
              {ad.name}
            </a>{" "}
          </div>
          <div className="col-md-3 col-xs-3">
            <div className="rating text-right">
              {" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <span className="rated">Rated 4.0/5</span>{" "}
            </div>
          </div>
        </div>
      </figcaption>
      <div className="bottom-wrap-payment">
        <figcaption className="info-wrap">
          <div className="row">
            <div className="col-md-9 col-xs-9">
              {" "}
              <a href="#" className="title" data-abc="true">
                PKR {ad.price}
              </a>{" "}
              <span className="rated">VISA Platinum</span>{" "}
            </div>
            <div className="col-md-3 col-xs-3">
              <div className="rating text-right"> #### 8787 </div>
            </div>
          </div>
        </figcaption>
      </div>
      <div className="bottom-wrap">
        {" "}
        <a href="#" onClick={()=>{
            dispatch(createUser(ad))
            toast.success("Added to Cart Successfully")
        }} className="btn btn-primary float-right" id='hh' data-abc="true">
          {" "}
          Add to Cart{" "}
        </a>
        <div className="price-wrap">
          {" "}
          <a href="/" className="btn btn-warning float-left" data-abc="true">
            {" "}
            Main{" "}
          </a>{" "}
        </div>
      </div>
    </figure>
  </div>
  
}







































// <div className="container">   
//           <div className="container-fliud">
//             <div className="wrapper row">
//               <div className="preview col-md-6">
//                 <div className="preview-pic tab-content">
//                   <div className="tab-pane active" id="pic-1">
//                      <Zoom> 
//                       <img src={ad.src} />
//                      </Zoom>                 
//                   </div>             
//                 </div>
             
//               </div>
//               <div className="details col-md-6">
//                 <h3 className="product-title">{ad.name}</h3>
//                 <div className="rating">
//                   <div className="stars">
//                     <span className="fa fa-star checked" />
//                     <span className="fa fa-star checked" />
//                     <span className="fa fa-star checked" />
//                     <span className="fa fa-star" />
//                     <span className="fa fa-star" />
//                   </div>
//                   <span className="review-no">41 reviews</span>
//                 </div>
//                 <p className="product-description">
//                   Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia
//                   sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus
//                   posuere.
//                 </p>
//                 <h4 className="price">
//                   current price: <span>PKR {ad.price}</span>
//                 </h4>
//                 <p className="vote">
//                   <strong>91%</strong> of buyers enjoyed this product!{" "}
//                   <strong>(87 votes)</strong>
//                 </p>
//                 <h5 className="sizes">
//                   sizes:
//                   <span className="size" data-toggle="tooltip" title="small">
//                     s
//                   </span>
//                   <span className="size" data-toggle="tooltip" title="medium">
//                     m
//                   </span>
//                   <span className="size" data-toggle="tooltip" title="large">
//                     l
//                   </span>
//                   <span className="size" data-toggle="tooltip" title="xtra large">
//                     xl
//                   </span>
//                 </h5>
//                 <h5 className="colors">
//                   colors:
//                   <span
//                     className="color orange not-available"
//                     data-toggle="tooltip"
//                     title="Not In store"
//                   />
//                   <span className="color green" />
//                   <span className="color blue" />
//                 </h5>
//                 <div className="action">
//                   <button className="add-to-cart btn btn-default" type="button">
//                     add to cart
//                   </button>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>  
      






