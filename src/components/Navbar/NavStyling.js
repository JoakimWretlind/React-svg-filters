import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    position: fixed;
    background: #111;
    height: 8rem;
    width: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    box-shadow: 0 .4rem .8rem rgba(0,0,0,.2);
`;

export const Bars = styled(FaBars)`
    display: none;
    color: coral;

  @media screen and (max-width: 615px){
    display: block;
    position: absolute;
    top: 1.4rem;
    right: 2rem;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
    &:hover {
        color: lightblue;
    }
  }
`;

export const NavMenu = styled.div`
    height: 100%;
    width: 100%;
    max-width: 715px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  @media screen and (max-width: 615px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
    height: 60%;
    width: 9rem;
    background: #111;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    border: .1rem solid transparent;
    color: coral;
    cursor: pointer;
    box-shadow: 0 -.1rem .2rem rgba(255,255,255,.4);
    transition: .3s;
    &:hover{
      background: #222;
      color: #fff;
      box-shadow: none;
      border: .1rem solid #000;
    }
`;

export const NavP = styled.p`
    font-size: 1.4rem;    
    letter-spacing: .2rem;
`;



