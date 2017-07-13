var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Zsend=artifacts.require("./Zsend.sol");
var HumanStandardToken=artifacts.require("./HumanStandardToken.sol");


module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin,Zsend, HumanStandardToken);
  deployer.deploy(MetaCoin);
  deployer.deploy(Zsend);
  deployer.deploy(HumanStandardToken);
deployer.deploy(HumanStandardToken, 1000000000, 'Human Standard Token', 0, 'HST'
)
};
