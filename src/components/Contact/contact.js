import React, {useRef, useState, useEffect} from 'react'
import './contact.css'
import {Link} from 'react-scroll'
import linkedin from '../../assets/linkedin.png'
import telegram from '../../assets/telegram.png'
import youtube from '../../assets/youtube.png'
import whatsapp from '../../assets/whatsapp.png'
import emailjs from '@emailjs/browser';


emailjs.init('DjfzYTfRDlN2CLQbQ');

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    setStatus('sending');

    emailjs
      .sendForm('service_a88fewn', 'template_kr5silq', form.current, {
        publicKey: 'DjfzYTfRDlN2CLQbQ',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        },
      );
  };

  return (
    <section id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>
        Please fill out form below to discuss with me for work.
      </span>
      
      {status === 'success' && (
        <div className="message success-message">
          ✅ Message sent successfully!
        </div>
      )}
      {status === 'error' && (
        <div className="message error-message">
          ❌ Failed to send message. Please try again.
        </div>
      )}
      
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input 
          type='text' 
          className='name' 
          placeholder='Your Name' 
          name='from_name'
          required
        />
        <input 
          type='email' 
          className='email' 
          placeholder='Your Email' 
          name='from_email'
          required
        />
        <textarea 
          name='message' 
          rows="5" 
          placeholder='Your Message' 
          className='msg'
          required
        />
        <button 
          type='submit' 
          className='submitBtn' 
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
        
        <div className='links'>
          <a href="https://telegram.org/dl">
            <img src={telegram} alt='telegram' className='link' />
          </a>
          <a href="https://whatsapp.com/dl/">
            <img src={whatsapp} alt='whatsapp' className='link' />
          </a>
          <a href="https://youtube.com/@fenetabilu?si=HlOwdO1xjMM1iCVD">
            <img src={youtube} alt='youtube' className='link' />
          </a>
          <a href="https://www.linkedin.com/in/fenet-abilu-a52354307/">
            <img src={linkedin} alt='linkedin' className='link' />
          </a>
        </div>
      </form>
    </section>
  )
}

export default Contact