import { ethers } from "ethers";

export const ADDR_LEN = 42

/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
export function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const validateAddr = (addr)=> {
  if (addr.length !== ADDR_LEN) {
    return `Address must have ${ADDR_LEN} characters`;
  }
};

export const validateAmt = (numStr) => {
  const num = +numStr;
  if (Number.isNaN(num)) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    return "Invalid number";
  }
  if (num < 0) {
    return "Amount cannot be negative";
  }
};

export const validateUint = (numStr) => {
  const num = +numStr;
  if (Number.isNaN(num)) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    return "Invalid number";
  }
  if (num < 0 || !Number.isInteger(num)) {
    return "Number must be a non-negative integer";
  }
};
export const sleep = async (delay) =>
  new Promise((r) => setTimeout(r, delay));

export const shortenHash = (st) => {
  return st.slice(0, 4) + "..." + st.slice(-4);
};

export const roundAmt = (amt, decimals) => {
  //https://docs.ethers.io/v5/api/utils/display-logic/#utils-parseEther
  //for now ignore the possibility that the number could be too big
  //https://ethereum.stackexchange.com/questions/84004/ethers-formatetherwei-with-max-4-decimal-places
  const pow10 = Math.pow(10, decimals);
  let num = +amt;
  if (Number.isNaN(num)) return amt;
  num = Math.round(num * pow10) / pow10;
  return num.toString();
};

export const generateNewPrivateKey = () => {
  const wallet = ethers.Wallet.createRandom();
  console.log("address:", wallet.address);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("privateKey:", wallet.privateKey);
};
