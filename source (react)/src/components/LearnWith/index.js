import React,{useContext,useEffect,useState} from 'react';
import {  Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import CardItem from '../CardItem';
import MainContext from '../../contexts/MainContext';
import axios from 'axios';

function Excercises() {
    const [ls,setList] = useState([]);
  const {token} = useContext(MainContext);
  useEffect(() => {
    if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
    axios.get("http://memovercity.herokuapp.com/learn/list", {
        headers:{
            "http-auth":token
        }
    }).then(res=> setList(res.data));

    console.log(ls);
  }, [token,ls])
    return (token &&
        <>
        <Row
          style={{
            fontFamily: "Tahoma, sans-serif",
            textAlign: "center",
            justifyContent: "center",
            marginBottom:"5vh",
            marginTop: "10vh"
          }}
        >
          <h1>Learn With Techniques</h1>
        </Row>
        <Row
        style={{
          fontFamily: "Tahoma, sans-serif",
          textAlign: "center",
          justifyContent: "center",
          padding: "0 10vw"
        }}
        >
        {ls.map((item,key) => {
            console.log(item);
            return <Col
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ marginTop:35}}
            key = {key}
            >
                     <Link style={{ textDecoration: 'none' }} to={`/learn/${item.id}`}> <CardItem src={item.img} name={item.name} desc={item.desc} /></Link>
                    </Col>
        })}
         
        </Row>
      </>
    )
}

export default Excercises
