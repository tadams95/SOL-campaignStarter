import React, { Component } from "react";
import factory from "../web3/factory";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        style: { overflowWrap: "break-word" },
        header: address,
        description: (
          <Link legacyBehavior route={`/campaigns/${address}`} >
            <a>View Campaign</a>
          </Link>
          
        ),
        fluid: true,
      };
    });

    return <Card.Group  items={items} />;
  }

  render() {
    return (
      <Layout>
        <>
          <h3>Open Campaigns</h3>
          <Link legacyBehavior route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add square"
                primary={true}
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </>
      </Layout>
    );
  }
}
export default CampaignIndex;
