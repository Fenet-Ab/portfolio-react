import React from 'react'
import './works.css'
import cross_country from '../../assets/cross_country.png'
import flutter_album from '../../assets/flutter_album.png'
import jetpack_addDrop from '../../assets/jetpack_addDrop.png'
import portfolio from '../../assets/portfolio.png'
import wereda_management from '../../assets/wereda_management.png'
import leetcode from '../../assets/leetcode.png'
import image from '../../assets/image.png'


const Works =() =>{
    return (
       <section  id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>Explore my projects built with React, HTML, CSS, Bootstrap, and Tailwind CSS on the frontend, and Node.js with NestJS on the backend. I also create basic mobile apps using Flutter and Jetpack Compose, and apply Python and Java for problem-solving. Each project shows my passion for clean design and practical solutions.</span>
<div className='worksImgs'>
    <div className='worksCard'>
      <img src={cross_country} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Cross Country bus transport</h2>
       <p> cross country bus transport system.Build by bootstrap,js,html and nest</p>
       <a href='https://github.com/betsinat-amare/Cross_country_bus_transport_service_2024_25' target='_blank' rel='noreferrer'>visit on github</a>
  </div>
  </div>
  <div className='worksCard'>
  <img src={flutter_album} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Flutter album app</h2>
       <p>Flutter album app.Build by flutter platform. </p>
       <a href='https://github.com/Fenet-Ab/flutter-lab-assignment-3' target='_blank' rel='noreferrer'>visit on github</a>
  </div>
  </div>
  <div className='worksCard'>
  <img src={jetpack_addDrop} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Course add and Drop</h2>
       <p> course add and drop mobile app.Build by jetpack-compose</p>
       <a href='https://github.com/Fenet-Ab/Course_add_and_drop_manager_app' target='_blank' rel='noreferrer'>visit on github</a>
  </div>
  </div>
 
  <div className='worksCard'>
  <img src={wereda_management} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Wereda management system</h2>
       <p> cross country bus transport system.Build by bootstrap,js,html and django</p>
       <a href='https://github.com/Fenet-Ab/woreda_managment_system' target='_blank' rel='noreferrer'>visit on github</a>
  </div>
  </div>
  <div className='worksCard'>
  <img src={jetpack_addDrop} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Course add and Drop</h2>
       <p> Course add and Drop system. Build by flutter framework.</p>
       <a href='https://github.com/Fenet-Ab/flutter_course_add_drop' target='_blank' rel='noreferrer'>visit on github</a>
  </div>
  </div>
  <div className='worksCard'>
  <img src={leetcode} alt="" className='worksImg' />
       <div className='worksCardText'>
       <h2>Solved problem</h2>
       <p> Data-structure problem solved on leetcode</p>
       <a href='https://leetcode.com/u/Fenet_Ab1996/' target='_blank' rel='noreferrer'>visit on leetcode</a>
  </div>
  </div>
 


  </div>
  {/* <button className='workBtn'>See More</button> */}
  
  
  
     




</section>
    )
}
export default Works