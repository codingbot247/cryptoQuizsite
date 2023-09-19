  //For the below code to work, one must install node js and then store the keys in the .env folder 
import { userAddress } from "./connectWallet.js";
const ethers = require('ethers');
// we include the dotenv package to so that it can bring the keys from the .env folder 
//env variables can be accessed in JS by process.env
require("dotenv").config();

async function claimNFT() {
  
  //An RPC URL is the URL of an Ethereum node which is working as a provider for us in the code. 
  const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
  const nftContractAddress = 'NFT_CONTRACT_ADDRESS';
  const tokenId = 'TOKEN_ID';
  const recipientAddress = 'userAddress';
  
  const nftContract = new ethers.Contract(nftContractAddress, ['function safeTransferFrom(address from, address to, uint256 tokenId)'], wallet);
  
  const tx = await nftContract.safeTransferFrom(wallet.address, userAddress, tokenId);
  await tx.wait();
  
  console.log(`NFT transferred successfully to ${userAddress}`);

}
