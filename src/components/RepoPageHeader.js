import React, { Component } from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Octicon, {Repo, Eye, Star, RepoForked, Code, IssueOpened, IssueClosed, Check} from '@githubprimer/octicons-react'
import Moment from 'react-moment';

class RepoPageHeader extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '2'
      };
    } 
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    render() {
        const {viewer} = this.props.data
        const {repoName} = this.props
        return (
            <div>
            {viewer && <div className='repo-page'>
                <div className='page-header'>
                    <Container>
                        <div className='head'>
                            <div className='title'><Octicon icon={Repo}/> <span>{viewer.login}</span> / <span className='font-600'>{repoName}</span></div>
                            <div className='actions'>
                            <div className='action'>
                                <div className='name'><Octicon icon={Eye}/> Unwatch</div>
                                <div className='detail'>2344</div>
                            </div>
                            <div className='action'>
                                <div className='name'><Octicon icon={Star}/> Star</div>
                                <div className='detail'>2344</div>
                            </div>
                            <div className='action'>
                                <div className='name'><Octicon icon={RepoForked}/> Fork</div>
                                <div className='detail'>2344</div>
                            </div>
                            </div>
                        </div>
                        <Nav tabs>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <Octicon icon={Code}/> Code
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <Octicon icon={IssueOpened}/> Issues
                            </NavLink>
                            </NavItem>
                        </Nav>     
                    </Container>
                </div>
                <Container>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div className='list-box'>
                                    <div className='list-header'>
                                        <a className='head-item'><Octicon icon={IssueOpened}/> 0 Open</a>
                                        <a className='head-item'><Octicon icon={Check}/> 0 Closed</a>
                                    </div>
                                    {this.props.repoName && <IssueTabContent login={viewer.login} issues={viewer.repository.issues.nodes}/>}
                                </div>
                            </Col>
                        </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>}
            </div>
        )
    }
  }

const IssueTabContent = ({login, issues}) => {
    return issues.map(t => {
        const {title, number, closed, updatedAt} = t
        return (
            <div className='list-item'>
                <div className='status'>{ closed ? <Octicon icon={IssueClosed} className='state-close' /> : <Octicon icon={IssueOpened} className='state-open' />}</div>
                <div className='content'>
                    <div className='main'> {title}</div>
                    <div className='sub'>#{number} { closed ? "closed" : "opened" } <Moment fromNow>{updatedAt}</Moment> by {login}</div>
                </div>
            </div>
        )
    })
}

export default graphql(gql`
query($repo: String!){ 
    viewer {
        login
        name
        email
        repository(name: $repo) {
            name
            issues(first: 100){
                totalCount
                nodes {
                    title
                    number
                    closed
                    updatedAt
                }
            }
        }
    }
 }`,
 {
    options: (props) => ({
        variables: {
            repo: props.repoName || ''
        }
    })
 }
)(RepoPageHeader)
