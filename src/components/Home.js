import React from 'react'
import Header from "./Header"
import { useSelector } from "react-redux";
import currencyFormatter from 'currency-formatter';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core"
import Home_body from './Home_body';

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);

    return (
        <div>
            <Header />
          
            <div className="container ">
                <div className="row">
                <h3  style={{marginTop:'40px',textAlign:'center'}} className="text-1xl font-bold underline">
            Latest Products
    </h3>
                    {products.map(product => (
                        <div className="cols-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}>

                                        <img src={`/images/${product.image}`} alt="img-name" />
                                    </Link>

                                </div>
                                <div className="product__name">
                                    {/* {product.name} */}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">

                                            {/* <span className="actualPrice"> {currencyFormatter.format(product.Price,{code:'USD'})}
                                        </span> */}
                                            {/* <span className="discount">{product.discount}%</span> */}
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                            {/* {currencyFormatter.format(product.discountPrice,{code:'USD'})} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                 
                </div>
            </div>
                   <Home_body/>
                 
                       {/* <div  style={{marginTop:'80px'}} className="" >
                       <img  className="f_logo" src='https://cdn.shopify.com/s/files/1/0252/5197/1119/files/lQLPDhtB4CWDCErNAajNCvCwtEMei7wg0yQCPJqOqcBTAA_2800_424.png?v=1648025467'/>
                       </div> */}
                   
                  
                   
                   
                   
        </div>



    )

}

export default Home
