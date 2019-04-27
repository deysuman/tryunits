const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ env: 'prod', accessToken: 'v2x1f3ef7ba8741ae32298224189a9ee5b0a278cfd29bd7c37c32f4a707c40e45a2' }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
bitgo.session({}, function(err,res) {
  console.dir(err);
  console.dir(res);
});