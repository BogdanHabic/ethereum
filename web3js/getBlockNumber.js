Web3 = require('web3');
var web3 = new Web3( "https://mainnet.infura.io");
console.log(web3.version);
web3.eth.getBlockNumber()
    .then(console.log);
