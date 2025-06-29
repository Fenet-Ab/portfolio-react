import React from 'react'
import './adventure.css'
import {Link} from 'react-scroll'
import littleJourney from '../../assets/littleJourney.mp4'
import mySchool from '../../assets/mySchool.mp4'
import project from '../../assets/project.mp4'
import farm from '../../assets/farm.mp4'
import GDG from '../../assets/GDG.mp4'
// import courseAdd from '../../assets/courseAdd.mp4'
const Adventure = () => {
  return (
  <section id='adventure'>
    <h2 className='title'>Adventure</h2>
    <div className='intro'>
        
        <div className='video'>
            <video src={littleJourney} controls></video>
            <p>little from my journey.</p>

        </div>
        <div className='video'>
            <video src={mySchool} controls></video>
            <p>little from my school.</p>

        </div>
        <div className='video'>
            <video src={project} controls></video>
            <p>little from my project.</p>

        </div>
        <div className='video'>
            <video src={GDG} controls></video>
            <p>little from event.</p>

        </div>
        {/* <div className='video'>
            <video src={courseAdd} controls></video>
            <p>from my project.</p>

        </div> */}
        <div className='video'>
            <video src={farm} controls></video>
            <p>little from my journey.</p>

        </div>
        <div className='video'>
            <video src={farm} controls></video>
            <p>little from my journey.</p>

        </div>
    </div>

  </section>
  

     
  )
}

export default Adventure