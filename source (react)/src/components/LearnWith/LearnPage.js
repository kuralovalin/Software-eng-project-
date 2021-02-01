import React,{useEffect,useContext,useState} from 'react';
import {Row} from 'react-bootstrap';
import MainContext from '../../contexts/MainContext';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const Endpoint = "http://memovercity.herokuapp.com/learn/list/";
function LearnPage() {
    const {token} = useContext(MainContext);
    const {id} = useParams();
    const [data,setData] = useState({})
    useEffect(() => {
      if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
      //Get selected exercises words
      axios.get(Endpoint+id, {
        headers:{
            "http-auth":token
        }
    }).then(res=> {
        console.log(res.data);
        setData(res.data);
        console.log(data);
    });
      //Get description
      //Show how to memorise
      //Testit
    }, [token,data,id])
    return ( token &&
        <div style={{height:"80vh"}}>
            <Row id="box" style={{textAlign:"center",justifyContent:"center",height:"100%",width:"100%",marginTop:15}} className="gradient-border">
                <div  style={{textAlign:"center",justifyContent:"center",height:"100%",width:"100%",overflow:"auto"}} >
                    <h1 style={{fontWeight:"bold",marginTop:15}}>
                        {data.name}
                    </h1>
                    <hr></hr>
                    <p>{data.tutorial}</p>
                    <hr></hr>
                    {data.words && data.words.map((item,id) => <p style={{fontSize:25 }}>{id+1}.{item}</p>)}

                    </div>
                </Row>
        </div>
    )
}

export default LearnPage
