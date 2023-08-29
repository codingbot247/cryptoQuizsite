import { userAddress } from "./connectWallet.js";
function claimNFT() {
const contractAddress = " "; 
const abi = [ ];
const contract = new web3.eth.Contract(abi, contractAddress);

const winnerAddress = "userAddress"; 
const nftURI = "URI_Winner_NFT"; 

// Calling the mint function to assign the NFT to the winner's address
contract.methods.mint(winnerAddress, nftURI).send({ from: ownerAddress })
  .on("transactionHash", function(hash) {
    // Transaction submitted
    console.log("Transaction hash:", hash);
  })
  .on("confirmation", function(confirmationNumber, receipt) {
    // Transaction confirmed
    console.log("Confirmation number:", confirmationNumber);
    alert("NFT minted and assigned to the winner's address.");
  })
  .on("error", function(error) {
    // Error occurred during transaction
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  });

}
