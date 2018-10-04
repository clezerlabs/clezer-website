import React from 'react';
import VideoCover from "react-video-cover";
import homeVid from "../assets/videos/homeVid.mp4";
import iphone from "../assets/images/iPhone.png"
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
                        <h2 >Collective.</h2>
                    </div>
                    <div className="Gradient">
                    </div>
                    <div className="TextContainer">
                        <h3 className="AppTitle">Book together right from your group chat</h3>
                        <p className="AppText">Book together your festival tickets, accommodation and transfers, from a simple conversation with your friends. Instantly split the payment.</p>
                    </div>
                    <div className="PhoneContainer">
                        <img src={iphone} alt="iphone"/>
                    </div>
                    <div className="FormContainer">
                        <form>
                            <label>
                                <input className="InputStyle" type="text" name="name" placeholder="Your Favorite Festival" />
                            </label>
                            <label>
                                <input className="InputStyle" type="text" name="name" placeholder="Your e-mail" />
                            </label>
                            <input className="InputButtonStyle" type="submit" value="WIN 4 PASSES" />
                        </form>
                    </div>
            </div>
            <div className="Footer">
            <div className="FooterContent">
            <p className="Logo">Collective<span className="LogoDot">.</span></p>
                <p className="FooterText">40 rue de l'arsenal - 33 300 Bordeaux</p>
                <p className="FooterText">hello@collective.com</p>
                <p className="FooterText">+33 6 23 56 12 87</p>
            </div>
                
                <p className="CopyRight">© CLEZER Financial Technologie INC. All Rights Reserved.</p>
            </div>
            
        </div>

        );
    }
    
}

export default LandingPage;
