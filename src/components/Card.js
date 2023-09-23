import { CARD_URL } from "../utils/constants";

const Card=(props)=>{
    const {data}=props;
    return (
        <div className="m-2 p-4 w-[200px] h-[300px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="card-logo rounded-lg" alt="card-logo" src={CARD_URL+data.card.card.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-2">{data.card.card.info.name}</h3>
            <h4>{data.card.card.info.locality}</h4>
            <h4>{data.card.card.info.avgRating} stars</h4>
            <h4>{data.card.card.info.costForTwotime}</h4>
        </div>
    )
}

export const CardWithLabel=(Card)=>{
    return (props)=>{
        
        return (
            <div>
                <label className="absolute text-white bg-black px-2 py-1 m-2 rounded-lg">Promoted</label>
                <Card data={props.data}></Card>
            </div>
        )
    }
}


export default Card 