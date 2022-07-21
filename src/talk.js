import React from 'react'
import podcasters from './images/podcast-influencers-CONTENT-2019.jpg'
import respond from './images/responsive.jpg'
import './talk.css'

const talk = () => {
  return (
    <div>
        <div  className='talkers'>
            <img data-aos="zoom-in" className='once' src={podcasters} alt="not loading"/>
            <h1 data-aos="fade"className='with'>Want to have discussion<br/> with our experts?</h1>
           <h3 data-aos="fade"className='whom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam,</h3>
            <a className='wtf' href='#'>Talk to us</a>
        </div>
        <div className='responsive'>
        <img className='i' src={respond} alt='Is not loading?'></img>
        <h1 className='listen'>Listen on desktop or mobile</h1>
        <h1 className='please'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco</h1>
        </div>
    </div>
  )
}

export default talk