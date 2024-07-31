import React, { useState, useRef } from 'react';
import './Login.css';
import { TextField, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const passwordField = useRef(null);

  const showPassword = () => {
    setPasswordShown(!passwordShown);
    passwordField.current.type = passwordShown ? "password" : "text";
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleFrmSumbit = (event) => {
    event.preventDefault();
    console.log(`username`)
    alert(`WelCome ${username} to Artisan Alleyway`)
  }

  return (
    <div className="App">
      <div className="image-container"></div>
      <div className="form-container">
        <div className="Title">
          <h1>Login </h1>
        </div>
        <form id="login" name="frm1" onSubmit={handleFrmSumbit}>
          <div className="username">
            <TextField
              label="Username"
              id="username"
              name="username"
              onChange={handleChangeUsername}
              value={username}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div className="password">
            <TextField
              label="Password"
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleChangePassword}
              variant="outlined"
              fullWidth
              value={password}
              margin="normal"
              inputRef={passwordField}
            />
            <Box display="flex" alignItems="center">
              <input type="checkbox" onClick={showPassword} />
              <Typography color="primary" variant="body2" sx={{ marginLeft: 1 }}>Show Password</Typography>
            </Box>
          </div>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            fullWidth
            sx={{ marginTop: 2 }}
            style={{ "background-color": "rgb(165, 105, 71)"}}
          >
            Sign In
          </Button>
          <Typography className='para' variant="body2" sx={{ marginTop: 2 }}>
            New user? <NavLink to='/signup'>You can sign up here!</NavLink>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Login;
