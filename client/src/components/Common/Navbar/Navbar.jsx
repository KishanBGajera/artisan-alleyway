import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css'; // Ensure you create this file for additional styles

const Navbar = () => {
  return (
    <AppBar position="static" color="default" className="navbar">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" component={Link} to="/about" className="nav-button">
              About
            </Button>
            <Button color="inherit" component={Link} to="/explore" className="nav-button">
              Explore
            </Button>
            <Button color="inherit" component={Link} to="/locality" className="nav-button">
              Locality
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/login" className="nav-button">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup" className="nav-button">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
