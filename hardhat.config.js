require("@nomicfoundation/hardhat-toolbox");

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.4.18" },
      { version: "0.4.24" },
      { version: "0.5.16" },
      { version: "0.6.12" },
      { version: "0.6.6" },
      { version: "0.7.6" },
    ].map((o) => ({ ...o, settings })),
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      forking: {
        url: "https://testnet-rpc.bitlayer.org",
      }
    },
    goerli: {
      url: `https://goerli.infura.io/v3/528c22c1e39a46f49b52b1aa0473b045`,
      accounts: [
        "8e4171552ec16d0332c0bd62e1df5f8873a3c51b5d6cc4f41e8f10f59dd0dbbe"
      ]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/528c22c1e39a46f49b52b1aa0473b045`,
      accounts: [
        "227e38b12814302308de3d564c27589b934c893f412405364e4bd6fa152d4415"
      ]
    },
    bitlayertestnet: {
      url: 'https://testnet-rpc.bitlayer.org',
      accounts: ["ddf0d87c8364f888ce8cea57995781797bbd954441deae412ae7922ad0813a9f"]
    },
    ire: {
      url: 'https://qa-http-nodes.5ire.network',
      accounts: ["0x418776e270e22baa51cc1ac0919333ce84ab17e7135303b6aa988e934abac940"]
    },
    fiveire: {
      url: 'https://rpc.5ire.network',
      accounts: ["0x418776e270e22baa51cc1ac0919333ce84ab17e7135303b6aa988e934abac940"]
    },
    bnbtestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ["f8b83ad05ff40a9edd62998fb0f8350083c560d1f89330f8f625ff317cfbb76b"]
    },
    bitlayer: {
      url: 'https://rpc.bitlayer.org',
      accounts: ["3d602a6f3c5ff36c22c5515b31a420a0e1ae75cd33e29b6ff0da895a3e77fcfb"]
    },
    confluxTestnet: {
      url: `https://evmtestnet.confluxrpc.com`,
      accounts: ["8dbc9d7b924b00532e6fc1295fd120886d3d3576ef9ac9de78335de33c28b095"]
    },
    manta_sepolia: {
      url: "https://pacific-rpc.sepolia-testnet.manta.network/http",
      accounts: ["248c37bcdde0b8df03f14bba40c142b7340ce0d97e515ccd241169e63dcb7c6a"]
    }
  },
  etherscan: {
    apiKey: {
      goerli: 'QEAE2M96IB94MVPUN7ESQEBNI416F1EWRR',
      sepolia: 'QEAE2M96IB94MVPUN7ESQEBNI416F1EWRR',
      bitlayertestnet: "1234",
      bitlayer:"123",
      ire: "ire",
      manta_sepolia: "whatever"
    },
    customChains: [
      {
        network: "bitlayertestnet",
        chainId: 200810,
        urls: {
          apiURL: "https://api-testnet.btrscan.com/scan/api",
          browserURL: "https://testnet.btrscan.com/"
        }
      },
      {
        network: "bitlayer",
        chainId: 200901,
        urls: {
          apiURL: "https://api.btrscan.com/scan/api",
          browserURL: "https://www.btrscan.com/"
        }
      },
      {
        network: "ire",
        chainId: 997,
        urls: {
          apiURL: "https://contract.evm.scan.qa.5ire.network/5ire/verify",
          browserURL: "https://scan.qa.5ire.network",
        }
      },
      {
        network: "manta_sepolia",
        chainId: 3441006,
        urls: {
          apiURL: "https://manta-sepolia.explorer.caldera.xyz/api",
          browserURL: "https://pacific-explorer.sepolia-testnet.manta.network",
        } 
      }
    ]
  }
};
