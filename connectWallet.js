async function connectWallet(){
    if (typeof window.ethereum !== "undefined"){
        await window.ethereum.request({method: "eth_requestAccounts"})
        document.getElementbyId("connect").innerHTML = "Connected"
    }
    else{
        document.getElementById("connect").innerHTML = "Please install a crypto wallet"
    }
}


