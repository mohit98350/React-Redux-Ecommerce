import React,{useEffect,useState} from 'react';
import {useParams}from "react-router-dom";
import{useDispatch , useSelector} from "react-redux";
import currencyFormatter from 'currency-formatter';
import{BsDash,BsPlus}from "react-icons/bs";


const Details = () => {
    const[quantity,setQuantity]= useState(1)
    const {id} = useParams();
    const dispatch = useDispatch();
    const{product} = useSelector(state => state.ProductsReducer); //Accessing individual selected data//
    
   useEffect(() => {
     dispatch({type:'PRODUCT', id})   //calls(Reducer function) when a new item is clicked//
   }, [id])
    
   const decQuantity = ()=>{
       if(quantity>1){
           setQuantity(quantity-1);
       }
   }
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="Image"/>
                    </div>
                </div>
                <div className="col-6">
                <div className="details__name">
                    {product.name}
                </div>
                <div className="details__price">
                    <span className="details__actual">
                        {currencyFormatter.format(product.Price,{code:'USD'})}
                    </span>
                    <span className="details__discount">{currencyFormatter.format(product.discountPrice,{code:'USD'})}</span>
                </div>
                <div className="details__info">
                    <div className="details__incDec">
                    <span className="dec" onClick={decQuantity}><BsDash/></span>
                    <span className="quantity">{quantity}</span>
                    <span className="inc" onClick={()=>setQuantity(quantity+1)}><BsPlus/></span>
                    <button className="btn-default "onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>Add To Cart</button>
                </div>
                </div>
                <div className="details__p">
                {product.des}
                <br/>
                    <h3>Available Offers</h3>
                    <br/>
                    <p>Special PriceGet extra 2% off (price inclusive of discount)T&C</p>
                    <p>Bank Offer5% off on ICICI Bank Cards, up to $1. On orders of $5 and aboveT&C</p>
                    <p>Bank Offer3% Unlimited Cashback on  Axis Bank Credit CardT&C</p>
                    <br/>
                    <h3>Services</h3>
                    <br/>
                    <p>14 Days Return Policy</p>
                    <p>Cash on Delivery available</p>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details
