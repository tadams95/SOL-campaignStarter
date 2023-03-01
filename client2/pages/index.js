import React, { Component } from "react";
import factory from "../web3/factory";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CampaignIndex(props) {
  const router = useRouter();

  const handleViewCampaign = (address) => {
    router.push(`/campaigns/${address}`);
  };

  const renderCampaigns = () => {
    const items = props.campaigns.map((address) => {
      return {
        style: { overflowWrap: "break-word" },
        header: address,
        description: (
          <a onClick={() => handleViewCampaign(address)}>View Campaign</a>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <>
        <h3>Open Campaigns</h3>
        <Link href="/campaigns/new">
          <Button
            floated="right"
            content="Create Campaign"
            icon="add square"
            primary={true}
          />
        </Link>
        {renderCampaigns()}
      </>
    </Layout>
  );
}

CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};