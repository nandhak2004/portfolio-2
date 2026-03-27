
  import React from 'react'
   import './Contact.css'
   function Contact() {
     return (
      <div>
       <div className='contact'>
          <h1>Contact Me</h1>

         <div className="contactpage">
          <div className="call">
            <h2>Get In Touch</h2>
            <p>If you have a project or oportunity, feel free to contact me.</p>
            <div className="info">
            <div className='details'> <a href="mailto:nk8300062@gmail.com" target='blank'> <b>📧 Email:</b>nk8300062@gmail.com  </a></div>
            <div className='details'> <a href="tel:+919342979681" target='blank'> <b>📞 Phone:</b>+91 9342979681 </a></div>
            <div className='details'> <a href="https://www.google.com/maps/place/Palpandi/@10.0235252,77.5541901,18.3z/data=!4m6!3m5!1s0x3b076b004f576977:0x81a4502abbb55fc7!8m2!3d10.0242591!4d77.553595!16s%2Fg%2F11vqx_7x2t?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D" target='blank'> <b>🌎location:</b>Tamil Nadu, India </a></div>
            <div className='details'> <a href="https://github.com/nandhak2004" target='blank'> <b>💻GitHup:</b>https://github.com/nandhak2004 </a></div>
            <div className='details'> <a href="https://www.linkedin.com/in/nantha-kumar-14a7342b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'> <b>🔗Linkedin:</b>get in touch </a></div>
</div>
          </div>
          <div className="call">
            <h2>Contact Me</h2>
            <form>
              <input type="text" placeholder='Your Name' required/> 
              <input type="email" placeholder='Your Email' required/> 
              <textarea rows="5" placeholder='Your Message' required></textarea>
              <input type="submit" />
            </form>
          </div>
         </div>
       </div>
       </div>
     )
   }
   
   export default Contact
   