import React, {useState} from 'react'
import './navbar.css'
import Black_Logo from '../../assets/Black_Logo.png'
import message_img from '../../assets/message_img.png'
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
   <nav className='navbar'>
    <img src={Black_Logo} alt="logo" className='logo' />
    <div className='desktopMenu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
        Home
      </Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
        About
      </Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
      Portfolio
      </Link>
      <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
      Education
      </Link>
      <Link activeClass='active' to='adventure' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
       Adventure
      </Link>
      </div>
    <button className='desktopMenuBtn' onClick={() =>
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})

    }>
       <img src={message_img} alt="Contact Me" className='desktopMenuImg' />
       Contact Me</button>


       <img src={menu} alt="menu" className='menuImg' onClick={()=> setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}> 
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
        Home
      </Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
        About
      </Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
      Portfolio
      </Link>
      <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
      Education
      </Link>
      <Link activeClass='active' to='adventure' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
       Adventure
      </Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>
       Contact
      </Link>
      

      
    </div>
   </nav>
  )
}

export default Navbar