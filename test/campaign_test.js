const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Campaign", function (accounts) {
  let campaignFactory;
  let campaign;
  const minimumContribution = web3.utils.toWei("0.1", "ether");
  const manager = accounts[0];
  const contributor1 = accounts[1];
  // const contributor2 = accounts[2];
  const vendor = accounts[3];

  beforeEach(async () => {
    campaignFactory = await CampaignFactory.new();
    await campaignFactory.createCampaign(minimumContribution, {
      from: manager,
    });
    const campaigns = await campaignFactory.getDeployedCampaigns();
    campaign = await Campaign.at(campaigns[0]);
  });

  it("should deploy a CampaignFactory and Campaign contract", async () => {
    assert.ok(campaignFactory.address);
    assert.ok(campaign.address);
  });

  it("should set the correct minimum contribution and manager", async () => {
    const campaignMinimumContribution = await campaign.minimumContribution();
    const campaignManager = await campaign.manager();
    assert.equal(campaignMinimumContribution, minimumContribution);
    assert.equal(campaignManager, manager);
  });

  it("should allow a contributor to contribute and become an approver", async () => {
    const contributionAmount = web3.utils.toWei("0.2", "ether");
    await campaign.contribute({
      from: contributor1,
      value: contributionAmount,
    });
    const isApprover = await campaign.approvers(contributor1);
    assert.ok(isApprover);
  });

  it("should not allow a contribution below the minimum contribution", async () => {
    const contributionAmount = web3.utils.toWei("0.05", "ether");
    let errorThrown = false;
    try {
      await campaign.contribute({
        from: contributor1,
        value: contributionAmount,
      });
    } catch (error) {
      errorThrown = true;
    }
    assert.ok(
      errorThrown,
      "Contribution below minimum contribution was allowed"
    );
  });

  it("should allow the manager to create a spending request", async () => {
    const description = "Test request";
    const value = web3.utils.toWei("0.1", "ether");
    await campaign.createRequest(description, value, vendor, { from: manager });
    const request = await campaign.requests(0);
    assert.equal(request.description, description);
    assert.equal(request.value, value);
    assert.equal(request.recipient, vendor);
  });
});
