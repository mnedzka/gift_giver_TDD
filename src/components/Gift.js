import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>Person</ControlLabel>
          <FormControl
            className="input-person"
            onChange={e => this.setState({ person: e.target.value })}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default Gift;
