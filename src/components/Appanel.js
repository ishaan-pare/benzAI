import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Typography,
    Button
} from "@mui/material";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Data Analysis - Car dataset
          </Typography>
          <Button color="inherit" href='https://github.com/ishaan-pare/car_data_analysis_frontend.git'>Github</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}