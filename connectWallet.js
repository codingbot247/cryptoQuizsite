  let userAddress=null;

async function connectWallet(){
    if (typeof window.ethereum !== "undefined"){
         /*await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x84531' ,
                       rpcURL: 'https://chain-proxy.wallet.coinbase.com?targetName=base-goerli' }], 
          });*/
       userAddress = await window.ethereum.request({method: "eth_requestAccounts"})
       
        document.getElementById("connect").innerHTML = "Connected";
        console.log(userAddress);
    }
    else{
        document.getElementById("connect").innerHTML = "Please install a crypto wallet" 
    }
}
