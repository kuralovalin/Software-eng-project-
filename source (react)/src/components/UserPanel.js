import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '30px'
  },
  root2: {
    minWidth: 275,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}));


export default function SimpleAccordion() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
        <div class="container" style={{maxWidth: 'sm', margin: '5rem'}}>
            <div class="card-header" style={{height: '3rem', width: '100%', fontSize: '20px'}}>
                Mind Bullets
            </div>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                            Mind Bullets I
                        </Typography>
                    </CardActions>
                    <button type="button" class="btn btn-success" style={{marginLeft: '55rem', width: '200px'}}>Completed</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                            Mind Bullets II
                        </Typography>
                    </CardActions>
                    <button type="button" class="btn btn-danger" style={{marginLeft: '55rem', width: '200px'}}>Failed</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                            Mind Bullets III
                        </Typography>
                    </CardActions>
                    <button type="button" disabled="true" class="btn btn-secondary" style={{marginLeft: '55rem', width: '200px'}}>Locked</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
            <br/>
            <div class="card-header" style={{height: '3rem', width: '100%', fontSize: '20px'}}>
                Story Technique
            </div>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                        Story Technique I
                        </Typography>
                    </CardActions>
                    <button type="button" class="btn btn-success" style={{marginLeft: '55rem', width: '200px'}}>Completed</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                        Story Technique II
                        </Typography>
                    </CardActions>
                    <button type="button" class="btn btn-danger" style={{marginLeft: '55rem', width: '200px'}}>Failed</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <CardActions>
                        <Typography variant="h4" component="h4">
                        Story Technique III
                        </Typography>
                    </CardActions>
                    <button type="button" disabled="true" class="btn btn-secondary" style={{marginLeft: '55rem', width: '200px'}}>Locked</button>
                    <Typography className={classes.pos} color="textSecondary">
                        <br />
                        Word Count: 10,Time:NaN,Type:Basic
                    </Typography>
                </CardContent>
            </Card>
        </div>
  );
}
