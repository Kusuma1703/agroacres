import React from 'react';
import './footer.css';
function footer() {
  return (
    <div id='footer' style={{ backgroundColor: 'rgba(255, 255, 255, 0.446)', width:"100%" }}>
            <div className="footer-component">
                <div className="company">
                    <div><img alt='' src='../assets/logo-bg.png' /></div>
                    <div className='row company-name'>
                        <img src={require('../assets/logo-bg.png')} /></div>
                        <div className='company'>
                        <h3>AGROACRES</h3>
                        </div>
                </div>
                <div className="footer-contacts">
                    <div>
                        <h3>General</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Email Contact</h3>
                        <ul>
                            <li><i className="far fa-envelope" /><a href="mailto:connect@flyxavi.com">connect@agroacres.com</a></li>
                            <li><i className="far fa-envelope" /><a href="mailto:life@flyxavi.com">help@agroacres.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Address</h3>
                        <ul>
                            <li>AGROACRES</li>
                            <li>HYDERABAD, INDIA. 502032</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </div>
  )
}

export default footer