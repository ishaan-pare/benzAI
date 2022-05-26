import React from "react";
import {
  Box,
  Grid,
  Container,
  Stack,
  Divider
} from "@mui/material";
import Item from "../Item";
import HeatMap from "./sub/Heatmap";
import Mattr from "./sub/MAttr";
import Interpret from "./sub/Interpret";

export default function Relations() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item><Mattr /></Item>
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <Item><h1>Relational Analysis</h1></Item>
            <Item sx={{ padding: "20px" }}>
              <h2 style={{ "marginBottom": "20px" }}>Relationship between functional features</h2>
              <Divider />
              <HeatMap />
            </Item>
            <Item sx={{ padding: "20px" , fontSize: "15px"}}>
              <h2>Interpretation of the results</h2>
              <Interpret />
            </Item>
          </Stack>

        </Grid>

      </Grid>
    </Box>
  );
}

