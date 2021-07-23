import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    position: fixed;
    margin-left: 3rem;
    z-index: 1;
    @media screen and (min-width: 767px) {
        margin-left: 8rem;
    }
    @media screen and (min-width: 1200px) {
        margin-left: 38rem;
    }
`;

export const NavIcon = styled(Link)`
    font-size: 3rem;
    margin: 3rem 0;    
    display: flex;
    justify-content: flex-end;   
    color: #f1f1f1;
    @media screen and (min-width: 767px) {
        margin: 5rem 0 0 -1rem;
    }
`

export const NavMenu = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;
    height: 100%;
    width: 100%;
    left: ${({ navbar }) => (navbar ? '0' : '-42rem')};
    max-width: 42rem;
    background: #2B1912;
    display: flex;
    justify-content: center;
    transition: .5s linear;
    z-index: 10;
`;

export const NavbarWrap = styled.div`
    width: 200%;
`

export const NavItem = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0 3rem;
    color: #f1f1f1;
    font-size: 2rem;
    letter-spacing: .1rem;
    &:hover{
        color: lightblue;
    }
    @media screen and (min-width: 767px) {
        margin: 5rem 0 0 5rem;
        letter-spacing: .3rem;
    }
`;