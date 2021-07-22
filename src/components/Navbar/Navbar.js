
import { Nav, NavLink, Bars, NavMenu, NavP } from './NavStyling'


const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/">
                        <NavP>Home</NavP>
                    </NavLink>
                    <NavLink to="/one">
                        <NavP>One</NavP>
                    </NavLink>
                    <NavLink to="/two">
                        <NavP>Two</NavP>
                    </NavLink>
                    <NavLink to="/three">
                        <NavP>Three</NavP>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar