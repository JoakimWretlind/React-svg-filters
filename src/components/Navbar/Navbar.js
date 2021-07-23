import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {
    Nav,
    NavIcon,
    NavMenu,
    NavbarWrap,
    NavItem
} from './NavStyling'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={() => setNavbar(!navbar)} />
                </NavIcon>
            </Nav>
            <NavMenu navbar={navbar}>
                <NavbarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={() => setNavbar(!navbar)} />
                    </NavIcon>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/one">One</NavItem>
                    <NavItem to="/two">Two</NavItem>
                    <NavItem to="/three">Three</NavItem>
                    <NavItem to="/four">Four</NavItem>
                </NavbarWrap>
            </NavMenu>
        </>
    )
}

export default Navbar
