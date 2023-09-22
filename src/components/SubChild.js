import { Component } from "react";
class SubChild extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"Constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Component Did Mount");
    }
    render(){
        console.log(this.props.name+"Render")
    }
}
export default SubChild;