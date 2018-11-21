import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class EditTownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      population: this.props.population,
      government: this.props.government,
      description: this.props.description,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePopulationChange = this.handlePopulationChange.bind(this);
    this.handleGovernmentChange = this.handleGovernmentChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePopulationChange(e) {
    this.setState({population: Number(e.target.value)});
  }
  handleGovernmentChange(e) {
    this.setState({government: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  handleRefresh() {
    window.location.reload();
  }
  render() {
    const { name, description, population, government } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!, $name: String!, $description: String, $population: Int, $government: String){
        editMarkerInfo(id: $id, name: $name, description: $description, population: $population,
          government: $government) {
         id
        }
      }`
    return (
      <div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name (required)</Label>
              <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
              <Label>Population (optional)</Label>
              <Input value={this.state.population} onChange={this.handlePopulationChange} type="text" name="population" />
              <Label>Government (optional)</Label>
              <Input value={this.state.government} onChange={this.handleGovernmentChange} type="text" name="government" />
              <Label>Description (optional)</Label>
              <Input value={this.state.description} onChange={this.handleDescriptionChange} type="text" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Mutation mutation={POST_MUTATION} variables={{ id, name, population, government, description }}>
            {(postMutation) =>
              <Button color="success" onClick={(event)=>{postMutation(event)
                .then(()=>{this.handleRefresh();})
                .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
          </Mutation>
        </ModalFooter>
      </div>
    )
  }
}

export default EditTownForm;