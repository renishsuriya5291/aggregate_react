import AAContext from "./AAContext";
import { useState } from "react";


const AAState = (props)=>{
    const host = "http://localhost:5000";

    const [userData, setUserData] = useState({});

    const getUserData = async()=>{
        const response = await fetch(`${host}/api/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            }
        })
        const json = await response.json();
        setUserData(json); 
    }

    const updateUser = async({name,address,occupation,gender,work_hour,age})=>{
        const response = await fetch(`${host}/api/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({name,address,occupation,gender,work_hour,age})
        })

        const json = await response.json();
        setUserData(json.worker)
        console.log(json.worker)
    }

    return (
        <AAContext.Provider value={{userData, getUserData, updateUser}}>
            {props.children}
        </AAContext.Provider>
    )
}

export default AAState;