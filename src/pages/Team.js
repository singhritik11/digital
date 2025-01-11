import React from 'react'


function Team() {

    return (
        <div className='body'>
            <div className='container'>
                <div className='abouthead'>
                    <p className='abouthead1'> Our <span className='greenfeat'> TEAM </span></p>
                    <p className='abouthead2'>Where Vision Meets Recognition.</p>
                </div>
            
                <div className='row line wow fadeInDown'></div>


                <div className='row wow slideInUp' data-wow-duration="1.5s">
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="1.5s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp1.jpg' alt=''></img>
                            <p className='name'>Pinky</p>
                            <p className='name2'>Senior Project Manager</p>
                        </section>
                    </div>
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="2.0s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp2.jpg' alt=''></img>
                            <p className='name'>Babu Lal</p>
                            <p className='name2'>Marketing Director</p>
                        </section>
                    </div>
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="2.5s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp3.jpg' alt=''></img>
                            <p className='name'>Shiny</p>
                            <p className='name2'>Product Manager</p>
                        </section>
                    </div>
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="3.0s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp4.jpg' alt=''></img>
                            <p className='name'>Simran</p>
                            <p className='name2'>Communications Specialist</p>
                        </section>
                    </div>

                    <div className='col-lg-3 wow slideInUp' data-wow-duration="1.5s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp5.jpg' alt=''></img>
                            <p className='name'>Bobby</p>
                            <p className='name2'>HR Coordinator</p>
                        </section>
                    </div>

                    <div className='col-lg-3 wow slideInUp' data-wow-duration="2.0s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp6.jpg' alt=''></img>
                            <p className='name'>Stree</p>
                            <p className='name2'>Administrative Assistant</p>
                        </section>
                    </div>
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="2.5s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp7.jpg' alt=''></img>
                            <p className='name'>Rajat</p>
                            <p className='name2'>Data Scientist</p>
                        </section>
                    </div>
                    <div className='col-lg-3 wow slideInUp' data-wow-duration="3.0s">
                        <section className='foremp'>
                            <img className='forempimg' src='./photos/emp8.jpg' alt=''></img>
                            <p className='name'>Bawri</p>
                            <p className='name2'>Financial Controller</p>
                        </section>
                    </div>
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

export default Team
