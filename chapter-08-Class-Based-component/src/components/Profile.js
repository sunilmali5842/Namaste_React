import {useEffect,useState} from "react";

const Profile = (props) => {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React OP")
        },1000);

        console.log("useEffect");

        return () => {
            console.log("useEffectRender");

            clearInterval(timer);

        }
    }, []);

    console.log("render");
    return (
        <>
        <h1>This is Profile Component</h1>
        <h3>Name : {props.name}</h3>
        <h3>Sirname : {props.sirname}</h3>

        <h4>Count : {count}</h4>
        <h4>Count2 : {count2}</h4>

        <button onClick = {() => {setCount(1);setCount2(2)} }>Change Count</button>
        </>
    )
}


export default Profile;