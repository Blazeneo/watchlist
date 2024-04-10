
import styled from 'styled-components';
//import Navbarcss from './navbar.module.css';

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


const CartImg = styled.img`
    height: 40px;
    margin-right: 20px;
    
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${(props)=>(props.color)};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
`;

function Navbar (props){
    

        const {cartCount} = props;
        
        return(
            <>
            <Nav>
            <Title>Title</Title>
            <CartIconContainer>
                <CartImg  alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png"/>
                <CartCount color ='lightblue'>{cartCount}</CartCount>
                {/* < span className={Navbarcss.CartCount}>0</span> */}
            </CartIconContainer>
            </Nav>
            
            </>
        )
    
}
export default Navbar;