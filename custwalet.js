const ethers=require("ethers")

let addr = "";
while (true) {
  const wallet = ethers.Wallet.createRandom();
  addr = wallet.address.toLowerCase();
  if (addr.endsWith("ba")) {
    console.log("address:", wallet.address);
  }
  if (addr.endsWith("b0ba")) {
    console.log("mnemonic:", wallet.mnemonic.phrase);
    console.log("privateKey:", wallet.privateKey);
    break;
  }
}
