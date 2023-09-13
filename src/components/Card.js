import { CARD_URL } from "../utils/constants";
const Card=(props)=>{
    const {data}=props;
    return (
        <div className="res-card">
            <img className="card-logo" alt="card-logo" src={CARD_URL+data.info.cloudinaryImageId}></img>
            <h3>{data.info.name}</h3>
            <h4>{data.info.locality}</h4>
            <h4>{data.info.avgRating} stars</h4>
            <h4>{data.info.costForTwotime}</h4>
        </div>
    )
}

export default Card 