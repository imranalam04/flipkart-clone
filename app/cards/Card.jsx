import React from "react";
import Link from "next/link";
import Image from "next/image";
import down from "@/public/assets/down.png";
import Projector from "@/public/assets/projector.png";
import Camera from "@/public/assets/camera.png";
import Projectors from "@/public/assets/projectors.png";
import Shaver from "@/public/assets/shaver.png";
import spicejet from "@/public/assets/spice.png";
import Samsung from '@/public/assets/samsung.png'

const Card = () => {
  return (
    <div className="grid grid-cols-6 mx-3 gap-8 ">
      <div className="mt-12 text-center">
          <h2 class="mb-2 text-3xl text-dark leading-normal">Best Of <br/> Electronics</h2>
          <button
            type="button"
            className=" bg-[#2874f0] font-medium mt-5 text-sm px-5 py-2.5 mr-2 mb-2"
          >
            View All
          </button>
         <div className="mt-8">
            <Image className="rounded-t-lg" src={down} alt="" />
         </div>
      </div>
      <div>
      <Link href="/mobiles">
        <Image class="h-auto max-w-full rounded-lg" src={Samsung} alt="" />
        </Link>
        <div className="mt-9 text-center">
        <span className="font-bold mx-10 text-sm">Samsung S21 FE</span>
        </div>
        <div className="mt-2 text-center">
        <span className=" text-green-700">incl of offers</span>
        </div>
        <div className="mt-2 text-center">
        <span className=" text-sm text-gray-400">From ₹31.999</span>
        </div>
      </div>
      <div>
        <Image class="h-auto max-w-full rounded-lg" src={Camera} alt="" />
        <div className="mt-9 text-center">
        <span className=" text-sm font-bold">Top Mirrorless Camera</span>
        </div>
        <div className="mt-2 text-center">
        <span className="text-green-700 mx-4">Shop Now</span>
        </div>
        <div className="mt-2 text-center">
        <span className="mx-4 text-sm text-gray-400">Canon, Sony, Fujifilm...</span>
        </div>
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" src={Projectors} alt="" />
        <div className="mt-9 text-center">
        <span className="text-sm font-bold">Projector</span>
        </div>
        <div className="mt-2 text-center">
        <span className="text-green-700 mx-4">From ₹6990</span>
        </div>
        <div className="mt-2 text-center">
        <span className=" text-sm text-gray-400">Egate</span>
        </div>
    </div>
      <div className="mx-10">
        <Image
          className="h-auto max-w-full rounded-lg"
          src={Shaver}
          width={60}
          alt=""
        />
        
          <div className="mt-3 text-center">
        <span className="text-sm font-bold">Best of Shavers</span>
        </div>
        <div className="mt-2 text-center">
        <span className="text-green-700 mx-4">From ₹1,000</span>
        </div>
        <div className="mt-2 text-center">
        <span className=" text-sm text-gray-400">Philips & Havells</span>
        </div>
      </div>
      <div>
        <Image
          className="h-auto max-w-full mx-2"
          style={{boxShadow: "-20px 0 20px -20px rgba(0, 0, 0, 0.45)"}}
          src={spicejet}
          width={250}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
