import { Outlet} from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import React, {Component} from "react";
import UserContext from "../utils/UserContext";

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
            <div className="container m-auto my-16">
            <h1 className="text-4xl font-bold my-6"> ABOUT US Page</h1>
    
            <p> This is about us page. Created using a component.</p>

            <UserContext.Consumer>
               {({userInfo}) => (
                   <h4 className="font-bold p-4 border m-8">{userInfo.name} - using context</h4>
               )}
            </UserContext.Consumer>
    
            <ProfileFunctionalComponent name={"Sunil"} sirname={"Mali"} />
    
            <ProfileClass name={"FirstChild"} sirname={"TestSirname"}/>
            </div>
    
            
            </>
        )
    }
}

export default About;