import React from 'react';
import homeVid from "../assets/videos/homeVid.mp4";
import iphone from "../assets/images/iPhone.png"
import fb from "../assets/images/fb.png"
import twitter from "../assets/images/twitter.png"
import whiteLogo from "../assets/images/whiteLogo.png";
import orangeLogo from "../assets/images/orangeLogo.png";

import "./LandingPage.css"
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="Page">
            <div id="container">
            <video id="background_video" src={homeVid} autoPlay loop muted></video>
            <div id="video_cover">
                <div className="GradientOpacity">
                </div>
                <div className="Gradient">
                </div></div>
            <div id="overlay"></div>
            <div className="TitleContainer">
                <img className="TitleLogo" src={whiteLogo} alt=""/>
            </div>
            <section id="main_content">

                <div className="PhoneContainer">
                            <img className="PhoneImage" src={iphone} alt="iphone"/>
                </div>

                <div id="head">
                    <h1 className="sub_head">Chat for group booking</h1>
                    <p className="info">Group book your festival tickets, accommodation and transfers, from a simple conversation with your friends</p>
                    <div id="links"> 
                    <form > 
                            <input className="InputStyle" type="text" name="name" placeholder="Your Favorite Festival" />
                            <input className="InputStyle" type="text" name="name" placeholder="Your e-mail" />
                            <input className="InputButtonStyle" type="submit" value="WIN 4 PASSES" />
                    </form>
                </div>
                </div>
                
               
            </section>
            
            </div> 
            <section style={{height:"20vh", zIndex: 3}}>
            <div id="footer">
                <img className="Logo" src={orangeLogo} alt=""/>
                        <p className="Adress">40 rue de l'arsenal  33 300 Bordeaux</p>
                        <p className="FooterText">hello@collective.com</p>
                        <p className="FooterText">+33 6 23 56 12 87</p>
                        
                        <a  rel="noopener noreferrer" target="_blank" className="logoFb" href="https://www.facebook.com/clezer/"><img className="logoFb" src={fb} alt="facebookLogo"/></a>
                        <a className="logoTwitter" href="https://twitter.com/clezerapp?lang=fr"><img className="logoTwitter" src={twitter} alt="facebookLogo"/></a>
            
            </div> 
            </section>
          </div>
        );
    }
    
}

export default LandingPage;
