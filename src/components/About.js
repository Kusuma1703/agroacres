import React from 'react'
import './about.css'

function About() {
    return (
        <div id='about'>
            <div className='about-component'>
                {/* <img src={require("../images/About.png")} /> */}
                <div className="about">
                <h1 style={{fontSize:'30px',fontFamily: "Cinzel Decorative,cursive" }}>About Us</h1>
                    <p>
                    Welcome to our website! We are an agriculture company dedicated to providing sustainable and innovative solutions to enhance the productivity and profitability of farmers and growers worldwide.
                    At our core, we believe that agriculture is the backbone of our society, and we are committed to supporting the industry through the development of cutting-edge technologies, advanced farming practices, 
                    and high-quality agricultural products.</p>

                    <p>Our team of experts has years of experience in the agriculture industry, and we work closely with farmers, agronomists, and 
                        researchers to develop and deliver customized solutions that meet the unique needs of each customer.We offer a wide range of 
                        products and services,including crop prediction,recommendation, and precision farming technologies,as well as agronomic support and training programs.Our mission is to help farmers and growers improve their yields, reduce costs, and increase their overall profitability while promoting sustainability and environmental stewardship.</p>
                </div>
            </div>
        </div>
    )
}

export default About
