import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar'
import Footer from './components/Footer'
import ProfileColumn from './components/ProfileColumn'
import ProfileDetail from './components/ProfileDetail'
import { Container, Row, Col } from 'reactstrap';
import './App.scss';
import './Utilities.scss';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer bbc876927cf4f6ca81751adf10b1000314280a64`,
      },
    });
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Menubar/>
          <Container className="page">
            <Row>
              <Col xs="3">
                <ProfileColumn />
              </Col>
              <Col xs="9">
                <ProfileDetail />
              </Col>
            </Row>
            <Footer />
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
