import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import campaign from "../web3/campaign";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const campaign = campaign(this.props.address);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>Contribute to the cause!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
