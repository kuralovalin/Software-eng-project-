import React,{useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Row, Button} from 'react-bootstrap';
import axios from 'axios';
import MainContext from '../../contexts/MainContext';
let interv;
function Practice() {
    const {id} = useParams();
    const [isSolving, setSolving] = useState(false);
    const [isComplete, setComplete] = useState(false);
    const [time, setTime] = useState(100);
    const [founded, setFound] = useState(0);
    const [failed, setFail] = useState(0);
    const [ls,setList] = useState([]);
    const [inputs, setInputs] = useState(["","","","","","","","","",""]);
    const endpoint = "https://memovercity.herokuapp.com/ex/getwords";
    const saveEndpoint = "https://memovercity.herokuapp.com/ex/save"
    const {token} = useContext(MainContext);
    useEffect(() => {
      if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}
      setTime(100);
      axios.get(endpoint, {
          headers: {
              "http-auth":token
          }
    }).then(res => setList(res.data));
    }, [token])
    useEffect(() => {
        
        if(!interv) clearInterval(interv);
        if(id === "timed" && time !== 0){
             interv = setInterval(function(){ 
                if(time!== 0){
                    setTime(time-1);
                } 
    
            
            }, 1000);
        }
        if(time === 0) clearInterval(interv);
    
         return () => {
             clearInterval(interv);
         }
    }, [id,time]);

    useEffect(() => {
        if(time === 0){
            startHandler();
        }
    },[time]);

    useEffect(() => {
        !interv && clearInterval(interv);
    }, [isSolving,isComplete]);
    const startHandler = () => {
        setSolving(true);
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const completeHandler = () => {
        setComplete(true);
        setSolving(false);
        let founded = 0;
        let failed = 0;
        ls.map((item,key) => {item === inputs[key] ? ++founded : ++failed ; return true});
        setFound(founded);
        setFail(failed);
        axios.post(saveEndpoint, {
            type:id,
            found:founded,
            fail: failed
        })

    }

    useEffect(() => {


    }, [])
    return (token &&
        <div style={{textAlign: "center",justifyContent: "center"}} >
            <Row
               style={{
                fontFamily: "Tahoma, sans-serif",
                textAlign: "center",
                justifyContent: "center",
                marginBottom:"5vh",
                marginTop: "3vh"
             }}
            >{isComplete ? <div>
                <h1 style={{fontSize:55, color:"green"}}>{founded} Words Found</h1>
                <h1 style={{fontSize:55, color:"red"}}>{failed} Words Missing</h1>
            </div> : id === "timed" && !isSolving && <h1 style={{fontSize:55}}>{time}</h1>}</Row>
            <div
               style={{
                fontFamily: "Tahoma, sans-serif",
                textAlign: "center",
                justifyContent: "center",
                margin:"auto",
                width:"auto",
                marginLeft: "0"
             }}
            >
                {!isSolving && ls.map((item,key) => {
                    return <Row key={key} style={{textAlign:"center"}}><h1 key={key} style={{fontSize:25, color : isComplete ? (item === inputs[key] ? "green" : "red") : "black"}}>{key+1}.{item}</h1></Row>
                })}
                {isSolving && <form onSubmit={submitHandler}>{ls.map((item,key) => (
                    <Row key={key} style={{textAlign:"center",justifyContent:"center",marginLeft:"8%"}}><h1 key={key} style={{fontSize:25}}>{key+1}.</h1>
                    <input type="text" 
                        style={{border:"none", borderBottom:"1px solid black",margin:15}}
                        onChange={(e) => {setInputs( prev => {
                            const newLs = [...prev];
                            newLs[key] = e.target.value;
                            return newLs;
                        
                        })}}
                        value={inputs[key]}></input></Row>
                )) }</form>}
            </div>
            {!isSolving && <Button style={{marginTop:25,textAlign:"center",justifyContent:"center"}} onClick={startHandler} disabled={isComplete} variant="success">Start</Button>}
            {isSolving && <Button style={{marginTop:25}} onClick={completeHandler} variant="success">Complete</Button>}
        </div>
    )
}

export default Practice
