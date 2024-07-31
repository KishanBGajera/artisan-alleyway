import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <Typography
                className='logo'
                variant="h4"
                component={Link}
                to="/"
                sx={{
                    fontFamily: '"Rampart One", sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    color: 'var(--hover-text-color)',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.3s ease, transform 0.3s ease',

                    '&:hover': {
                        color: 'var(--text-color)',
                    },
                }}
            >
                Artisan Alleyway
            </Typography>
        </div>
    );
};

export default Logo;

