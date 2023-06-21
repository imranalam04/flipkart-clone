import React from 'react'
import Sidebar from '../sidebar/sidebar'
const Mobile = () => {
  return (
<div>
<div class="flex gap-10 mx-40 mt-3">
<div className='text-center'>
<span>Electronics</span>
</div>
<div className='text-center'>
<span>TVs & Appliance</span>
</div>
<div className='text-center'>
<span>Men</span>
</div>
<div className='text-center'>
<span>Women</span>
</div>
<div className='text-center'>
<span>Baby & kids</span>
</div>
<div className='text-center'>
<span>Home & Furniture</span>
</div>
<div className='text-center'>
<span>Sports,Books & More</span>
</div>
<div className='text-center'>
<span>Flights</span>
</div>
<div className='text-center'>
<span>Offer Zone</span>
</div>
</div>
<hr className='mt-2'/>
<div className='mt-3 text-1xl font-semibold mx-2'>
</div>
<Sidebar/>
</div>
  )
}

export default Mobile