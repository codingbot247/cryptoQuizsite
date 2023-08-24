const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
    const quizsite = " ";
    const quizsiteABI = [  ]
    
    let quizSite;
    let signer;
    provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then(function(accounts) {
      signer = provider.getSigner(accounts[0]);
      QuizContract = new ethers.Contract(QuizContractAddress, QuizContractABI, signer);
    });

  });
