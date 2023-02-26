const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");

module.exports = async function(deployer) {
  // Use deployer to state migration tasks.
  await deployer.deploy(CampaignFactory);
const campaignFactory = await CampaignFactory.deployed();
console.log(campaignFactory.devdoc);
minimum = 1000000
  await deployer.deploy(Campaign, minimum, campaignFactory.address );
};
