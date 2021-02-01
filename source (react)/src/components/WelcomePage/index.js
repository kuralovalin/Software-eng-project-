import React,{useContext,useEffect} from 'react'
import {  Col, Row } from "react-bootstrap";
import CardItem from "../CardItem";
import {Link} from "react-router-dom";
import MainContext from '../../contexts/MainContext';
const Excercises = "https://images.wallpaperscraft.com/image/tunnel_neon_brain_124149_1024x768.jpg";
const Extras = "https://pix10.agoda.net/hotelImages/5871009/-1/cc6a9504ad5eddf5c7e54f4f97b99922.jpg?s=1024x768";


const pName = "Excercises";
const pDesc = "Learn And Practice Proven Memory Techniques";

const exName = "Examples";
const exDesc = "Learn And Remember New Things Using Techniques";
function WelcomePage() {
  const {name,token} = useContext(MainContext);
  useEffect(() => {
    
    if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
  },[token]);
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
        <h1>Welcome {name} </h1>
      </Row>
      <Row
      style={{
        fontFamily: "Tahoma, sans-serif",
        textAlign: "center",
        justifyContent: "center",
        padding: "0 10vw"
      }}
      >
        <Col style={{
            textAlign:"right",
            justifyContent:"right",
            marginBottom:25,

        }}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
        >
          <Link to="/ex" style={{ textDecoration: 'none' }}>
            <CardItem  
            src={Excercises} 
            name={pName}
            desc={pDesc}
            />
            
            </Link>
        </Col>
        <Col
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Link to="/learn"><CardItem
           src={Extras}
           name={exName}
           desc={exDesc}
           /></Link>
        </Col>
      </Row>
    </>
  );
}

export default WelcomePage
