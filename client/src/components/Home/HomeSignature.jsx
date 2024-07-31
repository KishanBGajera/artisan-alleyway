import React from 'react';

const HomeSignature = () => {
    const styles = {
        width: '100%',
        height: '200px',
        backgroundImage: "url('/home/workspace/my-project/client/public/images/Home/art-1.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
    };

    return (
        <div style={styles}>
            Home
        </div>
    );
}

export default HomeSignature;
