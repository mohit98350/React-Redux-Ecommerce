
import React, { useState } from 'react'
import TextAnimation from 'react-animate-text';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div className="header">
            {/* <div className='inside_header'> */}
            <div className='' >
            <div className='A_text_overimage' style={{
                // position: 'absolute',
                // top:'25%',
                // left:'40%'
                   
                // marginTop: '180px',
                // marginLeft: '700px',
               

            }}>

                <div className='text'>


                <div className='A_text' >

                    <TextAnimation>
                        <h3  style={{
                            fontSize: '40px',
                            color:'black',
                            fontFamily:'revert',
                            marginLeft:'18px'
                            
                        }}>
                            we are  <span style={{color:'tomato'}}>pet friendly..</span>
                        </h3>

                    </TextAnimation>
                    </div>
                    <div className='H_btn'>
                        <Link to={`/details/${1}`}>
                            <Button
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: "white",
                                    color: 'black',
                                    padding: "17px 36px",
                                    marginTop: '2rem',
                                    fontSize: "20px",
                                   
                                        
                                }}
                                variant="contained"
                                type="submit"
                            //onClick={handleSubmit}
                            >Shop Now
                            </Button>
                        </Link>


                    </div>

                </div>


            </div>
            <img className='banner_image' src="/images/05.jpg" />
        </div>
        </div>

    )
}

export default Header
