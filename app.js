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


const AppLayout=()=>{
    return (
        <div className="AppLayout">
            <Header></Header>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)
