import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import { Component } from "react";


class Aboutus extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent componentDidMount");
    }
    render(){
        // console.log("Parent Render");
        return (
            <div>
                <h1>About Us Page</h1>
                <UserCard name="Babu" location="Vizag"/>
                
            </div>
        )
    }
}
export default Aboutus;
