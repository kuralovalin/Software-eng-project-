import {useState,useContext,useEffect} from "react";
import MainContext from '../../contexts/MainContext';
import axios from 'axios';
const endPoint = "https://memovercity.herokuapp.com/user/completed"
function UserDashboard() {
  const {token} = useContext(MainContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    if(!token) {alert("You must authenticate to access this page"); window.location.href = "/";}

    axios.get(endPoint, {headers:
      {
        "http-auth":token
      }
    }).then(res => {
        setList(res.data);
        console.log(res.data);
    });
  },[token]);
  return (token &&
    <div style={{textAlign:"center", justifyContent:"center"}}>

      {list && list.map((item,id) => { 
        return item && <p style={{fontSize:35,fontWeight:"bold",}} key={id}>Solved Practice Type: {item.type} And <span style={{color:"green"}}>{item.found}</span> words found and <span style={{color:"red"}}>{item.fail}</span> words failed</p> 
      })}

    </div>
  );
}

export default UserDashboard;
