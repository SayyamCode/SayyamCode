import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
   <>
   
   <section className="error-area pt-185 rpt-130 pb-130 rpb-100 rel z-1 text-center">
            <div className="container">
                <div className="error-content">
                    <div className="image mb-85 rmb-55 wow fadeInUp delay-0-2s">
                        <img src="assets/images/shape/404-error.png" alt="Error" />
                    </div>
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        
                    </div>
                    <Link to='/' className="theme-btn wow fadeInUp delay-0-2s">Go To Homepage <i className="far fa-angle-right"></i></Link>
                </div>
            </div>
            <div className="bg-lines">
               <span></span><span></span>
               <span></span><span></span>
               <span></span><span></span>
               <span></span><span></span>
               <span></span><span></span>
            </div>
        </section>
   
   </>
  )
}

export default Error