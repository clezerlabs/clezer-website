import React from 'react';
import VideoCover from "react-video-cover";
import homeVid from "../assets/videos/homeVid.mp4";
import iphone from "../assets/images/iPhone.png"
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
                        <h2 className="PageTitle">Collective.</h2>
                    </div>
                    <div className="Gradient">
                    </div>
                        <div className="TextContainer">
                        <Row >
                        <Col xs={{ span: 24 }} sm={{ span: 4 }} md={{ span: 20, offset: 4}}>
                            <h3 className="AppTitle">Book together right from your group chat</h3>
                            <p className="AppText">Book together your festival tickets, accommodation and transfers, from a simple conversation with your friends. Instantly split the payment.</p>
                            </Col>
                        </Row>
                        </div>

                    <div className="PhoneContainer">
                        <img className="PhoneImage" src={iphone} alt="iphone"/>
                    </div>
                    <div className="FormContainer">
                        
                            <form>
                            <Row gutter={16}>
                                <Col xs={{ span: 24 }} sm={{ span: 5 }} lg={{ span: 8 }}  >
                                    <label>
                                        <input className="InputStyle" type="text" name="name" placeholder="Your Favorite Festival" />
                                    </label>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 5, offset: 1 }} lg={{ span: 8, offset: 1 }}>
                                    <input className="InputStyle" type="text" name="name" placeholder="Your e-mail" />
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                                <input className="InputButtonStyle" type="submit" value="WIN 4 PASSES" />
                                </Col>
                                </Row>
                            </form>
                        
                    </div>
            </div>
            <div className="Footer">
            <Row >
            <div className="FooterContent">
                <Col  lg={{ span: 5, offset: -5 }} >
                <p className="Logo">Collective<span className="LogoDot">.</span></p>
                </Col>
                <Col xs={{ span: 4, offset: 1 }} md={{ span: 4, offset: 5 }} >
                <p className="FooterText">40 rue de l'arsenal - 33 300 Bordeaux</p>
                </Col>
                
                
                <Col xs={{ span: 4, offset: 1}} md={{ span: 4 }} ><p className="FooterText">hello@collective.com</p>
                </Col>
                
                <Col xs={{ span: 4, offset: 1 }} md={{ span: 4   }} >
                <p className="FooterText">+33 6 23 56 12 87</p>
                </Col>
                
            

            </div>
            </Row>
                <p className="CopyRight">© CLEZER Financial Technologie INC. All Rights Reserved.</p>
            </div>
            
        </div>

        );
    }
    
}

export default LandingPage;
