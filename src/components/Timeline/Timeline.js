import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: 'black',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary disabled>
          <Typography className={classes.heading}>Name</Typography>
          <Typography className={classes.secondaryHeading}>Tanishka Garg</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion >
        <AccordionSummary disabled>
          <Typography className={classes.heading}>Phone</Typography>
          <Typography className={classes.secondaryHeading}>9599696531</Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion >
        <AccordionSummary disabled>
          <Typography className={classes.heading}>Email</Typography>
          <Typography className={classes.secondaryHeading}>gargtanishka04@gmail.com</Typography>
        </AccordionSummary>
      </Accordion>
      
      <Accordion>
        <AccordionSummary disabled>
          <Typography className={classes.heading}>Linkedln</Typography>
          <Typography className={classes.secondaryHeading}>https://www.linkedin.com/in/tanishka-garg/</Typography>
        </AccordionSummary>
      </Accordion>   
    </div>
  );
}
