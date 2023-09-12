import { CARD_URL } from "../utils/constants";
const Card=(props)=>{
    const {data}=props;
    return (
        <div className="res-card">
            <img className="card-logo" alt="card-logo" src={CARD_URL}></img>
            <h3>{data.name}</h3>
            <h4>{data.location}</h4>
            <h4>{data.rating} stars</h4>
            <h4>{data.time} min</h4>
        </div>
    )
}

export default Card 