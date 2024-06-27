import { useSelector} from "react-redux";
import Moviecard from "./moviecard";
import { movieSelector} from "./redux/moviereducer";

function Movielist (){
        const movies   =useSelector(movieSelector);
       

      
    
   
    
     
     
    

       
       
         return  (

            <>
            {movies.map((movie,index)=><Moviecard key={index} data= {movie} />)}
         
        
            </>
        )

    
}

export default Movielist;