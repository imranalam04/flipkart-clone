"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Fan from '@/public/assets/1.webp'

const page = () => {
    let [counter,setCounter] = useState(1)
  return (
    <div className='w-10/12 mx-auto flex gap-5 mt-5'>
        <div className="w-8/12 ">
            <div className="flex px-5 justify-center  py-3 items-center text-center bg-white">
                <div className="flex-1">
                    <span className='text-blue-500 border-b-2 border-blue-500 text-xl font-semibold py-3'>Flipkart (1)</span>
                </div>
                <div className="flex-1">
                    <span className='text-xl font-semibold py-3'>Grocery</span>
                </div>
            </div>
            <div className="flex px-5 justify-center  py-3 items-center bg-white mt-2">
                <div className="flex-1">
                    <span className='py-3 text-sm'>
                        From saved Address
                    </span>
                </div>
                <div className="flex-1 text-right">
                    <button className='bg-white px-3 py-2 rounded border hover:shadow-md text-sm text-blue-700 font-semibold'>Enter Delivery Pincode</button>
                </div>
            </div>
         
            <div className='flex-1 flex px-5 justify-between py-3 items-center bg-white mt-2 gap-10'>
            <div className='flex-[0.3] flex-col flex gap-4'>
            <Image src={Fan} alt="" width={100} height={100}/>
            <div className='flex gap-1'>
            <button className='border rounded-full w-7 h-7 text-lg font-bold border-black' onClick={() => setCounter(counter-=1)}>-</button>
            <input type="text" className='w-7 border rounded border-black text-center' value={counter}/>
            <button className='border rounded-full w-7 h-7 text-lg font-bold border-black' onClick={() => setCounter(counter+=1)}>+</button>
            </div>
            </div>
            <div className='flex-1'>
            <div className='flex flex-col w-96 '>
            <h2 className='truncate'>Atomberg Renesa 5 Star BEE Rated 5 Star ⭐</h2>
            <h6 className='text-slate-400'>Ivory & Black, Pack of 1</h6>
            </div>
            </div>
            <div className="flex-1">
            <p>Delivery by Thu Jun 15 | Free₹120</p>
        </div>
            </div>
        </div>
        <div className="w-4/12 bg-white">
           
        </div>
    </div>
  )
}

export default page