import React from 'react';
import './resume.css'
import backend from '../../assets/backend.png'
import frontend from '../../assets/frontend.png'
import database from '../../assets/database.png'
import github from '../../assets/github.png'
import figma from '../../assets/figma.png'
import vscode from '../../assets/vscode.png'
import fenetCV from '../../assets/FENET (2).pdf';
import school from '../../assets/school.png'
import university from '../../assets/university.png'
import certificate from '../../assets/certificate.png'



const Resume = () => {
  return (
    <section id='resume'>
       
            
        <div className='education'>
         <h2 className="educationTitle"> Education</h2>
   <div className='container'>
 <div className='school'>
        <img src={school} className='schoolImg'></img>
        <p>I started my education at Alidoro Muka Kule School and 
        finished high school at Fitche Secondary School.</p>
    </div>
    <div className='school'>
        <img src={university} className='schoolImg'></img>
        <p>I'm currently 
    studying Software Engineering at Addis Ababa University, where I'm building both practical 
    and technical skills through real-world projects.</p>
    </div>
    <div className='school'>
        <img src={certificate } className='schoolImg'></img>
        <p>I hold a Data Structures certificate from SkillBridge and a 
            Networking certificate from Cisco. I’m always eager to learn, consistently 
            exploring new skills beyond my academic coursework.

</p>
    </div>
    
    </div>
   <button className="button"><a 
          href={fenetCV} 
          download 
          className="buttonAnch"
        >
          📥 Download CV
        </a></button>
   
   </div>
  
   
   <h2>My Skills</h2>
   <div className='skills'>
 
    <div className='skillCatagory'>
        <img src={frontend} className='skillImg'></img>
        <p>React, HTML, CSS, Bootstrap, Tailwind CSS</p>
    </div>
    <div className='skillCatagory'>
        <img src={backend} className='skillImg'></img>
        <p>Node.js, NestJS</p>
    </div>
    <div className='skillCatagory'>
        <img src={database} className='skillImg'></img>
        <p>MongoDB,MSQL,Sql</p>
    </div>
    <div className='skillCatagory'>
        <img src={github} className='skillImg'></img>
        <p>Git, GitHub</p>
    </div>
    <div className='skillCatagory'>
        <img src={figma} className='skillImg'></img>
        <p>UI design using figma</p>
    </div>
    <div className='skillCatagory'>
        <img src={vscode} className='skillImg'></img>
        <p>Efficeintly use vs code</p>
    </div>
   </div>

    </section>
    
  );
};

export default Resume;
