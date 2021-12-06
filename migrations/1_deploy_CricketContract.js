var CricketContract = artifacts.require('./CricketContract.sol')
module.exports = function(deployer) {
  deployer.deploy(CricketContract);
};
