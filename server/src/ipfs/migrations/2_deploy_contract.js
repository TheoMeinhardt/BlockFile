const SimpleStorage = artifacts.require('../src/contracts/SimpleStorage.sol');

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
