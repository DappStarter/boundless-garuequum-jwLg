require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide gesture neck flock toe'; 
let testAccounts = [
"0x3e265cd12c85d7ed6e7525c5ab77ad42417489849acd6e578c943bc92de77c5a",
"0x5d7b10fe6128ea9ec6c8e0cf1873957abad5b5b6ddcca7feb0caea6a1e2d6bf2",
"0xfa646433a3319ccce6de31a50d67bf0a447c77768c200c8d518321480427743f",
"0xd89e30062929fb78a6c57b7d88f3afd704a3864b51f93777a396c227bd61381a",
"0x298199d082d4ecc47660a9ab8b7fd1a61593702d696ea46553f8e585832a703c",
"0xcfdf451a4b64f00e044121f286a4c0f4de0e1cd30adfe5217316180dbed91ac2",
"0xb78e852fb418c4e05ae292eecdd25e77a7618a18642c6ee9dff8a0db91120879",
"0x19ac7430e7ee2b478b1a1ee455f046a28dc5850da35ddc905444f91bc0d756a2",
"0xe258e22a6c64bf8f2c8d2b0710be8ab3b36447ca21607b944f0042efe4295b67",
"0xe83751e1fc5af9cef58a009b0e91b8b141a8ba69e325e88b5fda2dfcc8ac9141"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

