/*
  FThelper
  For instructing user to run Features analysis page

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
          <Typography>What is "Most Dependents features" ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            This are the most dependend features in your car with data set provided and <b>Technical head should prioritised these features and allocate work to their employee depending on the skillsets they have, with respect to these attributes</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography> Relationship heatmap</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            Relationship heatmap shows dependencies weight of different features it is very usefull to analyse the relationship among the features.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
