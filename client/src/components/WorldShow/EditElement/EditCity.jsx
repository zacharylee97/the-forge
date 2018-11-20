import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditCityForm from './EditCityForm'

function EditCity({location}) {
  const cityID = location.state.cityID;
  const findCity = gql`
  query {
       findCityById(id:"${cityID}") {
  			id
     	  name
      	population
      	description
      	government
      }
  }`

  return (
    <Query query={findCity}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditCityForm id={data.findCityById.id} name={data.findCityById.name} population={data.findCityById.population} government={data.findCityById.government} description={data.findCityById.description} />}}
    </Query>
  )
}

export default EditCity;