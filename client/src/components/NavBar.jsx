import {AppBar ,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background:#111111
`;

const Navbar =styled(NavLink)`
    font-size: 20px;
    margin-right:20px;
    color: inherit;
    text-decoration: none;
`;



const NavBar=()=>{
    return (
        <Header position='static'>
            <Toolbar>
                <Navbar to='/'>CRUD App</Navbar>
                <Navbar to='/all'>All Users</Navbar>
                <Navbar to='/add'>Add User</Navbar>
            </Toolbar>
        </Header>
    )
}

export default NavBar;