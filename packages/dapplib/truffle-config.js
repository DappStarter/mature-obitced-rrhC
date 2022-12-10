require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan response meadow company gloom clinic army gaze'; 
let testAccounts = [
"0x619bab50556b57e57e1641fd15d9cb8155c41eec50669186361a2f66cc37a322",
"0x8747ef504241bf3b3b8b2af34e8460a0bef48ee34f6761feabd4a4aa460802a7",
"0x8ba19252020a3ebb67491f12364231c9fbf67fe75667b67f4735695984367f7b",
"0x95428f0f977aecb5f2c6c358a05cf7479f6e5ab70c7d92656263f7b328d05914",
"0x9f27605d689c4a85bb6734719b05c6f5f9014f2ba983bcd5e43f078ca4336342",
"0xbb75ec104bd61481e4aeabfce6a6b44b66440948ee17d408f330ae7bff24944e",
"0x013e5b7ee08360479845f4bfb986aae4338c9b01385c1417e88ca800870c5f96",
"0xca81d9713a73cb0a65cba89a2fd1cd18d32e71e397a0c01b601da15083012b1a",
"0x950393f74bede35607e60633f722a081c5598605e27f95a93e06c67eb8652f92",
"0x37becbef0dca5487e3184b01211cd3de6d6b03780ff8cd1a4ef0d8ca180d5da2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

