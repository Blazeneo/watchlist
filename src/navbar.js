
import styled from 'styled-components';
import { NavLink, Outlet } from "react-router-dom";

const Nav=styled.div `
width: 100%;
  height: 3vh;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding:1%
`;
const Title =styled.div`
font-family:'Courier New', Courier, monospace;
color:rgb(40, 83, 61);
font-weight: bolder;
font-size: xx-large;
&:hover{color:white};
`;








function Navbar (){
    

       // const {cartCount} = props;
        
        return(
            <>
            <div>
            <Nav>
            <Title>Watchlist</Title>
            <Title>
            <NavLink isactiveclassname=".active" to="/">
          Home
        </NavLink></Title><Title>
        <NavLink isactiveclassname=".active" to="/addmovie">
          Add Movie
        </NavLink></Title>
           
            </Nav>
                
                <Outlet /></div>
           
            
            </>
        )
    
}
export default Navbar;