import React,{useEffect,useState} from 'react';
import {useParams}from "react-router-dom";
import{useDispatch , useSelector} from "react-redux";
import currencyFormatter from 'currency-formatter';
import{BsDash,BsPlus}from "react-icons/bs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import { CardActionArea } from '@mui/material';
import { CardActions } from '@material-ui/core';


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

   var settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      margin: 20
    },
    media: {
      height: 200,
    },
    content: {
      height: 150,
      textAlign: 'center',
      fontFamily: 'Avenir-Roman',
      marginLeft: '22px'
    }
  });
  const classes = useStyles();
    return (
      <>
        <div style={{marginTop:'150px'}} className="container mt-100">
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
                <div style={{textAlign:'center',paddingTop:'10px'}} className="details__p">
                {product.des}
                <br/>
                    <h3 style={{textAlign:'center',paddingTop:'15px',color:'black',fontWeight:'600'}}>Available Offers</h3>
                    <br/>
                    <p>Special PriceGet extra 2% off (price inclusive of discount)T&C</p>
                    <p>Bank Offer5% off on ICICI Bank Cards, up to $1. On orders of $5 and aboveT&C</p>
                    <p>Bank Offer3% Unlimited Cashback on  Axis Bank Credit CardT&C</p>
                    <br/>
                    {/* <h3>Services</h3>
                    <br/>
                    <p>14 Days Return Policy</p>
                    <p>Cash on Delivery available</p> */}
                    
                </div>
                </div>
            </div>
            </div>
            <div className="detail_items">
        <h2 className="Desc_text"> Description</h2>
        <Slider className="slider" {...settings}>


          <Card key={1} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='../images/pic5.jfif'
                title='card'
              />
              <CardContent className={classes.content}>

                <p>
                “Dogs are now drinking daily as needed and they seem happy. Thanks for making something so simple and easy.”   
                </p>

              </CardContent>
            </CardActionArea>
            <CardActions className="cardaction">

              <div className="user_name">
                Kimberly Hickerson
              </div>

            </CardActions>
          </Card>

          <Card key={1} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='../images/pic5.jfif'
                title='card'
              />
              <CardContent className={classes.content}>

                <p>
                  
     “Works great. Will recommend to anyone looking for an automatic cat feeder. Will be very convenient when going out of town for the weekend.”   
     
                </p>

              </CardContent>
            </CardActionArea>
            <CardActions className="cardaction">

              <div className="user_name">
                Rita05
              </div>

            </CardActions>
          </Card>

          <Card key={1} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='../images/pic5.jfif'
                title='card'
              />
              <CardContent className={classes.content}>

                <p>
                “Dogs are now drinking daily as needed and they seem happy. Thanks for making something so simple and easy.”   
                </p>



              </CardContent>
            </CardActionArea>
            <CardActions className="cardaction">

              <div className="user_name">
              Sara D
              </div>

            </CardActions>
          </Card>

          




        </Slider>
      </div>
       
        </>
    )
}

export default Details
