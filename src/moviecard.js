


function Moviecard (props){
   
    

    
        const {title,plot,price,rating,stars,fav,cart,poster} =props.data;
        const {addStars,data,favorite,revStars,handleCart} =props;
       
        return  (

            <>
            
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster}/>
                    </div>
                    <div className="right">
                    <div className="title">{title} </div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price} </div>
                    <div className="footer">
                    <div className="rating">{rating} </div>
                    <div className="star-dis">
                        <img alt="decreese" className="str-btn" onClick={()=>{revStars(data)}} src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                        <img alt="stars" className="stars" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"/>
                        <img alt="plus" className="str-btn" onClick={()=>{addStars(data)}} src="https://cdn-icons-png.flaticon.com/128/32/32563.png"/>
                        <span>{stars}</span>
                         </div>
                    <button className={!fav?"favourite-btn":"unfavourite-btn"} onClick={()=>{favorite(data)}}>{!fav?"Favourite":"Unfavourite"}</button>
                       <button className={!cart?"cart-btn":"uncart-btn"} onClick={()=>{handleCart(data)}}>{!cart?"Add to cart":"Remove from cart"}</button>  </div>
                    </div>
                </div>

            </div>
            
            </>
        )

    
}

export default Moviecard;