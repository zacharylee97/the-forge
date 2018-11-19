import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



function City({cityID}) {
  const findCity =
  gql`
  query {
    findCityById(id: "${cityID}") {
      id
      name
      population
      government
      description
    }
  }`;
  return (
    <div>
      <Query query={findCity}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.name}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.population}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.government}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.description}</ListGroupItem>
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default City;