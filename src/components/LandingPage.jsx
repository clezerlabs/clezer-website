import React from 'react';
import VideoCover from "react-video-cover";
import homeVid from "../assets/videos/homeVid.mp4";
import iphone from "../assets/images/iPhone.png"
import fb from "../assets/images/fb.png"
import twitter from "../assets/images/twitter.png"
import whiteLogo from "../assets/images/whiteLogo.png";
import orangeLogo from "../assets/images/orangeLogo.png";
import { Row, Col } from 'antd';
import "./LandingPage.css"
const videoOptions = {
    src: homeVid,
    autoPlay: true,
    loop: true,
    muted: true,
};



class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <div className="HomeContainer">
            <div className="VideoContainer" > 
                    <VideoCover
                        className="Video"
                        videoOptions={videoOptions}
                    />
                    <div className="TitleContainer">
                        <img className="TitleLogo" src={whiteLogo} alt=""/>
                    </div>
                    <div className="firstPart">
                    <div className="Gradient">
                    </div>
                    <div className="GradientOpacity">
                    </div>
                    
                        <div className="TextContainer">
                        <Row >
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24}}>
                            <h3 className="AppTitle">Book together, right from your group chat</h3>
                        </Col>
                        </Row>
                        <Row >
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24}}>
                            <p className="AppText">Book together your festival tickets, accommodation and transfers, from a simple conversation with your friends. Instantly split the payment.</p>
                        </Col>
                        </Row>
                        </div>

                    <div className="PhoneContainer">
                        <img className="PhoneImage" src={iphone} alt="iphone"/>
                    </div>
                    <div className="FormContainer">
                        
                            <form>
                            <Row gutter={8}>
                                <Col xs={{ span: 12 }} sm={{ span: 7 }} lg={{ span: 7 }}  >
                                    <label>
                                        <input className="InputStyle" type="text" name="name" placeholder="Your Favorite Festival" />
                                    </label>
                                </Col>
                                <Col xs={{ span: 12 }} sm={{ span: 7 }} lg={{ span: 7 }}>
                                    <input className="InputStyle" type="text" name="name" placeholder="Your e-mail" />
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 7 }} lg={{ span: 7 }}>
                                <input className="InputButtonStyle" type="submit" value="WIN 4 PASSES" />
                                </Col>
                                </Row>
                            </form>
                        
                    </div>
                    </div>
            </div>
            <div className="Footer"> 
            <Row>
                <div className="FooterContent">
                    <Col xs={{span: 17, offset: 7}} sm={{ span: 3, offset: 2 }} md={{ span: 2, offset: 2 }} >
                    <img className="Logo" src={orangeLogo} alt=""/>
                    </Col>
                    <Col xs={{ span: 5, offset: 2}} sm={{ span: 4, offset: 2}} md={{ span: 4}} >
                    <p className="Adress">40 rue de l'arsenal  33 300 Bordeaux</p>
                    </Col>
                    <Col xs={{ span: 4, offset: 2}} sm={{ span: 1}} md={{ span: 1}} >
                    <p className="FooterText">hello@collective.com</p>
                    </Col>
                    <Col xs={{ span: 6, offset: 4 }} sm={{ span: 4, offset: 2 }} md={{ span: 2, offset: 2 }} >
                    <p className="FooterText">+33 6 23 56 12 87</p>
                    </Col>
                    <Col xs={{ span: 14, offset: 9 }} sm={{ span:1 }} md={{ span: 2, offset: 2}} >
                    <div className="footerLogo">
                    <a className="logoFb" href="https://www.facebook.com/clezer/"><img className="logoFb" src={fb} alt="facebookLogo"/></a>
                    <a className="logoTwitter" href="https://twitter.com/clezerapp?lang=fr"><img className="logoTwitter" src={twitter} alt="facebookLogo"/></a>
                    </div>
                    </Col>
                </div>
            </Row>
                <p className="CopyRight">© 2018 Clezer Financial Technologies. All Rights Reserved.</p>
            </div>
        </div>

        );
    }
    
}

export default LandingPage;
