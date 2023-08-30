import React, {useRef, useState} from 'react'
import './Footer.css'
import c from '../../assest/c.png'
import emailjs from 'emailjs-com'

const Footer = () => {

    const subscribe = 'SUBSCRIBE TO THE NEWSLETTER'
    let thank = 'THANKS FOR SUBSCRIBING'
    const [sub, setSubcribe ] = useState(subscribe)

    const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c671xan', 'template_62ige88', form.current, 'c5Z_AyafUVnqyC8ex')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    };

  return (
    <div className='footer'>
        <div className='foot'>
            <div className='logo'>
                <p>
                    LOUNGE CASE KNIFE
                </p>
            </div>

            <div className='net'>
                <h3>SOCIAL NETWORKS</h3>
                <p>Instagram</p>
                <p>Faceboook</p>
                <p>Youtube</p>
            </div>

            <div className='net'>
                <h3>COMPANY</h3>
                <p>About</p>
                <p>Services</p>
                <p>Delivery</p>
                <p>Return</p>
            </div>

            <div className='net'>
                <h3>FEEDBACK</h3>
                <p>email: nupat2023@gmail.com</p>
                <p>tel.: +234(80)983 388 299</p>
            </div>

            <div className='net'>
                <h3>{sub}</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder='Your name' required /> <br/>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='@email.com' required /> <br/>
                        <label>Message</label>
                        <textarea name="message" placeholder='Your request' required /> 
                        <input onClick={()=> setSubcribe(thank)} className='send' type="submit" value="Send" /> 
                    </form>


                <div className=' c'>
                <img src={c} />
                <p>Knife Lounge Case. Imprint and Legal Data</p>
                </div>
                <p>Private policy</p>
            </div>

        </div>

    </div>
  )
}

export default Footer