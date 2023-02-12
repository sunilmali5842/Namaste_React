import { Outlet} from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent Constructor")

    }

    componentDidMount(){
        // Best place for API CALL

        // console.log("Parent componentDidMount");

        
    }
   
     componentWillUnmount(){
         clearInterval(this.timer);
     }
    render(){
        // console.log("Parent Render");
        return (
            <>
            <div className="container">
            <h1> ABOUT US Page</h1>
    
            <p> This is about us page. Created using a component.</p>
    
            <ProfileFunctionalComponent name={"Sunil"} sirname={"Mali"} />
    
            <ProfileClass name={"FirstChild"} sirname={"TestSirname"}/>
            </div>
    
            
            </>
        )
    }
}

export default About;