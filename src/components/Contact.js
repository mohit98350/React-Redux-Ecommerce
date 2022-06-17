import React from 'react'

 const Contact = () => {
  return (
    <div >
        <h1  style={{marginTop:"180px",textAlign:'center'}} className="text-3xl font-bold underline">
      Contact Us
    </h1>
     <section className="text-gray-600 mt-5 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
    style={{filter: "grayscale(1)" , contrast:"1.2" , opacity:'1' }}>
    </iframe> 
  </div>
  
  <div class="container px-5 py-24 mx-auto ">
  <div class="bg-white relative flex flex-wrap py-6 flex rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Shimla,Himachal Pradesh,India</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">furpawsapp@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+ 8329760574</p>
        </div>
      </div>
    </div>
  
</section>
    </div>
  )
}
export default Contact
