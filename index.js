import Web3 from "web3";
import CricketContractArtifact from "../../build/contracts/CricketContract.json";
// import OwnableArtifact from "../../build/contracts/Ownable.json";
// import SafemathArtifact from "../../build/contracts/Safemath.json";
const App = {
  web3: null,
  account: null,
  CricketContract: null,
  start: async function() {
    const { web3 } = this;

    try {
      // 获取合约实例
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CricketContractArtifact.networks[networkId];
      this.CricketContract = new web3.eth.Contract(
        //CricketContractArtifact.abi,
        [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "cricketId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "dna",
                "type": "uint256"
              }
            ],
            "name": "NewCricket",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "cricketId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "targetId",
                "type": "uint256"
              }
            ],
            "name": "attack",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "bettingStake",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "bettors",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "buyRandomCricket",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "cricketId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dna",
                "type": "uint256"
              }
            ],
            "name": "changeDna",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "cricketId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "changeName",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "bettor",
                "type": "address"
              }
            ],
            "name": "checkBettorExist",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "claimBet",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "createRandomCricket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "cricketCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "cricketPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "cricketToOwner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "crickets",
            "outputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "dna",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "winCount",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "lossCount",
                "type": "uint16"
              },
              {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "getCricketsByOwner",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_mid",
                "type": "uint256"
              }
            ],
            "name": "getCricketsInfoById",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getCricketsNum",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "getCricketsOwnerNum",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "isOwner",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "cricketId",
                "type": "uint256"
              }
            ],
            "name": "levelUp",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "levelUpFee",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "ownerOf",
            "outputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "bettingCricketId",
                "type": "uint256"
              }
            ],
            "name": "placeBet",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "returnSender",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "roundBettorCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "roundBettorCount_temp",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "probability",
                "type": "uint256"
              }
            ],
            "name": "setAttackVictoryProbability",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "takeOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "winningBettorCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ],
        //deployedNetwork.address,
        0x64F9C9c1a23DdcE3cE24bCAb829Ee8134ca8E048,
      );
      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    //  this.mAmount();
      this.cricketList();
    //  this.vAmount();
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  cricketList: async function() {   //Checklist for all the battle crickets
    const allNum= await this.CricketContract.methods.getCricketsNum().call(); 
    const countdiv = document.getElementById('cricketCount');
    countdiv.innerHTML = `Total number of crickets：${allNum}`; 
    const addressdiv = document.getElementById('currentAddress');
    addressdiv.innerHTML = `Current user adress：${this.account}`; 
    const ol = document.getElementById('cricketsList');
    const allNum1 = parseInt(allNum);
    console.log(allNum1);
    ol.innerHTML = '';
    for(let i=0; i<allNum1; i++) {
        const cricketInfo = await this.CricketContract.methods.getCricketsInfoById(i).call();
        const cricketName = cricketInfo[0];
        const cricketDna  = cricketInfo[1];
        const level = cricketInfo[2];
        const address = cricketInfo[3];

        ol.innerHTML += `<li>  Cricketid:    ${i} <br>Cricketname  :${cricketName}  <br>Cricket DNA:  ${cricketDna} <br>Cricket level:   ${level} <br>Cricketowner address：  ${address}</li>`;
    }
  },
  getFreeCricket: async function() {       //get a free cricket
    try{
      const { createRandomCricket} = this.CricketContract.methods;
      const cricketname = document.getElementById('free_Name').value;
      await  createRandomCricket(cricketname).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Failed to get");
    }
  },
  buyCricket: async function() {       //buying a new cricket
    try{
      const { buyRandomCricket} = this.CricketContract.methods;
      const cricketname = document.getElementById('buy_Name').value;
      console.log(cricketname);
      console.log(Web3.utils.toWei('0.1','ether'));
      await  buyRandomCricket(cricketname).send({ from: this.account, value: Web3.utils.toWei('0.001','ether')});
    this.cricketList();
    }catch(error){
      console.error("Unable to buy");
    }
  },
  changeName: async function() {       //Change the cricket name
    try{
      const { changeName} = this.CricketContract.methods;
      const id = document.getElementById('name_ID').value;
      const cricketname = document.getElementById('newName').value;
      await  changeName(id,cricketname).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  changeDna: async function() {       //changing the cricket dna
    try{
      const { changeDna} = this.CricketContract.methods;
      const id = document.getElementById('dna_ID').value;
      const idnum = parseInt(id);
      const cricketname = document.getElementById('newDna').value;
      await  changeDna(idnum,cricketname).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Unable to change");
    }
  },
  levelUp: async function() {       //Purchase to level up
    try{
      const {levelUp} = this.CricketContract.methods;
      const id = document.getElementById('levelup_ID').value;
      const idnum = parseInt(id);
      await levelUp(idnum).send({ from: this.account, value: Web3.utils.toWei('0.001','ether')});
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  attack: async function() {       //Attack the other cricket
    try{
      const {attack} = this.CricketContract.methods;
      const id1 = document.getElementById('attacker_ID').value;
      const id2 = document.getElementById('attackeder_ID').value;
      const idnum1 = parseInt(id1);
      const idnum2 = parseInt(id2);
      await attack(idnum1,idnum2).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  approve: async function() {       //Attack the other cricket
    try{
      const {approve} = this.CricketContract.methods;
      const add = document.getElementById('approveAddress').value;
      const id = document.getElementById('approveID').value;
      const idnum = parseInt(id);
      await approve(add,idnum).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  transfer: async function() {       //Attack the other cricket
    try{
      const {transfer} = this.CricketContract.methods;
      const add = document.getElementById('transferAddress').value;
      const id = document.getElementById('transferID').value;
      const idnum = parseInt(id);
      await transfer(add,idnum).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  
  takeOwnership: async function() {       //Attack the other cricket
    try{
      const {takeOwnership} = this.CricketContract.methods;
      const id = document.getElementById('takeOwnership_ID').value;
      const idnum = parseInt(id);
      await takeOwnership(idnum).send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },

  placeBet: async function() {       //placeBet
    try{
      const {placeBet} = this.CricketContract.methods;
      const bettingCricketId = document.getElementById('bettingCricketId').value;
    //  const bettingStake = document.getElementById('bettingStake').value;
      const int_id = parseInt(bettingCricketId);
    //  const int_stake = parseInt(bettingStake);
      await placeBet(int_id).send({ from: this.account, value: Web3.utils.toWei('1','ether')});
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },

  claimBet: async function() {       //claimBet
    try{
      const {claimBet} = this.CricketContract.methods;

      await claimBet().send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },

  returnBalance: async function() {       //claimBet
    try{
      const {returnBalance} = this.CricketContract.methods;

      await returnBalance().send({ from: this.account });
    //  this.mAmount();
    this.cricketList();
    }catch(error){
      console.error("Error");
    }
  },
  
//    getFreeCricket: async function() {     //领取免费僵尸 
    
//     const cockname = document.getElementById('free_Name').value;
//     console.log(cockname);
//     await this.CockContract.methods.createRandomCock(cockname).call();
   
// },
//     buyCock: async function() {     //买僵尸
    
//       const cockname = document.getElementById('free_Name').value;
//       console.log(cockname);
//       await this.CockContract.methods.createRandomCricket(cricketname).call();
//  },
    lookupCricket: async function(){   //Search up the cricket details
      const cricketid = document.getElementById('cricket_id').value;
      const idnum = parseInt(cricketid)
      console.log(typeof(idnum));
      console.log(idnum);
      const cricketinfo = await this.CricketContract.methods.getCricketsInfoById(idnum).call();
      console.log(cricketinfo);
      const name = cricketinfo[0];
      const dna = cricketinfo[1];
      const level = cricketinfo[2];
      const address = cricketinfo[3];
      console.log(typeof(address));
      const ol = document.getElementById('cricketinfo');

      ol.innerHTML = '';
      ol.innerHTML += `<li>  ${cricketid}  |  ${name}  |  ${dna}  |  ${level} |  ${address} </li>`;
    },

  // vAmount: async function() {   //查询视频信息
  //     const count2 = await this.newcontract.methods.vAmount().call();  
  //     const countDiv2 = document.getElementById('count2');
  //     countDiv2.innerHTML = count2; 
  //     const ol2 = document.getElementById('videos');
  //     ol2.innerHTML = '';
  //     let j=0;
  //     for(j=1; j<=count2; j++) {
  //     const video  = await this.newcontract.methods.getVideoAllById(j).call();
  //     console.log(video);
  //     const addr = video[0];
  //     const author = video[1];
  //     const date = video[2];
  //     const moniterid = video[3]
  //     const ol = document.getElementById('videos');
  //     ol.innerHTML += `<li>  ${addr}  |  ${author}  |  ${date}  |  ${moniterid}  </li>`;
  //      }
  //     },
  

  // postMoniter: async function() {       //上传监控信息
  //   try{
  //     const {postMoniter} = this.newcontract.methods;
  //     const location = document.getElementById('location').value;
  //     const coord= document.getElementById('coord').value;
  //     const brand = document.getElementById('brand').value;
  //     await postMoniter(location,coord,brand).send({ from: this.account });
  //     this.mAmount();
  //   }catch(error){
  //     console.error("不能上传监控数据");
  //   }
  // },

  // postVideo: async function() {       //上传监控信息
  //   try{
  //     const {postVideo} = this.newcontract.methods;
  //     const addr = document.getElementById('addr').value;
  //     const moniterid = document.getElementById('moniterid').value;
  //     const moniteridint = parseInt(moniterid);
  //     await postVideo(addr,moniteridint).send({ from: this.account });
  //     this.vAmount();
  //   }catch(error){
  //     console.error("不能上传视频数据");
  //   }
  // },
  // getMonAllById: async function() {
  //       const moniterid = document.getElementById('inquireMoniter').value;
  //       const moniteridint = parseInt(moniterid);
  //       console.log(moniteridint);
  //       const moniter  = await this.newcontract.methods.getMonAllById(moniteridint).call();
  //       const location = moniter[0];
  //       const coord = moniter[1];
  //       const brand = moniter[2];
  //       const ul = document.getElementById('moniterAnswer');
  //       ul.innerHTML = '';
  //       ul.innerHTML +=  `<li>监控地区:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${location}</li>`;  
  //       ul.innerHTML +=  `<li>监控坐标:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${coord}</li>`; 
  //       ul.innerHTML +=  `<li>监控设备信息:&nbsp&nbsp${brand}</li>`; 
  // },
//   getVideoAllById: async function() {
   
//       const videoid = document.getElementById('inquireVideo').value;
//       const videoint = parseInt(videoid);
//       console.log(videoint);
//       const video  = await this.newcontract.methods.getVideoAllById(videoint).call();
//       const addr = video[0];
//       const author= video[1];
//       const date =video[2];
//       const moniterid =video[3];
//       const ul = document.getElementById('videoAnswer');
//       ul.innerHTML = '';
//       ul.innerHTML +=  `<li>视频地址:&nbsp&nbsp&nbsp${addr}</li>`;  
//       ul.innerHTML +=  `<li>上传者:&nbsp&nbsp${author}</li>`; 
//       ul.innerHTML +=  `<li>上传日期:&nbsp&nbsp${date}</li>`; 
//       ul.innerHTML +=  `<li>对应监控ID:&nbsp&nbsp${moniterid}</li>`; 

//   }
 };

window.App = App;
window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545"),
    );
  }
  App.start();
});
