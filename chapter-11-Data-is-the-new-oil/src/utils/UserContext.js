import {createContext} from "react";


const UserContext = createContext({
    userInfo: {
        name:"Dummy Name",
        email:"dummy@gmail.com"
    },
}
);


export default UserContext;