import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="inherit"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        width="500px"
        maxWidth="500px"
      >
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="#303f9f"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          minHeight="168px"
          gap={2}
        >
          <InputIcon sx={{ fontSize: 40 }} />
          <Typography component={Box} variant="h4">
            Register
          </Typography>
        </Box>
        <Box p={2}>
          <Button
            type="button"
            fullWidth
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Don't you have an account? Sign up now!
          </Button>
          <Box>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ marginBottom: '22px' }}
            >
              <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
              <FilledInput
                id="filled-adornment-email"
                type="text"
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              sx={{ marginBottom: '22px' }}
              variant="filled"
              fullWidth
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControlLabel
              sx={{ marginBottom: '22px' }}
              control={<Switch defaultChecked color="secondary" />}
              label="Keep me signed in"
            />
            <Button fullWidth variant="contained" type="button">
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Registration;
