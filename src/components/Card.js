import { CARD_URL } from "../utils/constants";
const Card=(props)=>{
    const {data}=props;
    return (
        <div className="res-card">
            <img className="card-logo" alt="card-logo" src={CARD_URL+data.card.card.info.cloudinaryImageId}></img>
            <h3>{data.card.card.info.name}</h3>
            <h4>{data.card.card.info.locality}</h4>
            <h4>{data.card.card.info.avgRating} stars</h4>
            <h4>{data.card.card.info.costForTwotime}</h4>
        </div>
    )
}

export default Card 