"use client";
import { merastore } from "@/store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

import "./cart.css";
import { removeUser } from "@/store/slices/user";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function Page(){
    return <Provider store={merastore}>
        <Min></Min>
    </Provider>
}

function Min(){
    let dispatch = useDispatch();

let datas = useSelector((store)=>{
    return store;
});

const [cartItemCount, setCartItemCount] = useState(0);
let total = 0;
  
datas.cart.forEach((item) => {
  total += item.price;
});


useEffect(() => {
    setCartItemCount(datas.cart.length);
  }, [datas.cart]);



return <div>
     <div>
        <span className="b">
  {cartItemCount} (Items in your Cart)
        </span>
        <br></br>
        <span className="b">
          Total Bill is : {total}
        </span>
      </div>
     <div>

</div> 
    
    
    
    {datas.cart.map((data, i) => {
  return <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
      <div className="col-md-8">
        <div className="p-2">
          <h4>Shopping cart</h4>
          <div className="d-flex flex-row align-items-center pull-right">
            <span className="mr-1">Sort by:</span>
            <span className="mr-1 font-weight-bold">Price</span>
            <i className="fa fa-angle-down" />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
          <div className="mr-1">
            <img
              className="rounded"
              src={data.src}
              width={70}
            />
          </div>
          <div className="d-flex flex-column align-items-center product-details">
            <span className="font-weight-bold">{data.name}</span>
            <div className="d-flex flex-row product-desc">
              <div className="size mr-1">
                <span className="text-grey">Size:</span>
                <span className="font-weight-bold">&nbsp;M</span>
              </div>
              <div className="color">
                <span className="text-grey">Color:</span>
                <span className="font-weight-bold">&nbsp;Grey</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center qty">
            <i className="fa fa-minus text-danger" />
            <h5 className="text-grey mt-1 mr-1 ml-1">1</h5>
            <i className="fa fa-plus text-success" />
          </div>
          <div>
            <h5 className="text-grey">PKR {data.price}</h5>
          </div>
          <div className="d-flex align-items-center">
            <i onClick={()=>{
                dispatch(removeUser(datas))
                toast.error("Item Deleted")
                setCartItemCount(cartItemCount - 1);
            }} className="fa fa-trash mb-1 text-danger" />
          </div>
        </div>
        </div>
        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
          <input
            type="text"
            className="form-control border-0 gift-card"
            placeholder="discount code/gift card"
          />
          <button className="btn btn-outline-warning btn-sm ml-2" type="button">
            Apply
          </button>
        </div>
        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
          <button onClick={()=>{
            toast.success("soon you will receive order!Thank You Very Much");
          }}
            className="btn btn-warning btn-block btn-lg ml-2 pay-button"
            type="button"
          >
            Proceed to Pay
        
          </button>
          <br></br>
        </div>
      </div>
    </div>

   })
}
</div>

}














































{/* <div>
<table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {
    datas.cart.map((data, i) => {
     return <tr key={i}>
        <td>
          <img width="40" src={data.src} alt={data.name} />
        </td>
        <td>{data.name}</td>
        <td>{data.price}</td>
      </tr>
    })
  }
    <tr>
      <th>Total Bill</th>
      <th colSpan="2">{total}</th>
    </tr>
  </tbody>
</table>
</div> */}