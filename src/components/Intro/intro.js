import React from 'react'
import './intro.css'
import port_image from '../../assets/port_image.png'
import hire from '../../assets/hire.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
<section id='intro'>
    <div className='introContent'>
        <span className='hello'>
            Hello,
        </span>
        <span className='introText'> I'm <span className='introName'>Fenet </span>
            <br/> Website Developer
        </span>
        <p className='introPara'>
            I'm a website developer with a passion for creating <br/> beautiful and functional websites.</p>
        
        <Link >
        <button className='btn' onClick={() =>
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})

    }> <img src={hire} alt="hire me" className='btnImg'  /> Hire Me</button>
        </Link>
       
</div>
    <img src={port_image} alt="" className='bg' />
</section>
    
  )
}

export default Intro