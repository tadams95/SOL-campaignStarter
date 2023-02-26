import React, { Component } from "react";
import factory from "../web3/factory";
import styles from "@/styles/Home.module.css";
import { Button } from "semantic-ui-react";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
   
    return { campaigns };
  }

  render() {
    return (
      <>
        <div className={styles.description}>{this.props.campaigns[0]}</div>
        
      </>
      
    );
    //test
  }
}
export default CampaignIndex;
