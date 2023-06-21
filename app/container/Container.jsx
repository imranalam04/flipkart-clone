import React from "react";
import Image from "next/image";
import grocery from "@/public/assets/grocery.png";
import mobiles from "@/public/assets/mobiles.png";
import fashion from "@/public/assets/fashion.png";
import electronics from "@/public/assets/electronics.png";
import home from "@/public/assets/Home.png";
import appliance from "@/public/assets/appliance.png";
import travel from "@/public/assets/travel.png";
import topoffer from "@/public/assets/topoffer.png";
import toys from "@/public/assets/toys.png";
import twoWheel from "@/public/assets/two-wheelers.png";
import Link from "next/link";

// const Container = (props) => {
//   return (
//     <div>
//       <div className="grid grid-cols-10 gap-10 mx-40 mt-1 my-2">
//         <div>
//           <Image src={props.img} alt=""/>
//           <span>{props.name}</span>
//         </div>
//        </div>
//       <hr />
//    </div>
//   );
// };

const Container = () => {
  return (
    <div>
    <div className="grid grid-cols-10 gap-8 mx-40 mt-1">
    <div>
        <Image className="h-auto max-w-full rounded-lg" src={grocery} alt="" />
        <span>Grocery</span>
    </div>
    <div>
    <Link href="/gallery">
        <Image className="h-auto max-w-full rounded-lg" src={mobiles} alt="" />
        <span>Mobiles</span>
        </Link>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src={fashion} alt="" />
        <span>Fashion</span>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src={electronics} alt=""  />
        <span>Electronics</span>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src={home} alt="" />
        <span>Home</span>
    </div>
    <div>
    <Image className="h-auto max-w-full rounded-lg" src={appliance} alt="" />
    <span>Appliance</span>
</div>
<div>
<Image className="h-auto max-w-full rounded-lg" src={travel} alt="" />
<span>Travel</span>
</div>
<div>
<Image className="h-auto max-w-full rounded-lg" src={topoffer} alt="" />
<span>Top Offers</span>
</div>
<div>
<Image className="h-auto max-w-full rounded-lg" src={toys} alt="" />
<span>Toys</span>
</div>
<div>
<Image className="h-auto max-w-full rounded-lg" src={twoWheel} alt="" />
<span>TwoWheeler</span>
</div>
   </div>
   <hr className="mt-2"/>
   </div>

  );
};


export default Container;
