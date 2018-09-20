import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar'
import { Container, Row, Col } from 'reactstrap';
import ProfilePic from './images/profile-pic.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar/>
        <Container className="page">
          <Row>
            <Col xs="3">
              <div className="git-profile-pic">
                <img width="230" height="230" src={ProfilePic} alt="Profile picture"/>
              </div>
              <div className="git-name-container">
                <span className="font-24 font-600">Sudarshan</span>
                <span className="font-20 font-300 username">sudarshanb11</span>
              </div>
            </Col>
            <Col xs="9">

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
