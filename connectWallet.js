  let userAddress=null;

async function connectWallet(){
    if (typeof window.ethereum !== "undefined"){
        
       userAddress = await window.ethereum.request({method: "eth_requestAccounts"})
       
        document.getElementById("connect").innerHTML = "Connected";
        console.log(userAddress);
    }
    else{
        document.getElementById("connect").innerHTML = "Please install a crypto wallet" 
    }
}
