export const DUR_SNACKBAR_TX = 60000; //in my ts app I used 60
export const DUR_SNACKBAR = 15000;

export const supportedNetworks = [
  {
    name: "Goerli",
    id: "5",
    contractAddress: "",
  },
  {
    name: "Alfajores",
    id: "44787",
    contractAddress: "0x497ff2D9CC6674b64e1619c87468EFE8692F0353",// also 0xE0FF997fD3e22bB8050e73C21f4530986fB300EC
  },
  {
    name: "Celo",
    id: "42220",
    contractAddress: "0x35D91fC49f5a8783866EFDD716b34a6FE3631132",
  },
  {
    name: "Local (with chain id 1337)",
    id: "1337",
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
];

//   export enum RpcCallErrorStatus {
//     UNDEFINED,
//     NO_ERROR,
//     RECOGNIZED_RPC_ERROR,
//     OTHER_ERROR,
//   }

export const RpcCallErrorInitVals = {
  status: "",
  code: "",
  method: "",
  fullMsg: "",
  userMsg: "",
  level: "",
};

export const txCodes = [
  { code: "ACTION_REJECTED", userMsg: "Tx rejected by user", level: "info" },
  {
    code: "CALL_EXCEPTION",
    userMsg: "Contract reverted execution",
    level: "error",
  },
  {
    code: "INSUFFICIENT_FUNDS",
    userMsg: "Insufficient balance for tx",
    level: "error",
  },
  {
    code: "NETWORK_ERROR",
    userMsg: "Network is not responding to requests",
    level: "error",
  },
];

export const tokenIds = "1 2 3 4 5 6 7 8 9 10 11 12".split(" ");
export const mediaPrefix = "https://bafybeibl7guejya2dldrsqpsug7osxix32qyr2t7ggxrzt6ihbkirwhkrq.ipfs.nftstorage.link/"//"..\\..\\NFKeetees images\\";
export const mediaSuffix = ".jpeg"
export const nNfts = tokenIds.length

export const PLACEHOLDER_OWNER = ""//"Fetching owner..."
export const initOwners = tokenIds.map(()=>PLACEHOLDER_OWNER)
