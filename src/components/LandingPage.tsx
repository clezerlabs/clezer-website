import * as React from "react";
import fb from "../assets/images/fb.png";
import iphone from "../assets/images/iPhone.png";
import orangeLogo from "../assets/images/orangeLogo.png";
import twitter from "../assets/images/twitter.png";
import whiteLogo from "../assets/images/whiteLogo.png";
import homeVid from "../assets/videos/homeVid.mp4";

// tslint:disable-next-line:no-import-side-effect
import "./LandingPage.css";

interface IProps {
    isMobile?: boolean;
}

interface IState {
    beta?: boolean;
}

/**
 * A landing page
 */
export class LandingPage extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = { beta: false };
    }

    public render = () => (
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
                    <img className="TitleLogo" src={whiteLogo} alt="" />
                </div>
                <section id="main_content">

                    <div className="PhoneContainer">
                        <img className="PhoneImage" src={iphone} alt="iphone" />
                    </div>

                    {this.renderHead()}

                </section>

            </div>
            <section style={{ height: "10vh", zIndex: 2 }}>
                <div id="footer">
                    <img className="Logo" src={orangeLogo} alt="" />
                    {this.renderAddress()}

                    <div className="SocialLinks" >
                        <a rel="noopener noreferrer" target="_blank" className="logoFb"
                            ref="https://www.facebook.com/clezer/">
                            <img className="logoFb" src={fb} alt="facebookLogo" />
                        </a>
                        <a className="logoTwitter" href="https://twitter.com/clezerapp?lang=fr">
                            <img className="logoTwitter" src={twitter} alt="facebookLogo" />
                        </a>
                    </div>

                </div>
                <div>
                    <p className="CopyRight">© 2018 Clezer Financial Technologies. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    )
    private readonly renderAddress = () =>
        <div style={{
            display: "flex",
            flexDirection: "initial",
            justifyContent: "center",
            alignItems: "center",
            width: "100vh",
        }}>
            <p className="Adress">40 rue de l'arsenal  33 300 Bordeaux</p>
            <p className="FooterText">hello@collective.com</p>
            <p className="FooterText">+33 6 23 56 12 87</p>
        </div>

    private readonly renderHead = () =>
        <div id="head">
            <h1 className="sub_head">Chat for group booking</h1>
            <p className="info">
                our festival tickets,
            accommodation and transfers, from a simple conversation with your friends
            </p>
            <div id="links">
                <form>
                    <input className="InputStyle" type="text" name="name" placeholder="Your Favorite Festival" />
                    <input className="mailInputStyle" type="text" name="name" placeholder="Your e-mail" />
                    <input className="InputButtonStyle" type="submit" value="WIN 4 PASSES" />
                </form>
            </div>
        </div>
}
