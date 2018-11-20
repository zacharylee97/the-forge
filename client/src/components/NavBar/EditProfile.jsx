import React from "react";
import {Redirect} from 'react-router'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditProfileForm from './EditProfileForm'

function EditProfile({getUserID}) {
  const id = getUserID();
  const findUser = gql`
  query {
    findUserById(id: "${id}"){
      id
      first_name
      last_name
    }
  }`
  if (id) {
    return (
      <Query query={findUser}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        return <EditProfileForm id={data.findUserById.id} first_name={data.findUserById.first_name} last_name={data.findUserById.last_name} />}}
      </Query>
    )
  } else {
    return <Redirect to='/login' />
  }
}

export default EditProfile;