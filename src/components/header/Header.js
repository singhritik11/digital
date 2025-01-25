import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='body'>
            <nav class="navbar">
                <div ><a href='/'>
                    <img src='./photos/digitallogo.jpg' alt='' className='logo'></img></a>
                </div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li class="dropdown">
                        <a href="/service" class="drop-btn">Services</a>
                        <ul class="dropdown-content">
                            <li><a href="/branding">Branding & Identity</a></li>
                            <li><a href="/content">Content Creation</a></li>
                            <li><a href="/digital">Digital Marketing</a></li>
                            <li><a href="/creative">Creative Content Creation</a></li>
                            <li><a href="/ecomm">E-Commerce Solution</a></li>
                            <li><a href="/uiux">UI/UX Development</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/" class="drop-btn">Pages</a>
                        <ul class="dropdown-content">
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/project">Projects</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/price">Pricing Plan</a></li>
                            <li><a href="/teste">Testimonials</a></li>
                        </ul>
                    </li>
                    <li><a href="/Contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
