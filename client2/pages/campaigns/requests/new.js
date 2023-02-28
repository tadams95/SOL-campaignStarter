import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../../../web3/campaign";
import web3 from "../../../web3/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  render() {
    return (
        <Layout> 
        <h3>Create a Request</h3>
      <Form>
        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.description}
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Field>

        <Form.Field>
          <label>Value in ETH</label>
          <Input
            value={this.state.value}
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient</label>
          <Input
            value={this.state.recipient}
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Field>
        <Button primary>Create Request</Button>
      </Form>
      </Layout>
    );
  }
}

export default RequestNew;
