import React  from "react";
import ReactDOM from "react-dom"
// const Heading=()=> <h1>Using RC</h1>
// const val=2000;
// const Comp1=()=>
//     (<div>
//     {<Heading></Heading>}
//     <h2>Used One component in Another - Component Composition</h2>
//     </div>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Comp1/>);

// Assignment EP-3


// Method-1

// const header=React.createElement("div",{class:"title"},(
//     [React.createElement("h1",{},"H1 Tag"),React.createElement("h2",{},"H2 Tag"),React.createElement("h2",{},"H2 Tag"),]
// ))

// Method-2
// const header=(<div className="title">
//     <h1>H1 Tag</h1>
//     <h2>H2 Tag</h2>
//     <h3>H3 Tag</h3>
// </div>)

//Method-3
// const Header1=()=>(<div className="title">
//     {"Using JS code in JSX"}
//     <h1>H1 Tag</h1>
//     <h2>H2 Tag</h2>
//     <h3>H3 Tag</h3>
// </div>)

// Method-4
// const H1=<h1>H1 Tag</h1>
// const H2=<h2>H2 Tag</h2>
// const H3=()=><h3>H3 Tag Obtained using Component</h3>
// const Header1=()=>(<div className="title">
//     {"Using JS code in JSX"}{H1}{<H3></H3>}    
// </div>)

// Creating Header Component From Scratch Using Functional Component
const Header=()=>(
    <div className="div d-flex justify-content-between">
        <p>Logo</p>
        <span><input type="text" className="searchTerm" placeholder="What are you looking for?"/></span>
        <p>User Icon</p>
    </div>

);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header></Header>)
