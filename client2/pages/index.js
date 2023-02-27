import React, { Component } from "react";
import factory from "../web3/factory";
// import styles from "@/styles/Home.module.css";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <>
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
          <h3>Open Campaigns</h3>
          <div>{this.renderCampaigns()}</div>
          <Button content="Create Campaign" icon="add square" primary={true} />
        </>
      </Layout>
    );
    //test
  }
}
export default CampaignIndex;
