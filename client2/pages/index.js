import React, { Component } from "react";
import factory from "../web3/factory";
// import styles from "@/styles/Home.module.css";
import { Button, Card } from "semantic-ui-react";

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
      <>
        <div>{this.renderCampaigns()}</div>
      </>
    );
    //test
  }
}
export default CampaignIndex;
