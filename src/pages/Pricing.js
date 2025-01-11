import React from 'react'
import './pricing.css'


function Pricing() {

    return (
        <div className='body'>
            <div className='container'>
                <div className='abouthead'>
                    <p className='abouthead1'>Our <span className='greenfeat'> PRICING</span></p>
                    <p className='abouthead2'>Simplifying success online.</p>
                </div>

                <div className='row line wow fadeInDown'></div>


                <div className='row'>
                    <section className='col-lg-6 pricerate'>
                        <div className='pricess'>
                            <div className='row pricingtops'>
                                <section className='col-lg-6 X'>
                                    <p className='pricetxt1'>BASIC</p>
                                    <p className='pricetxt2'>Our popular Plan for small teams.</p>
                                </section>
                                <section className='col-lg-6 priceright'>
                                    <p className='ratelogo'> ₹ </p>
                                    <p className='raterate'> 5999 </p>
                                    <p className='ratetxt'> / per month</p>
                                </section>
                            </div>
                            <div className='row'>
                                <section className='col-lg-6'>
                                    <p className='priceben'><span className='greenfeat'> • </span> Responsive Web Design</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Basic SEO Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Social Media Integration</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Content Creation Support</p>

                                </section>
                                <section className='col-lg-6'>
                                    <p className='priceben'><span className='greenfeat'> • </span> Mobile Optimization</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Google Analytics Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Email Marketing Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Contact Form Integration</p>

                                </section>
                            </div>
                            <button className='buybut'> GET STARTED</button>
                        </div>
                    </section>

                    <section className='col-lg-6 pricerate'>
                        <div className='pricess'>
                            <div className='row pricingtops'>
                                <section className='col-lg-6 X'>
                                    <p className='pricetxt1'>ADVANCED</p>
                                    <p className='pricetxt2'>Advanced features and reporting</p>
                                </section>
                                <section className='col-lg-6 priceright'>
                                    <p className='ratelogo'> ₹ </p>
                                    <p className='raterate'> 9999 </p>
                                    <p className='ratetxt'> / per month</p>
                                </section>
                            </div>
                            <div className='row'>
                                <section className='col-lg-6'>
                                    <p className='priceben'><span className='greenfeat'> • </span> Responsive Web Design</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Basic SEO Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Social Media Integration</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Content Creation Support</p>

                                </section>
                                <section className='col-lg-6'>
                                    <p className='priceben'><span className='greenfeat'> • </span> Mobile Optimization</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Google Analytics Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Email Marketing Setup</p>
                                    <p className='priceben'><span className='greenfeat'> • </span> Contact Form Integration</p>

                                </section>

                            </div>
                            <button className='buybut'> GET STARTED</button>
                        </div>
                    </section>

                </div>



                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-6'>
                        <p className='feat1'> <span className='greenfeat'> # </span>  FEATURES</p>
                        <p className='feat2'> Innovative <span className='greenfeat'>features</span> for your <span className='greenfeat'>digital</span> success</p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='feat3'> Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                        <p className='feat4'>Learn More<a className='featbut' href='/about'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </div>

                    <div className='col-lg-4 featimg wow slideInRight' data-wow-duration="1.0s">
                        <section className='imgfcont'>
                            <img className='imgf' src='./photos/feat1.jpg' alt='' />
                        </section>
                        <p className='featxt1'> <span className='greenfeat'> Data-Driven Digital Marketing </span></p>
                        <p className='featxt2'>Strategies combining SEO, PPC, content marketing</p>
                    </div>
                    <div className='col-lg-7 featimg wow slideInRight' data-wow-duration="1.0s">
                        <section className='imgfcont'>
                            <img className='imgf' src='./photos/feat2.jpg' alt='' />
                        </section>
                        <p className='featxt1'> <span className='greenfeat'> Custom Branding Solutions </span></p>
                        <p className='featxt2'>Unique brand identity development, including logos, color palettes.</p>
                    </div>
                </div>


                <div className='row contentdiv wow slideInUp' data-wow-duration="1.5s" >
                    <p className='contentxt'> Content <span className='greenfeat'>Creation</span> And <span className='greenfeat'>Strategy</span></p>
                    <p className='contentxt2'> High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.</p>

                    <carousel>
                        <img src='./photos/asana.svg' alt='' className='logimgz'></img>
                        <img src='./photos/behance.svg' alt='' className='logimgz'></img>
                        <img src='./photos/fiverr.svg' alt='' className='logimgz'></img>
                        <img src='./photos/slack.svg' alt='' className='logimgz'></img>
                        <img src='./photos/trello.svg' alt='' className='logimgz'></img>
                        <img src='./photos/upwork.svg' alt='' className='logimgz'></img>
                    </carousel>
                </div>

            </div>

            <div className='row scrollwin wow slideInUp' data-wow-duration="1.0s">
                <p className='scrolltext'>Web Design • Digital Marketing • Website Design • Analytics & Reporting • Custom Branding • Strategy Consulting • Web Design • Digital Marketing • Website Design • Analytics & Reporting • Custom Branding • Strategy Consulting</p>
            </div>
            <div className='container'>
                <div className='row endbox wow slideInUp' data-wow-duration="1.5s">
                    <p className='endtxt1'>LET'S COLLABORATE</p>
                    <p className='endtxt2'>LET'S WORK</p>
                    <a href='/contact' className='endbutton' >Get In Touch<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></a>
                    <p className='endtxt2'>TOGETHER</p>
                </div>
            </div>

        </div>
    )
}

export default Pricing
