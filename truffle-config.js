// // module.exports = {
// // networks: {
// //     development: {
// //      host: "127.0.0.1",     
// //      port: 8545,            
// //      network_id: "*",       
// //     },
// //     develop: {
// //       port: 8545
// //     },


// //   },
// //   mocha: {
 
// //   },

// //   compilers: {
// //     solc: {

// //     }
// //   }
// // }
// const { readFileSync } = require('fs')
// const path = require('path')
// const { join } = require('path')
// const LoomTruffleProvider = require('loom-truffle-provider')
// console.log(path);
// console.log(join);
// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*",
//     },
//     local_loom: {
//       provider: function() {
//         const privateKey = readFileSync(path.join(__dirname, 'loom_private_key'), 'utf-8')
//         const chainId = 'default'
//         const writeUrl = 'http://127.0.0.1:46658/rpc'
//         const readUrl = 'http://127.0.0.1:46658/query'
//         const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
//         loomTruffleProvider.createExtraAccountsFromMnemonic("gravity top burden flip student usage spell purchase hundred improve check genre", 10)
  
//         return loomTruffleProvider
//         },
//       network_id: '*'
//     }
    
//   }
// }
const { readFileSync } = require('fs')
const path = require('path')
const LoomTruffleProvider = require('loom-truffle-provider')

module.exports = {
  networks: {
    
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    develop: {
      port: 8545
    },
    
   local_loom: {
      provider: function () {
        const privateKey = readFileSync(path.join(__dirname, 'loom_private_key'), 'utf-8')
        const chainId = '999'
        const writeUrl = 'http://127.0.0.1:46658/rpc'
        const readUrl = 'http://127.0.0.1:46658/query'
        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
        loomTruffleProvider.createExtraAccountsFromMnemonic("gravity top burden flip student usage spell purchase hundred improve check genre", 10)
        return loomTruffleProvider
      },
      network_id: '*'
    },

    extdev: {
      provider: function () {
        const privateKey = readFileSync(path.join(__dirname, 'loom_private_key'), 'utf-8')
        const chainId = 'extdev-plasma-us1'
        const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc'
        const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query'
        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
        loomTruffleProvider.createExtraAccountsFromMnemonic("gravity top burden flip student usage spell purchase hundred improve check genre", 10)
        return loomTruffleProvider
      },
      network_id: '9545242630824'
    }
}
}
