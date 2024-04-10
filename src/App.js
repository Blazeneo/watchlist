import Movielist from "./movielist";
import React from "react";
import Navbar from "./navbar";
import {movies} from './moviesData';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        movies : movies,
        cartCount:0
    }

}

  addStars=(movie)=>{

    const {movies} =this.state;
    const mid =movies.indexOf(movie);
    if(movies[mid].stars>=5){
        return;
    }
    movies[mid].stars+=0.5

    this.setState(
        movies
    )
    // console.log("this :",this.state);
}


revStars=(movie)=>{
    const {movies} =this.state;
    const mid =movies.indexOf(movie);
    if(movies[mid].stars<=0){
        return;
    }
    movies[mid].stars-=0.5
    this.setState(movies)

}

favorite=(movie)=>{
    const {movies} =this.state;
    const mid =movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav ;
  
    this.setState({movies})

}
handleCart=(movie)=>{
    var {movies,cartCount} =this.state;
const mid =movies.indexOf(movie);

movies[mid].cart=!movies[mid].cart

if(movies[mid].cart){
  cartCount = cartCount + 1
}else{
  cartCount -=1
}



    this.setState({movies ,cartCount})
}

  render(){
    const {cartCount}=this.state;
    return (
    <>
    <Navbar cartCount ={cartCount}/>
    <Movielist movies ={movies} addStars ={this.addStars} revStars ={this.revStars} favorite ={this.favorite} handleCart={this.handleCart}/>
    </>
    )
  }
}

export default App;
