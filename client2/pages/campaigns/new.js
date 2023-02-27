import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input } from "semantic-ui-react";
import factory from "../../web3/factory";
import web3 from "../../web3/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
  };

  //form submittal handler
  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    //create a new campaign
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      from: accounts[0],
    });
  };

  render() {
    return (
      <Layout>
        <h3>Create a campaign</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="Wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
