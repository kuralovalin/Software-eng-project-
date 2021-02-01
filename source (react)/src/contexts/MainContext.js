import {createContext,useState} from 'react';

const MainContext = createContext(null);
/*

const ENDPOINT = "https://memovercity.herokuapp.com/user/profile";
const Logout = "https://memovercity.herokuapp.com/user/logout";

*/


export const MainProvider = ({children}) => {
    
    const [name,setName] = useState("");
    const [isLoggedIn, setLogin] = useState(false);
    const [token,setToken] = useState("");


    const values = {
        name,
        setName,
        isLoggedIn,
        setLogin,
        token,
        setToken
    }



    return (<MainContext.Provider value={values}>{children}</MainContext.Provider>);
}
export default MainContext;