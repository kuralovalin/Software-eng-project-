import React,{useState} from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
nested: {
    paddingLeft: theme.spacing(4),
  },
}));


function ListItemDetails({title,desc,st,isTimed}) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };

    return (<>
        <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link style={{ textDecoration: 'none' }} to={`/practice/${isTimed ? "timed" : "free"}`}><ListItem button className={classes.nested}>
            <ListItemText primary={desc} />
            <Button variant={st}>Start</Button>
          </ListItem></Link>
        </List>
      </Collapse>
      </>
    )
}

export default ListItemDetails
