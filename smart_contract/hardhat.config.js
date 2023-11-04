//https://eth-goerli.g.alchemy.com/v2/QNaqc-hA2ni4OwEMot1DHwcbm-V87bfa
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/QNaqc-hA2ni4OwEMot1DHwcbm-V87bfa',
      accounts: ['d3f00d22fe5bd54276d11da3a117e1ae4c1af0107c4b915fbdae8878927a1cf5'],
    },
  },
};