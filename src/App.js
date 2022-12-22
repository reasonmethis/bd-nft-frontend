import { useSnackbar } from "notistack";
import { useState } from "react";

import "./App.css";

import * as cfg from "./constants";
import * as ops from "./operations/operations";

import { Box } from "@mui/material";
import Header from "./components/Header";
import { MintForm } from "./components/MintForm";
import NFTGallery from "./components/NFTGallery";
import { getRandomInt } from "./utils/utils";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [nftOwners, setNftOwners] = useState(cfg.initOwners);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const showMint = true;
  const mintCb = (vals) => {
    const notMintedIds = cfg.tokenIds.filter(
      (id) => nftOwners[+id - 1] === "Not yet minted"
    );
    const nNotMinted = notMintedIds.length;
    if (!nNotMinted) {
      enqueueSnackbar("Nothing to mint!", { variant: "error" });
      return;
    }
    ops
      .sendTx(
        "safeMint",
        { ...vals, tokenId: notMintedIds[getRandomInt(0, nNotMinted - 1)] },
        enqueueSnackbar
      )
      .then(() => ops.getOwners(setNftOwners));
  };

  return (
    <div className="App">
      <Header
        accounts={accounts}
        setAccounts={setAccounts}
        setNftOwners={setNftOwners}
      />
      <Box margin="0 32px 0 32px">
        {showMint && (
          <MintForm
            onSubmit={mintCb}
            account={accounts[0]}
            setNftOwners={setNftOwners}
          />
        )}
        <NFTGallery nftOwners={nftOwners} />
      </Box>
    </div>
  );
}

export default App;
