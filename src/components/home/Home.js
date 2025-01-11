import React from 'react'
import './home.css';
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='body'>
            <div className='container'>
                <div className='row top'>
                    <p className='head1'>Innovative Solutions for</p>
                    <div class="slider-text-container">
                        <div class="static-text"></div>
                        <ul class="dynamic-text">
                            <li><span>Art & Design</span></li>
                            <li><span>Digital World</span></li>
                            <li><span>Social Media Marketing</span></li>

                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <a className='headbut' href='https://www.youtube.com'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                            </svg>
                        </a>

                    </div>
                    <div className='col-lg-8'>
                        <div className='row'><p className='headtxt'>At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.</p>
                        </div>
                        <div className='row'>
                            <p className='feat4'>GET IN TOUCH<a className='featbut' href='/about'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row scrollwin wow slideInUp' data-wow-duration="1.0s">
                <p className='scrolltext'>Web Design • Digital Marketing • Website Design • Analytics & Reporting • Custom Branding • Strategy Consulting • Web Design • Digital Marketing • Website Design • Analytics & Reporting • Custom Branding • Strategy Consulting</p>
            </div>

            <div className='container'>
                <div className='row agcent wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-5 '>
                        <div className='row agcentstick'>
                            <p className='aboutagency'> <span className='greenfeat'> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 19 19">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                            </svg> </span> ABOUT AGENCY</p>
                            <p className='headabout'>Crafting  <span className='greenfeat'> unique digital </span>  experiences that <span className='greenfeat'>elevate</span> your <span className='greenfeat'>brand</span></p>

                            <p className='lefthead'><a className='pagechangebut' href='/contact'>Contact Us</a> </p>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <section>
                            <h2 className='righthead'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-record-circle-fill" viewBox="0 0 22 22">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg> Your Success, Our Mission</h2>
                            <p className='righttxt'>We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.</p>
                        </section>
                        <section>
                            <h2 className='righthead'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-record-circle-fill" viewBox="0 0 22 22">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>Creators Of Digital Excellence</h2>
                            <p className='righttxt'>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
                        </section>
                        <section>
                            <h2 className='righthead'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-record-circle-fill" viewBox="0 0 22 22">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>Innovating the digital landscape</h2>
                            <p className='righttxt'>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
                        </section>
                        <section>
                            <h2 className='righthead'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-record-circle-fill" viewBox="0 0 22 22">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>Helping Brands Thrive Online</h2>
                            <p className='righttxt'>Our purpose is simple: to help brands succeed in the digital age. We're passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
                        </section>
                    </div>
                </div>
                <div className='row line wow fadeInDown'></div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-6'>
                        <p className='why'><span className='greenfeat'> # </span>OUR SERVICES</p>
                        <p className='serviceleft'>Our <span className='greenfeat'>digital services</span> to grow your brand</p></div>
                    <div className='col-lg-5'><p className='serviceright'>Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.</p></div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 carde wow slideInRight' data-wow-duration="1.5s">
                        <a href='/branding' className='row changesatag' >
                            <div className='col-lg-1 logs' ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                            </svg></div>
                            <div className='col-lg-1 loge'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg></div>
                            <p className='cardtxt'>Branding & Identity</p>
                            <p className='cardtxt2'>Developiing a compelling brand identity through strategy visuals and to buiding strong customer connections</p>
                        </a>
                    </div>

                    <div className='col-lg-4 carde wow slideInRight' data-wow-duration="1.5s">
                        <a href='/digital' className='row changesatag' >
                            <div className='col-lg-1 logs'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                            </svg></div>
                            <div className='col-lg-1 loge'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg></div>
                            <p className='cardtxt'>Digital Marketing</p>
                            <p className='cardtxt2'>Developiing a compelling brand identity through strategy visuals and to buiding strong customer connections</p>
                        </a>
                    </div>

                    <div className='col-lg-4 carde wow slideInRight' data-wow-duration="1.5s">
                        <a href='creative' className='row changesatag'>
                            <div className='col-lg-1 logs'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5" />
                            </svg></div>
                            <div className='col-lg-1 loge'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg></div>
                            <p className='cardtxt'>Creative Content Production</p>
                            <p className='cardtxt2'>Developiing a compelling brand identity through strategy visuals and to buiding strong customer connections</p>
                        </a></div>
                </div>

                <div className='row'>
                    <p className='col-lg-6 cardelowtxt wow slideInLeft' data-wow-duration="1.0s">Let’s make something great work together.</p><a className='col-lg-6 cardelowlin wow slideInRight' data-wow-duration="1.0s" href='/price'>Get free quote.</a>
                </div>

                <div className='row expert wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-6'>
                        <p className='txthead'>Expertise that drives digital <span className='greenfeat'>success</span></p>
                        <section className='txtflx'>
                            <p className='pct'>+60%
                                <p className='pctxt'>By optimizing your website for search engines.</p>
                            </p>
                            <p className='pct'>+30%
                                <p className='pctxt'>Rise in revenue as more visitors convert into paying customers</p>
                            </p>
                        </section>
                    </div>

                    <div className='col-lg-6'>
                        <p className='expertxt'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 20 20">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg> <span className='greenfeat'>Social Media Management:</span> Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.</p>
                        <p className='expertxt'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 20 20">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg> <span className='greenfeat'>E-commerce Solutions:</span> Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.</p>
                    </div>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6 wow slideInRight' data-wow-duration="2.0s">
                        <p className='why'><span className='greenfeat'> # </span> WHY CHOOSE US ?</p>
                        <p className='why2'> Expertise for <span className='greenfeat'> your digital</span> growth journey</p>
                    </section>
                    <section className='col-lg-6 wow slideInRight' data-wow-duration="2.0s"> <p className='whyrig'>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p></section>

                    <section className='col-lg-6 wow slideInRight' data-wow-duration="2.0s">
                        <div className='choosed'>
                            <p className='choosetxt'>Data-Driven Approach</p>
                            <p className='choosedtxt'>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
                        </div>
                        <div className='choosed'>
                            <p className='choosetxt'>Competitive Pricing</p>
                            <p className='choosedtxt'>We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
                        </div><div className='choosed'>
                            <p className='choosetxt'>Ethical Business Practices</p>
                            <p className='choosedtxt'>We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.</p>
                        </div>
                    </section>
                    <section className='col-lg-6 wow slideInRight' data-wow-duration="1.5s">
                        <img src='./photos/chooseimg.jpg' alt='' className='chooseimg' />
                    </section>
                </div>

                <div className='row line wow fadeInDown'></div>


                <div className='row agencyss wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='join'><span className='greenfeat'> # </span>JOIN AGENCY</p>
                        <p className='joint'>Join our agency of <span className='greenfeat'>creative innovators</span></p>
                    </section>
                    <section className='col-lg-6'><p className='joints'>Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.</p></section>

                    <section className='col-lg-4 socialbox wow slideInLeft' data-wow-duration="1.5s" > <p className='twitlog'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg></p><p className='follow'>Follow us on <span className='greenfeat'> Twitter </span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                    </svg></p><a href='https://x.com' className='socli'>@digitizzed_official</a>
                    </section>

                    <section className='col-lg-4 socialbox wow slideInUp' data-wow-duration="1.5s"><p className='twitlog'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 20 18">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg></p><p className='follow'>Join us on <span className='greenfeat'> Linkedin</span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                    </svg></p><a href='https://www.linkedin.com/' className='socli'>user.digitizzed_official</a></section>

                    <section className='col-lg-4 socialbox wow slideInRight' data-wow-duration="1.5s"><p className='twitlog'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram" viewBox="0 0 19 18">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg></p><p className='follow'>Follow us on <span className='greenfeat'> Instagram </span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                    </svg></p><a href='https://www.instagram.com' className='socli'>@digitizzed_insta_official</a></section>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='how'> <span className='greenfeat'> # </span>HOW IT WORKS</p>
                        <p className='how2'>Our proven <span className='greenfeat'>process</span> for <span className='greenfeat'>achieving</span> success</p>
                    </section>
                    <section className='col-lg-6'><p className='how3'>Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.</p></section>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s" >
                    <div className='col-lg-3 howbox'  >
                        <p className='howtxt'>Discovery Phase</p><a href='/contact' className='arro'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                        </svg></a>
                        <p className='howtxt2'>
                            Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.
                        </p>
                        <section className='lowbox'>
                            <p className='lowleft'>STEP <span className='lowleftnum'>01</span> </p>
                            <section className='lowright'>
                                <p className='lowrightlogo'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-ui-radios-grid" viewBox="0 0 16 16">
                                    <path d="M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                </svg>
                                </p>
                            </section>
                        </section>
                    </div>
                    <div className='col-lg-3 howbox' >
                        <p className='howtxt'>Implementation</p><a href='/contact' className='arro'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                        </svg></a>
                        <p className='howtxt2'>
                            Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.                        </p>
                        <section className='lowbox'>
                            <p className='lowleft'>STEP <span className='lowleftnum'>01</span> </p>
                            <section className='lowright'>
                                <p className='lowrightlogo'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
                                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                                </svg>
                                </p>
                            </section>
                        </section>
                    </div>
                    <div className='col-lg-3 howbox' >
                        <p className='howtxt'>Collaboration</p><a href='/contact' className='arro'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                        </svg></a>
                        <p className='howtxt2'>
                            Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.                        </p>
                        <section className='lowbox'>
                            <p className='lowleft'>STEP <span className='lowleftnum'>01</span> </p>
                            <section className='lowright'>
                                <p className='lowrightlogo'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                                    <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                                </svg>
                                </p>
                            </section>
                        </section>
                    </div>
                </div>

                <div className='row line wow fadeInDown'></div>


                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-6'>
                        <p className='feat1'> <span className='greenfeat'> # </span>  FEATURES</p>
                        <p className='feat2'> Innovative <span className='greenfeat'>features</span> for your <span className='greenfeat'>digital</span> success</p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='feat3'> Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                        <p className='feat4'>Learn More<a className='featbut' href='/about'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-up-right" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </div>

                    <div className='col-lg-4 featimg wow slideInRight' data-wow-duration="1.0s" onClick={() => navigate("/about")}>
                        <section className='imgfcont'>
                            <img className='imgf' src='./photos/feat1.jpg' alt='' />
                        </section>
                        <p className='featxt1'> <span className='greenfeat'> Data-Driven Digital Marketing </span></p>
                        <p className='featxt2'>Strategies combining SEO, PPC, content marketing</p>
                    </div>
                    <div className='col-lg-7 featimg wow slideInRight' data-wow-duration="1.0s" onClick={() => navigate("/about")}>
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

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='feat1'><span className='greenfeat'>#</span>HOW IT WORKS?</p>
                        <p className='feat2'>Our proven <span className='greenfeat'>process</span> for achieving success</p>
                    </section>
                    <section className='col-lg-6'>
                        <p className='feat3'>Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.</p>
                    </section>
                </div>

                <div className='row howit'>
                    <div className='col-lg-4 imgbx wow slideInRight' data-wow-duration="1.0s">
                        <img src='./photos/work1.jpg' alt='' className='imgbe'></img>
                        <button class="image-button" ><a href='/project1' className='projectaarbt'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Dynamic <span className='greenfeat'>E-Commerce</span>  Platform</p>
                    </div>
                    <div className='col-lg-4 imgbx wow slideInRight' data-wow-duration="1.0s">
                        <img src='./photos/work2.jpg' alt='' className='imgbe'></img>
                        <button class="image-button"  ><a href='/project2'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Innovative <span className='greenfeat'>Identity</span> Design</p>
                    </div>
                    <div className='col-lg-4 imgbx wow slideInRight' data-wow-duration="1.0s">
                        <img src='./photos/work3.jpg' alt='' className='imgbe'></img>
                        <button class="image-button" ><a href='/project3'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Dynamic<span className='greenfeat'>Digital</span>  Campaign</p>
                    </div>
                    <div className='col-lg-4 imgbx wow slideInLeft' data-wow-duration="1.0s">
                        <img src='./photos/work4.jpg' alt='' className='imgbe'></img>
                        <button class="image-button"  ><a href='/project4'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Impactful <span className='greenfeat'>Content</span>  Creation</p>
                    </div>
                    <div className='col-lg-4 imgbx wow slideInLeft' data-wow-duration="1.0s">
                        <img src='./photos/work5.jpg' alt='' className='imgbe'></img>
                        <button class="image-button" ><a href='/project5'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Visionary<span className='greenfeat'>Growth</span>  Strategy</p>
                    </div>
                    <div className='col-lg-4 imgbx wow slideInLeft' data-wow-duration="1.0s">
                        <img src='./photos/work6.jpg' alt='' className='imgbe'></img>
                        <button class="image-button" ><a href='project6'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg></a></button>
                        <p className='imgetxt'>Interactive<span className='greenfeat'> Website</span> Design</p>
                    </div>
                </div>

                <div className='row tesete wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='feat1'><span className='greenfeat'>#</span>Testimonials</p>
                        <p className='feat2'>Read what they have to say about <span className='greenfeat'>working with us</span></p>
                    </section>
                    <section className='col-lg-6'>
                        <p className='feat3'>Discover how our clients have achieved success through our innovative solutions and dedicated support.</p>
                        <p className='feat4'>Testimonials<a className='featbut' href='/teste'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </section>
                    <section className='col-lg-5 ratingbx'>
                        <p className='rate'>4.9</p>
                        <p className='stars'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></p>
                        <p className='revw'>40+ Reviews</p>
                        <p className='revw2'>Customer experiences that speak for themselves</p>
                    </section>
                    <section className='col-lg-7 revbx'>
                        <p className='revtx1'><span className='greenfeat'> ♣ </span> Some Brand</p>
                        <p className='stars'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></p>
                        <p className='revtxt2'>This team transformed our brand's online presence with creativity & Precision ! The result excedded our Expectations ! The Digital Marketing strategies helped us reach a broader audience & significantly boosted our sales</p>
                        <p className='revtxt3'>Sarah Mitchel</p>
                        <p className='revtxt4'>Managing Director</p>
                    </section>
                </div>


                <div className='row fourbox wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-3 boxez'>
                        <p className='boxlg'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></p>
                        <p className='boxt'>Low Cost</p>
                        <p className='boxt1'> <span className='greenfeat'> ♦ </span> Competitive fee</p>
                        <p className='boxt1'> <span className='greenfeat'> ♦ </span> Flexible rates</p>
                    </section>
                    <section className='col-lg-3 boxez'>
                        <p className='boxlg'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                        </svg></p>
                        <p className='boxt'>Permission Less</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> Open for integration</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> Run your own nodes</p>
                    </section>
                    <section className='col-lg-3 boxez'>
                        <p className='boxlg'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-filter-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                        </svg></p>
                        <p className='boxt'>Secure Data</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> Open source sheet</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> 360 Security</p>
                    </section>
                    <section className='col-lg-3 boxezz'>
                        <p className='boxlg'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                        </svg></p>
                        <p className='boxt'>24 X 7 Support</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> Toll free number</p>
                        <p className='boxt1'><span className='greenfeat'> ♦ </span> Ticket systems</p>
                    </section>
                </div>

                <div className='row key wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='feat1'><span className='greenfeat'> # </span> KEY FEATURES</p>
                        <p className='feat2'>Discover the <span className='greenfeat'> benefits</span> of choosing us today</p>
                    </section>
                    <section className='col-lg-6'>
                        <p className='feat3'>Experience unparalleled creativity, data-driven strategies, and dedicated support that drive real results for your brand.</p>
                    </section>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-3 keybx'>
                        <p className='key1'>01</p>
                        <p className='key2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                            <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z" />
                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                        </svg></p>
                        <p className='key3'>Personalized Approach</p>
                        <p className='key4'>We customize strategies to fit your brand's specific needs, ensuring alignment.</p>
                    </section>
                    <section className='col-lg-3 keybx'>
                        <p className='key1'>02</p>
                        <p className='key2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
                        </svg></p>
                        <p className='key3'>Experienced Team</p>
                        <p className='key4'>Combines industry knowledge and creativity to exceptional results for your brand.</p>
                    </section>
                    <section className='col-lg-3 keybx'>
                        <p className='key1'>03</p>
                        <p className='key2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard2-minus" viewBox="0 0 16 16">
                            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                            <path d="M6 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                        </svg></p>
                        <p className='key3'>Data-Driven Decisions</p>
                        <p className='key4'>We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.</p>
                    </section>
                    <section className='col-lg-3 keybx'>
                        <p className='key1'>04</p>
                        <p className='key2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                        </svg></p>
                        <p className='key3'>Ongoing Support</p>
                        <p className='key4'>We provide continuous support and maintenance to keep your digital assets at their best.</p>
                    </section>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <section className='col-lg-6'>
                        <p className='feat1'><span className='greenfeat'> # </span> LATEST NEWS</p>
                        <p className='feat2'>Insights on digital <span className='greenfeat'>innovation</span> and growth</p>

                    </section>
                    <section className='col-lg-6'>
                        <p className='feat3'>Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive in a rapidly evolving digital landscape.</p>
                    </section>
                </div>

                <div className='row wow slideInUp' data-wow-duration="1.5s">

                    <section className='col-lg-4 postdiv wow slideInLeft' data-wow-duration="1.5s">
                        <div className='postsn'>
                            <img className='postimg' src='./photos/post1.jpg' alt=''></img>
                        </div>
                        <p className='postxt'>UI/UX Design Principles for Better User Engagement</p>
                        <p className='readbut'>Read More <a href='/blog' className='readbutlogo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </section>

                    <section className='col-lg-4 postdiv wow slideInLeft' data-wow-duration="1.5s">
                        <div className='postsn'>
                            <img className='postimg' src='./photos/post2.jpg' alt=''></img>
                        </div>
                        <p className='postxt'>Why Your Business Needs a Mobile-Optimized Website</p>
                        <p className='readbut'>Read More <a href='/blog' className='readbutlogo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </section>

                    <section className='col-lg-4 postdiv wow slideInLeft' data-wow-duration="1.5s">
                        <div className='postsn'>
                            <img className='postimg' src='./photos/post3.jpg' alt=''></img>
                        </div>
                        <p className='postxt'>Content Marketing Essentials for Growing Your Brand</p>
                        <p className='readbut'>Read More <a href='/blog' className='readbutlogo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></a></p>
                    </section>

                </div>

                <div className='row endbox wow slideInUp' data-wow-duration="1.5s">
                    <p className='endtxt1'>LET'S COLLABORATE</p>
                    <p className='endtxt2'>LET'S WORK</p>
                    <a href="/contact" className='endbutton'>Get In Touch<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></a>
                    <p className='endtxt2'>TOGETHER</p>
                </div>

            </div>

        </div>
    )
}

export default Home







