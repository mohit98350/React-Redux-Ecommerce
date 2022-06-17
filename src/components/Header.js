
import React, { useState } from 'react'
import TextAnimation from 'react-animate-text';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div className="header">
            {/* <div className='inside_header'> */}
            <div className='A_text_overimage' style={{
                position: 'absolute',
                marginTop: '180px',
                marginLeft: '500px',

            }}>

                <div className='text'>



                    <TextAnimation>
                        <h3 style={{
                            fontSize: '50px',
                            color:'black',
                            fontFamily:'revert'
                        }}>
                            Welcome to our website where we feed pets.....
                        </h3>

                    </TextAnimation>
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
        // </div>

    )
}

export default Header
