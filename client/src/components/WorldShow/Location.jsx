import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



function Location({locationID}) {
  const findLocation =
  gql`
  query {
    findLocationById(id: "${locationID}") {
      id
      marker_id
      world_id
      name
      description
    }
  }`;
  return (
    <div>
      <Query query={findLocation}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findLocationById.name}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findLocationById.description}</ListGroupItem>
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Location;