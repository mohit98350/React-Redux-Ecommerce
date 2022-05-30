import React from 'react'
const Footer = () => {
    return (
      
      <div className='ft' >
 
 <footer class="text-center ft text-lg-start bg-light text-muted mt-5">

  <section
    class="d-flex  justify-content-center justify-content-lg-between p-3 border-bottom " >

    <div class="me-5 d-none d-lg-block ">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div >
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
    
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
   
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-2">
     
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <img src='../images/furpaaws.jpeg' class="footer_logo"/>furpaaws
          </h6>
          <p>
          Who feeds a hungry animal feeds his own soul. – Charlie Chaplin
          </p>
        </div>
       
       
        
        <div  class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
         
        </div>
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Shimla Himachal Pradesh,India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i>+ 8329760574 </p>
         
        </div>
      
      </div>
    </div>
  </section>
 
  <div class="text-center p-3" style={{backgroundColor:'black'}}>
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="/">furpaaws.com</a>
  </div>
</footer> 

      </div>
   
  )
}

export default Footer;