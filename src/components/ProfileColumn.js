import React from 'react';
import { Button } from 'reactstrap';
import Octicon, {Mail} from '@githubprimer/octicons-react'
import ProfilePic from './../images/profile-pic.png';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ProfileColumn = () => (
  <Query
    query={gql`
      {
        viewer {
          login
          name
          email
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
      <div>
        <div className="git-profile-pic">
          <img width="230" height="230" src={ProfilePic} alt="Github profile"/>
        </div>
        <div className="git-name-container">
          <span className="font-24 font-600">{viewer.name}</span>
          <span className="font-20 font-300 username">{viewer.login}</span>
        </div>
        <div className="m-b-16">
           <Button className="btn-block btn-white-gradient">Add a bio</Button>
        </div>
        <div className='p-t-b-16 bdr-top-1 bdr-gray font-14 '>
           <Octicon icon={Mail} />&nbsp;<a href="/">{viewer.email}</a>
        </div>
        <div className='p-t-b-16 bdr-top-1 bdr-gray'>
          <span className="font-600">Organaizations</span>
        </div>
      </div>
    )
  }}
  </Query>
);

export default ProfileColumn