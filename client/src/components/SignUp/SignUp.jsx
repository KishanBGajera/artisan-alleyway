import React, { useState } from 'react';
import './SignUp.css';
import { TextField, Box, Slider, Button, Typography, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

function SignUp() {
  const [age, setAge] = useState(30);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }
  const handleFrmSumbit = (event) => {
    event.preventDefault();
    console.log(`username`)
    alert(`username: ${username} 
    Age : ${age}`)
  }

  return (
    <div className="App">
      <div
        className="image-container"
      >
      </div>
      <div
        className="form-container"
      >
        <div
          className="Title"
        >
          <h1>Sign Up</h1>
        </div>
        <form
          id="signup"
          name="frm1"
          onSubmit={handleFrmSumbit}
        >
          <div
            className="username"
          >
            <TextField
              fullWidth
              id="username"
              label="Username"
              margin="normal"
              name="username"
              onChange={handleChangeUsername}
              // onKeyUp={handleKeyUpUsername}
              value={username}
              variant="outlined"
            />
          </div>
          <div
            className="password"
          >
            <TextField
              fullWidth
              id="password"
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChangePassword}
              type="password"
              value={password}
              variant="outlined"
            />
          </div>
          <div className="confirm-password">
            <TextField
              fullWidth
              id="confirm-password"
              label="Confirm Password"
              margin="normal"
              name="confirm-password"
              onChange={handleChangeConfirmPassword}
              type="password"
              value={confirmPassword}
              variant="outlined"
            />
          </div>
          {/* <Box sx={{ width: 300, marginTop: 2 }}>
            <Typography color="primary" gutterBottom>Age</Typography>
            <Slider
              aria-labelledby="age-slider"
              value={age}
              marks
              max={56}
              min={18}
              onChange={handleAgeChange}
              step={1}
              valueLabelDisplay="auto"
            />
          </Box> */}
          <Button
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="submit"
            variant="contained"
            style={{ "background-color": "rgb(165, 105, 71)"}}
          >
            Sign Up
          </Button>
          <Typography
            className='para'
            sx={{ marginTop: 2 }}
            variant="body2"
          >
            Already have an account? <NavLink to='/login'>You can sign in here!</NavLink>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
