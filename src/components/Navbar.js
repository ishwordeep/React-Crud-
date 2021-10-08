import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar className="navbar">

                    <Link to='/' style={{ textDecoration: 'none' }}> <Typography className="navLink">Home</Typography></Link>
                    <Link to='/users' style={{ textDecoration: 'none' }}> <Typography className="navLink" >Users</Typography></Link>
                    <Link to='/adduser' style={{ textDecoration: 'none' }}> <Typography className="navLink">Add user</Typography></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar





