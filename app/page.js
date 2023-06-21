
import Container from './container/Container'
import Product from '@/data'
import Card from './cards/Card'
import Aarousel from './carousel/Aarousel'

export default function Home() {
  return (
//  <div>
//  {Product.map((imran,id) => {
// return (<Container name={imran.name} image={imran.img} key={imran.id} />)
//  })}
//  </div>
<div>
<Container />
<Aarousel />
<hr className='pt-5'/>
<Card />
</div>
  )
}
