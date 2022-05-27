/*
  QueryHelper
  For instructing user to run query resolver and predictor
*/

import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion
} from "@mui/material";


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How to use query processor ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary', textAlign: "left", marginLeft: "20px"}}>
            Query processor includes 3 parts 
            <ul>
              <li>
                <b>Keyword</b>: max, popular
              </li>
              <li>
                <b>Noun/feature(s)</b>: weight, fuelcapacity, width, enginesize, length...
              </li>
              <li>
                <b>Specifier</b>: between followed by range and keyword
              </li>
            </ul><br/>
            Syntax: keyword+Noun+Specifier<br/><br/>
            <b>
            Example1: popular features<br/>
            Example2: popular features between 1 20 price</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>How to use predictor ?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            To use predictor you first need to select features you want to predict and data you have <b>For example if you have price you need to write price and if you want to predict Hard Features you need to write features separated by commas</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography >
            What are Hard Features and Soft Features ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            <b>Hard Features</b> : [Weight, Fuel capacity, Width, Engine_size, Length]<br />
            <b>Soft Features</b> : [Power performance factor, Horsepower, Year resale value, Fuel efficiency/mileage]
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography >
            Units used ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            All units are standard and unit for price and sales are in thousands where price is in dollars ($)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography >
            Don'ts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{marginLeft:"10px", color: 'text.secondary' , textAlign: "left"}}>
            <ul>
              <li>
                <b>Please dont try to predict the same feature which you have</b><br/>
              </li>
              <li>
                <b>Please dont use spaces</b><br/>
              </li>
              <li>
                <b>Please make sure you predict the features which have high relationship</b><br/>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
