import React from 'react'
import './skills.css'
import mobile from '../../assets/mobile.png'
import web_design from '../../assets/web_design.png'
import graphic_design from '../../assets/graphic_design.png'
import python from '../../assets/python.png'


const Skills = () => {
  return (
   <section id='skills'>
 <span className='skillTitle'>About Me </span>
 <span className='skillDesc'>
 I’m a web designer and developer skilled in building responsive interfaces with HTML, CSS, 
 JavaScript, and React.js, styled using Bootstrap and Tailwind CSS. I create backend systems using Node.js
  and the NestJS framework. I also have basic knowledge of Flutter and Jetpack Compose for 
 mobile app development. Additionally, I'm familiar with Python, Java, and 
 core data structures and algorithms.
 </span>
 <div className='skillBars'>
  <div className='skillBar'>
    <img src={web_design} alt='web_design' className='skillBarImg' />
    <div className='skillBarText'>
      <h2>Web Design & Development</h2>
      <p>I design responsive and visually appealing websites using HTML, CSS, Bootstrap, and Tailwind CSS. I also implement interactive features using React.js.</p>
    </div>
  </div>

  <div className='skillBar'>
    <img src={mobile} alt='mobile app' className='skillBarImg' />
    <div className='skillBarText'>
      <h2>Mobile App Development</h2>
      <p>I have foundational knowledge in mobile development using Flutter and Jetpack Compose, creating simple and functional mobile applications for Android platforms.</p>
    </div>
  </div>

  <div className='skillBar'>
    <img src={python} alt='python programming' className='skillBarImg' />
    <div className='skillBarText'>
      <h2>Programming & Backend</h2>
      <p>I use Python and Java for algorithmic problem solving, and I develop backend systems with Node.js and the NestJS framework to handle logic and database operations.</p>
    </div>
  </div>

  <div className='skillBar'>
    <img src={graphic_design} alt='graphics design' className='skillBarImg' />
    <div className='skillBarText'>
      <h2>Graphic Design</h2>
      <p>I apply fundamental design principles to create clean and user-friendly interfaces, with basic experience in tools like Figma or Canva for UI/UX work.</p>
    </div>
  </div>
</div>

   
   </section>
  )
}

export default Skills