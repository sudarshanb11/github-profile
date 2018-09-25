import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ProfileColumn = () => (
  <Query
    query={gql`
      {
        viewer {
          login
          name
          repositories(first: 100) {
            edges {
              node {
                id
                name
                description
                primaryLanguage {
                  name
                  color
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
    return viewer.repositories.edges.map(({node}) => {
      const {id, name, description, primaryLanguage} = node
      return (
        <div className="repository">
          <div className="name font-20 font-600 mb-1">{name}</div>
          <div className="description">
            <Row>
              <Col xs="9"><div className='font-14 text-gray mb-2'>{description}</div></Col>
            </Row>
          </div>
          <div className='font-12 text-gray mt-2'><span className='lang-color' style={{backgroundColor: primaryLanguage.color}}></span>{primaryLanguage.name}</div>
        </div>
      )
    }
    )
  }}
  </Query>
);

export default ProfileColumn