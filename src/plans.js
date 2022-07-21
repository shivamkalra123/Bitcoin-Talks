import React from 'react'
import './plan.css'
import {BsCalendarCheck} from 'react-icons/bs'

const plans = () => {
  return (
    <div className='parent'>
       <div data-aos="fade" class="row">
     
  <div  class="column">
  
    <div  class="card">
    <BsCalendarCheck color='green' size={50}/>
      <h3 className='heading'>Basic Pack</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h1 className='price'>12$/mo</h1>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <BsCalendarCheck color='green' size={50}/>
      <h3 className='heading'>Standard Pack</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h1 className='price'>18$/mo</h1>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <BsCalendarCheck color='green' size={50}/>
      <h3 className='heading'>Premium Pack</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h1 className='price'>24$/mo</h1>
    </div>
 
  </div>
  <div className='free'>
      <a className='trial' href='#'>Get A Free Trial</a>
    </div>
        </div>
        
    </div>
  )
}

export default plans