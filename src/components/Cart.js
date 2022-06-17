import React, { useState } from 'react'
import{useSelector,useDispatch}from "react-redux";
import currencyFormatter from 'currency-formatter';
import{BsDash,BsPlus}from "react-icons/bs";
import { BsTrash } from "react-icons/bs";


const Cart = () => {
 
  const {products, totalQuantities,totalPrice}=useSelector(state => state.CartReducer);
 const dispatch = useDispatch();
 
    return (
      
        <div className="cart">
          
          <div className="container">
          <h2>My Cart</h2>  
          {products.length>0? <>
          <div className="row">
            <div className="col-9">
              <div className="cart__heading">
                <div className="row">
                  <div className="col-2">
                    Product
                  </div>
                  <div className="col-2">
                    Name
                  </div>
                  <div className="col-2">
                    Price
                  </div>
                  <div className="col-2">
                    Inc/Dec
                  </div>
                  <div className="col-2">
                    TotalPrice
                  </div>
                  <div className="col-2">
                    Remove
                  </div>
                </div>

              </div>
              {products.map(product=>(
                <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={`/images/${product.image}`} alt="Image"/>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart__name">
                          {/* {product.name} */}
                          Pet Feeder
                          </div>
                        </div>
                        <div className="col-2">
                        <div className="cart__price ">
                          {currencyFormatter.format(product.discountPrice,{code:'USD'})}
                          </div>
                          </div>
                          <div className="col-2">
                          <div className="details__info cart__incDec">
                    <div className="details__incDec">
                    <span className="dec"onClick={()=>dispatch({type:'DEC',payload:product.id})} ><BsDash/></span>
                    <span className="quantity">{product.quantity}</span>
                    <span className="inc" onClick={()=>dispatch({type:'INC',payload:product.id})} ><BsPlus/></span>
                   
                </div>
                </div>
             </div>
             <div  className="col-2">
               <div className="cart__total text-center">
                 {currencyFormatter.format(product.discountPrice*product.quantity,{code:'USD'})}
                 </div>
               </div>
               <div className="col-2">
                 <div className="cart__remove "
                 onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                 <BsTrash size={30}/>
                   </div>
                 </div>
          </div>
              ))}
            </div>
            <div className="col-3 summary-col">
              <div className="summary">
                <div className="summary__heading">
                  Checkout
                </div>
                <div className="summary__details">
                  <div className="row mb-10 T_items">
                    <div className="col-6 ">
                      Total Items:
                    </div>
                    <div className="col-6">
                  {totalQuantities}
                    </div>
                      </div>
                      <div className="row mb-10">
                      <div className="col-6 T_price ">
                        Total Price:
                        </div>
                      <div className="col-6 T_paisa">
                        {currencyFormatter.format(totalPrice,{code:'USD'})}
                      </div>
                    
                  </div>
                  
             <div className="row T_checkout ">
             <a href="https://rzp.io/l/Dyop7J7xt" class="checkout">Checkout</a>
             {/* <div className=""><Googlepay/></div> */}
             </div>
                
                </div>
             
              </div>
           
            </div>
          </div>
          
          </>:<p className='empty_cart' >Your Cart is Empty</p>}
        </div>
        </div>
    )
}

export default Cart
