import obj from "./obj";
import Card from "./Card";
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

export default Body;