import React from "react";

class ProfileClass extends React.Component{
  
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:1,

            userInfo:{
                name: "Dummy Name",
                location:"Dummy Location",
            },
        }
        // console.log(this.props.name + "Constructor" );
    }
   async componentDidMount(){

       const data = await fetch("https://api.github.com/users/sunilmali5842");

       const json = await data.json();

       // console.log(json);

       this.setState({
           userInfo:json,
       });

   

       // console.log(this.props.name + "component Did Mount");

       this.timer = setInterval(() => {
         // console.log("Namaste React OP")
        },1000);

   }

   componentDidUpdate(){
       // console.log("Component Did Update ")
       clearInterval(this.timer);
   }

   componentWillUnmount(){
    // console.log("Component Will Unmount ")
   }
    render(){
        // console.log(this.props.name + "Render");
        return(
            <div className="container">
                <h1> This is Profile Class Component using Class based Components method</h1>
                <h3>Name from Class Based Component : {this.props.name}</h3>
                <h3> Sirname from Profile Class Component : {this.props.sirname}</h3>
                <h4>Count from class based comp : {this.state.count}</h4>
                <h4>Count 2 from class based comp : {this.state.count2}</h4>

                <button onClick={() => {
                    this.setState(
                        {
                            count:2,
                            count2:4,
                        }
                    )
                }}>Change state in CBC</button>

                <div className="userInfo">
                  <div className="profileImage">
                    <img src={this?.state?.userInfo?.avatar_url} />
                  </div>
                  <div className="textinfo">
                   <h1>{this?.state?.userInfo?.name}</h1>
                   <h3>{this?.state?.userInfo?.location}</h3>
                  </div>
                </div>

            </div>
            
        )
    }
}


export default ProfileClass;