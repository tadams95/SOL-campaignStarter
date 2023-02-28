import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Campaign from "../web3/campaign";
import web3 from "../web3/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`)

    } catch (err) {}
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
