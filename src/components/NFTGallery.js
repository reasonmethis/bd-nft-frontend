import { Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React from "react";

import * as cfg from "../constants";
import NFTCard from "./NFTCard";

const NFTGallery = ({ nftOwners }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const tokenIdsToShow = checked
    ? cfg.tokenIds
    : cfg.tokenIds.filter((id) => nftOwners[+id - 1].startsWith("0x"));
  return (
    <>
      <Typography variant="h3" color="text.secondary" textAlign="center">
        Gallery
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Show not yet minted"
        sx={{ margin: "auto", display: "block" }}
      />

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gridColumnGap: "16px" }}
      >
        {tokenIdsToShow.map((tokenId) => {
          return (
            <NFTCard
              key={tokenId}
              tokenId={tokenId}
              owner={nftOwners[+tokenId - 1]}
            ></NFTCard>
          );
        })}
      </Stack>
    </>
  );
};

export default NFTGallery;
