import React,{useEffect,useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItemDetails from './ListItem';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import MainContext from '../../contexts/MainContext';
import {Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const EndPoint = "https://memovercity.herokuapp.com/ex/";
export default function NestedList() {
  const {token} = useContext(MainContext);
  const classes = useStyles();
  const {practiceName} = useParams();
  const [data,setData] = useState([]);
  const [title,setTitle] = useState("");
  const [tutorialPage, setTutPage] = useState("");
  const [endp,setEndp] = useState(EndPoint);
  useEffect(() => {
    if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
    if(practiceName === "st"){
      setEndp(EndPoint+"storylist")
      setTitle("Story Exercises");
      setTutPage("/story-tutorial");
    }else if(practiceName === "mb"){
      setEndp(EndPoint+"mindBulletList");
      setTitle("Mind Bullets Exercises");
      setTutPage("/mb-tutorial");
    }

    axios.get(endp, {
      headers: {
        'http-auth' : token
      }
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    
  },[endp,practiceName,token]);

  return (token && <>
  <Row style={{marginTop:25, textAlign:"center", justifyContent:"center"}}><Link to={tutorialPage}><h1 style={{color:"black"}}>Go To Tutorial</h1></Link></Row>
    <List
      style = {{marginTop:15}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <h1>{title}</h1>
        </ListSubheader>
      }
      className={classes.root}
    >
        {data && data.map((item,id) => {return <ListItemDetails key={id} title={item.title} desc={item.desc} st={item.status} isTimed={id === 0 ? false : true} />})}

    </List>
    </>
  );
}