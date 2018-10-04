import React, { Component } from 'react';
import RepoPageHeader from './components/RepoPageHeader'
import { Container, Row, Col } from 'reactstrap';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const RepositoryPage = (props) => (
    <Query
    query={gql`
      {
        viewer {
          login
          name
          email
          repository(name: "calculator") {
            object(expression: "master:") {
              ... on Tree {
                entries {
                  name
                  type
                  mode
                }
              }
            }
          }
        }
      }
    `}
  >
  {({ data }) => {
     const { viewer } = data;
    if (!viewer) {
        return null;
    }
    return (
      <div className="  ">
        <Container>
          {viewer.name} / {props.repo}
        </Container>
      </div>
    )
  }}
  </Query>
)

export default RepositoryPage;
