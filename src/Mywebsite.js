import React, { useEffect } from 'react'
import './style.css'
import image from './images/4054966.jpg'
import image1 from './images/bitcoin-dominance-1-removebg-preview.png'
import image2 from './images/Untitled.png'
import apple from './images/apple-podcast-logo-0CF661058F-seeklogo.com.png'
import insta from './images/instagram-removebg-preview.png'
import facebook from './images/facebook.png'
import Plan from './plans.js'
import Speaker from './speaker.js'
import Talk from './talk.js'
import Footer from './footer.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Mywebsite = () => {
  useEffect(()=>{
    Aos.init({duration:2000})

  },[]);
    return (
      <div className='parent'>
   <div className='navbar'>
      
<ul>
<img className='c' src={apple} alt='why'></img>
<img className='d' src={insta} alt='insat'></img>
<img className='e' src={facebook} alt='face'></img>
<li className='a'><a class="active" href="#home">Home</a></li>
<li className='a'><a href="#news">Plans</a></li>
  <li className='a'><a href="#contact">Speakers</a></li>
  
  
</ul>
</div>

<div className='wrapper'>

<img data-aos="fade-down" className='deskto' src={image} alt='wow'></img>
</div>

<div className='wrapper1'>
<img className='bit' src={image1} alt='id'></img>
<h1 className='talks'>BITCOIN <br/> TALKS</h1>
<img className='spotify' src={image2} alt='kuch'></img>
</div>
<div className='wrapper'>
<div className='plans'>
  <Plan/>

</div>
<Speaker/>

</div>
<Talk/>
<Footer/>

       </div>
          )
}

export default Mywebsite
