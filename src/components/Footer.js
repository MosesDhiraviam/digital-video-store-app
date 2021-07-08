import React from 'react'
import "../assets/css/Footer.css"

const Footer = () => {
    return (
        <>
            <div className="foot_main">
                        
                <div className="foot_div1">
                    <ul className ="foot_ul1">
                        <li className ="content_li"><a className="links" href="/">FAQ</a></li>
                        <li className ="content_li"><a  className="links" href="/">
                            Investor Relations</a></li>
                        <li className ="content_li"><a className="links"  href="/">Privacy</a></li>
                        <li className ="content_li"><a  className="links"  href="/">Speed Test</a></li>
                    </ul>
                </div>
<div className="foot_div2">
                    <ul className ="foot_ul2">
                    <li className ="content_li"><a  className="links" href="/loginPage">Login</a></li>
                        <li className ="content_li"><a  className="links" href="/registerPage">Register</a></li>
                        <li className ="content_li"><a  className="links" href="/moviesPage">Movies Section</a></li>
                        <li className ="content_li"><a  className="links" href="/tvShowspage">Tv Shows Section</a></li>
                    </ul>
                </div>
<div className="foot_div3">
                    <ul className ="foot_ul3">
                    <li  className ="content_li"><a  className="links" href="/">Help Centre</a></li>
                        <li className ="content_li"><a   className="links" href="/">Jobs</a></li>
                        <li className ="content_li"><a  className="links" href="/">Cookie Preferences</a></li>
                        <li className ="content_li"><a  className="links" href="/">Legal Notices</a></li> 
                    </ul>
                </div>
<div className="foot_div4">
                    <ul className ="foot_ul4">
                        <li className ="content_li"><a  className="links" href="https://www.linkedin.com/in/moses-dhiraviam/">Linked In</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.facebook.com/jebaraj.moses.7/">Facebook</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.instagram.com/_imno.prodigy/">Instagram</a></li>
                    </ul>
                </div>
                
            </div>
        </>

    )
}

export default Footer
