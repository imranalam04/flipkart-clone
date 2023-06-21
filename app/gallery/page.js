import React from 'react'
import Image from 'next/image'
import gallery from '@/public/assets/shop.png'

const Gallery = () => {
  return (
    <div>
    <div className=''>
    <h1 className=''>Mobile Phones Big Saving Days</h1>
    </div>
    <div className=''>
    <Image src={gallery} alt="image" priority/>
    </div>
    </div>
  )
}

export default Gallery