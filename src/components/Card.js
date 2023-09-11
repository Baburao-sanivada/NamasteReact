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

export default Card 