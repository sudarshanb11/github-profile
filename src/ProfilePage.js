import React, { Component } from 'react';
import ProfileColumn from './components/ProfileColumn'
import ProfileDetail from './components/ProfileDetail'
import { Container, Row, Col } from 'reactstrap';

class ProfilePage extends Component {
  render() {
    return (
      <Container className="page">
        <Row>
          <Col xs="3">
            <ProfileColumn />
          </Col>
          <Col xs="9">
            <ProfileDetail callback={this.props.callback}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;
