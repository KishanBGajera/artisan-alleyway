import React from "react";
import { Accordion as MUIAccordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({ title, content, img, isActive, onClick }) => {
  return (
    <MUIAccordion expanded={isActive} onChange={onClick}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title.replace(/\s+/g, '').toLowerCase()}Panel-content`}
        id={`${title.replace(/\s+/g, '').toLowerCase()}Panel-header`}
      >
        <div className="locality-image-container">
          <img src={img} alt={`${title}`} className="img-minimized" />
        </div>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordionContent">
          {content}
        </div>
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default AccordionItem;
