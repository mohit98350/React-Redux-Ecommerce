import React from 'react'
import { Grid } from "@material-ui/core"
import Slider from "react-slick";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@material-ui/core';
import { Link } from "react-router-dom";



const Home_body = () => {



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
        breakpoint: 480,
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
    <div className='cont'>
      <Grid container spacing={2}  >
        <Grid style={{}} item md={1}>
        </Grid>
        <Grid className="style_grid" item md={10}>
          <Grid item={5}>
            <div className='text_overimage'>
              <div className='text'>

                From muting meowing cats, to slimming down fatty furballs, discover tips, tricks, mysteries, and more here on our blog.
              </div>
              <div className='btn'>
                <a href='https://www.furpaaws.in/blog'>
                <Button  varient="outlined" > Blog</Button>  
                </a>
                      
              </div>

            </div>

          </Grid>
          <Grid item={5}>
            <img style={{ width: '100%' }} className="grid_img" src="https://cdn.shopify.com/s/files/1/0252/5197/1119/files/Blog_e58428d3-d8b7-433c-a053-6b5c25115a15.png?v=1646896533" />

          </Grid>


        </Grid>

        <Grid style={{}} item md={1}>
        </Grid>

      </Grid>
      <br />

      <div className="items">
        {/* <h2 className="trending_text"> What people are saying</h2> */}
        <h3  style={{marginTop:'40px',textAlign:'center'}} className="text-2xl font-bold underline">
     What people are saying...
    </h3>
        
        <Slider className="slider" style={{ marginTop:'50px'}}{...settings}>


          <Card key={1} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='../images/pic5.jfif'
                title='card'
              />
              <CardContent className={classes.content}>

                <p>
                  “This is a GREAT little fountain! Soooo easy to assemble, and I love the filter pack that pops in just under the top- keeps the water fresh and the slime at bay!”
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

          <Card key={1} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='../images/pic5.jfif'
                title='card'
              />
              <CardContent className={classes.content}>

                <p>
                  “This is a GREAT little fountain! Soooo easy to assemble, and I love the filter pack that pops in just under the top- keeps the water fresh and the slime at bay!”
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
                  “This is a GREAT little fountain! Soooo easy to assemble, and I love the filter pack that pops in just under the top- keeps the water fresh and the slime at bay!”
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
                  “This is a GREAT little fountain! Soooo easy to assemble, and I love the filter pack that pops in just under the top- keeps the water fresh and the slime at bay!”
                </p>

              </CardContent>
            </CardActionArea>
            <CardActions className="cardaction">

              <div className="user_name">
                Kimberly Hickerson
              </div>

            </CardActions>
          </Card>




        </Slider>
      </div>
    </div>

  )
}

export default Home_body