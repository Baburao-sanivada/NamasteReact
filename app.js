import React  from "react";
import ReactDOM from "react-dom"

/*
Building Food Delievery App
1.Planning
-App LayOut(Main Div)
  1.Header
    -Logo
    -Nav Items
  2.Body
    -Search
    -Card Container
      -Card Component
  3.Footer
    -Copyright
    -Some Links
*/

//Header
const Header=()=>{
    return (
        <div className="header">
            <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThk6B4F2Q-aQEosit-VHmYfxhiDDAlBNo-JuA8nQN&s"/></div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Card=(props)=>{
    const {data}=props;
    return (
        <div class="res-card">
            <img class="card-logo" alt="card-logo" src="https://b.zmtcdn.com/data/pictures/chains/4/94244/77aa082158f91099bc3738bd3623f77e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"></img>
            <h3>{data.name}</h3>
            <h4>{data.location}</h4>
            <h4>{data.rating} stars</h4>
            <h4>{data.time} min</h4>
        </div>
    )
}
const obj=[{
    name:"chikoos Restaurant",
    location:"Vizag",
    rating:3.8,
    time:30
},{
    name:"Nawabs",
    location:"Vizag",
    rating:3.8,
    time:30
},{
    name:"Zeeshan",
    location:"Vizag",
    rating:3.8,
    time:30
}]
const Body=()=>{
    return (
        <div className="res-container">
            <div className="search"><input type="search" placeholder="Biriyani on your Mind"></input>Search</div>
            <div className="card-container">
            {
                obj.map((item)=><Card data={item}></Card>)
            }
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <div className="AppLayout">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)
