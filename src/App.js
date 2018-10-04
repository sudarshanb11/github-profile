import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menubar from './components/Menubar'
import Footer from './components/Footer'
import ProfilePage from './ProfilePage'
import RepositoryPage from './RepositoryPage'
import './App.scss'
import './Utilities.scss'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 5302636f85bd3b2196453aa3ce4d7eea59d8eb05`,
      },
    });
  },
});

class App extends Component {
  componentWillMount () {
    this.setState({currentRepo: null})
  }

  callBack = (repo) => this.setState({currentRepo: repo})

  render() {
    console.log(this.state)
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Menubar/>
            <ProfilePage callback={this.callBack} />
            <RepositoryPage repo={this.state.currentRepo} />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
