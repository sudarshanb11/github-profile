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
        authorization: `Bearer efce261f107b46c432c437f8ae76b6a9d9956e55`,
      },
    });
  },
});

class App extends Component {
  componentWillMount () {
    this.setState({viewer: '', currentRepo: null})
  }

  callBack = (viewer, repo) => this.setState({viewer, currentRepo: repo})

  render() {
    console.log(this.state)
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Menubar/>
            {
              this.state.currentRepo 
              ? <RepositoryPage repoName={this.state.currentRepo} />
              : <ProfilePage callback={this.callBack} />
            }
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
