"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Img1 from '@/public/assets/1.png'  
import Img2 from '@/public/assets/2.png' 
import Img3 from '@/public/assets/3.png'  



 const Aarousel = () => {
        return (
            <div className='mt-4'>
              <Carousel>
                  <div>
                      <Image src={Img1} alt="image1"/>
  
                  </div>
                  <div>
                      <Image src={Img2} alt="image2" />
  
                  </div>
                  <div>
                      <Image src={Img3} alt="image3"/>
  
                  </div>
              </Carousel>
              <div>

              </div>
            </div>
        );
    
  }

  export default Aarousel;