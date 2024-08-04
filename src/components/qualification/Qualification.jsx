import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
         <h2 className="section__title">Qualification</h2>
         <span className="section__subtitle">My Personal Journey</span>

         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                }
                onClick={()=> toggleTab(1)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                }
                onClick={()=> toggleTab(2)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                }>
                    <div className="qualification__data">

                    <div>
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subtitle">Capgemini-India</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 07/2022 - Present
                            </div>
                        </div>
                        

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Frontend Software Analyst</h3>
                            <span className="qualification__subtitle">Capgemini-India</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 09/2020 - 06/2022
                            </div>
                        </div>

                    
                    </div>

                    {/* <div className="qualification__data">

                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">Sannibh Technology - Vadodara</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 10/2022
                            </div>
                        </div>

                    
                    </div> */}

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Embedded Software Engineer</h3>
                            <span className="qualification__subtitle">Lucy Electric - India</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 06/2019-07/2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">

                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Developer Intern</h3>
                            <span className="qualification__subtitle">Oasis Infobyte - Bengaluru</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 05/2022 - 06/2022
                            </div>
                        </div>

                       
                    </div> */}

                </div>

                <div className={
                    toggleState === 2
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Graduation in E&TC</h3>
                            <span className="qualification__subtitle">ITM Universe - Vadodara</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2016-2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div> 

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Diploma in E&TC</h3>
                            <span className="qualification__subtitle">SHHJB's - Chandwad</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2013-2016
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Schooling</h3>
                            <span className="qualification__subtitle">SEMS - Pachora</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2004-2013
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                   
                </div>
            </div>
         </div>

    </section>
  )
}

export default Qualification
