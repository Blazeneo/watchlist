
import Moviecard from "./moviecard";

function Movielist (props){
    
   
    
   

    

        const {movies ,addStars,revStars,favorite,handleCart} =props;
         return  (

            <>
            {movies.map((movie,index)=><Moviecard key={index} data= {movie} addStars ={addStars} revStars ={revStars} favorite ={favorite} handleCart={handleCart}/>)}
         
        
            </>
        )

    
}

export default Movielist;