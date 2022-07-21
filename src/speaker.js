import React from 'react'
import './speaker.css'
import person1 from './images/person 1.png'
import person2 from './images/person 2.png'
import person3 from './images/person 3.png'
import person4 from './images/person 4.png'
import person5 from './images/person 5.png'
import person6 from './images/person 6.png'
const speaker = () => {

  return (

    < div className='learners'>
        <div className='Speakers'>
            <h1 className='me'>Our Speakers</h1>
        </div>
        
        <div className='image'>
        <div data-aos="fade-right" className='speaker1'>
        <img className='person1' src={person1} alt='kuch'></img>
        <h2 className='alexia'>Alexia Herrera</h2>
        <h2 className='post'>BlockChain Developer</h2>
        </div>
        <div data-aos="fade"className='speaker2'>
        <img className='person2' src={person2} alt='kuch1'/>
        <h2 className='david'>David Robertson</h2>
        <h2 className='post1'>CTO, CoinBTX</h2>
        </div>
        <div data-aos="fade-right" className='speaker3'>
        <img className='person3' src={person3} alt='hota'/>
        <h2 className='robert'>Robert Willis</h2>
        <h2 className='post2'>Book Writer</h2>
        </div>
        <div data-aos="fade-right" className='speaker4'>
          <img className='person4' src={person4} alt='person'></img>
          <h2 className='drikey'>Edsger Dijkstra</h2>
          <h2 className='post3'>Founder, AK Tech</h2>
        </div>
        <div data-aos="fade" className='speaker5'>
          <img className='person5' src={person5} alt='why is not loading?'></img>
          <h2 className='marie'>Marie Curie</h2>
          <h2 className='post4'>Bitcoin Miner</h2>
        </div>
        <div data-aos="fade-right" className='speaker6'>
          <img className='person6' src={person6} alt='whyy???'></img>
          <h2 className='Edward'>Edward Schrodinger</h2>
          <h2 className='post5'>Entreprenuer</h2>
        </div>

        </div>

    </div>
   
  )

}

export default speaker