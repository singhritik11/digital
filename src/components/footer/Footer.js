import React from 'react'
import './footer.css'
import { useNavigate } from "react-router-dom";


function Footer() {
    const navigate = useNavigate();

    return (
        <div className='body'>
            <div className='container'>
                <div className='footer row'>
                    <div className='main col-lg-5'>
                        <img className='footlogo' src='./photos/digitallogo.jpg' alt='' />
                        <p>Transforming your vision into digital success.
                            Innovative strategies, measurable results—your growth is our mission.</p>
                    </div>
                    <div className='quick col-lg-2'><h3>Quick Links</h3>
                        <li><a className='anli' href='/'>Home</a> </li>
                        <li><a className='anli' href='/about'>About us</a></li>
                        <li><a className='anli' href='/service'>Service</a></li>
                        <li><a className='anli' href='/blog'>Blog</a></li>
                    </div>
                    <div className='serv col-lg-2'> <h3>Support</h3>
                        <li><a className='anli' href='/contact'>Contact Us</a></li>
                        <li><a className='anli' href='/contact'>Terms & Conditions</a></li>
                        <li><a className='anli' href='/contact'>Help</a></li>
                    </div>

                    <div className='touch col-lg-3'> <h4>Subscribe our news letter</h4>
                        <input type='text' placeholder='Enter Your Email' className='footin'></input>
                        <button className='footbut' onClick={() => navigate("/price")}>Subscribe</button>
                    </div>
                </div>

            </div>
            <section className='row lowfoot'>
                <p className='lowtxt'>Copyrighted by Ascent Human Resources Pvt. Ltd | All Right Reserved</p>
            </section>
        </div>
    )
}

export default Footer
