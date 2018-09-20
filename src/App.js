import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar'
import Footer from './components/Footer'
import { Container, Row, Col, Button } from 'reactstrap';
import { FaEnvelope } from 'react-icons/fa';
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
              <div className="m-b-16">
                 <Button className="btn-block btn-white-gradient">Add a bio</Button>
              </div>
              <div className='p-t-b-16 bdr-top-1 bdr-gray font-14 '>
                 <FaEnvelope />&nbsp;<a href="/">sudarb11@gmail.com</a>
              </div>
              <div className='p-t-b-16 bdr-top-1 bdr-gray'>
                <span className="font-600">Organaizations</span>
              </div>
            </Col>
            <Col xs="9">

            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
