import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import OwlCarousel from 'react-owl-carousel2';

const travelImg = {
  1: "https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  2: "https://images.pexels.com/photos/531474/pexels-photo-531474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  3: "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  4: "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  5: "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  6: "https://images.pexels.com/photos/52526/sign-places-travel-information-52526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  7: "https://images.pexels.com/photos/364100/pexels-photo-364100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  8: "https://images.pexels.com/photos/597049/paris-france-eiffel-tower-597049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}
class App extends Component {
  render() {
    const options = {
      items: 2,
      rewind: true,
      autoplay: true
  };
  
  const events = {
      onDragged: function(event) {},
      onChanged: function(event) {}
  };
    const width= 800 ;
    return (
      <div className="App">
        <header className="App-header">
          <div className="Title">
            <h1>STRESS FREE GROUP BOOKING</h1>
            <p>GROOV is a messaging chat bot that allow you to collectively <br/> Search, Select, Book & Pay together you next group move.</p>
          </div>
          <div className="Cards">
            <div className="slide">
              <Grid item xs={12}>
              <Grid container  justify="center" spacing={8}>
                  <Grid lg={4} item>
                    <div
                      style={ { 
                        width,
                      } }
                      className="responsive-image hs-wrapper">
                      <div />
                      <img
                      alt="test"
                        src={travelImg[1]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[2]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[3]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[4]}
                        className="responsive-image__image" />
                        <img
                      alt="test"
                        src={travelImg[5]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[6]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[7]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[8]}
                        className="responsive-image__image" />
                        <div class="centered hs-overlay"><h2>GO</h2><p>Somewhere</p></div>
                    </div>
                  </Grid>
                  <Grid lg={4} item>
                  <div
                      style={ { 
                        width,
                      } }
                      className="responsive-image hs-wrapper">
                      <div />
                      <img
                      alt="test"
                        src={travelImg[1]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[2]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[3]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[4]}
                        className="responsive-image__image" />
                        <img
                      alt="test"
                        src={travelImg[5]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[6]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[7]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[8]}
                        className="responsive-image__image" />
                        <div class="centered hs-overlay"><h2>GO</h2><p>Somewhere</p></div>
                    </div>
                  </Grid>
                  <Grid lg={4} item>
                  <div
                      style={ { 
                        width,
                      } }
                      className="responsive-image hs-wrapper">
                      <div />
                      <img
                      alt="test"
                        src={travelImg[1]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[2]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[3]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[4]}
                        className="responsive-image__image" />
                        <img
                      alt="test"
                        src={travelImg[5]}
                        className="responsive-image__image" />
                        <img
                        alt="test"
                        src={travelImg[6]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[7]}
                        className="responsive-image__image" />
                         <img
                        alt="test"
                        src={travelImg[8]}
                        className="responsive-image__image" />
                        <div class="centered hs-overlay"><h2>GO</h2><p>Somewhere</p></div>
                    </div>       </Grid>
              </Grid>
            </Grid>
           
            </div>
        </div>
        </header>
       <div className="Footer">Test</div>
      </div>
    );
  }
}

export default App;
