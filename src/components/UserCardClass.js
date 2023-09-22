import React from "react";
import SubChild from "./SubChild";
class UserCardClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"DummyName",
                location:"DummyLocation",
                avatar_url:""
            }
        }
        console.log("Constructor");
    }


    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/baburao-sanivada");
        const json=await data.json();
        console.log(json);
        this.setState({userInfo:json})
        console.log("Inside Component Did Mount");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component Will UnMount");
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo
        console.log("render");
        return (<div className="user-card">
        <img src={avatar_url}></img>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <p>Role : Software Developer</p>
    </div>)
    }
}
export default UserCardClass;