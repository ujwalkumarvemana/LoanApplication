import { Box, Button, Paper, Typography } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CustomTextField from '../../components/FormControlls/CustomTextField';
import LockIcon from '@mui/icons-material/Lock';
import { LoadingButton } from '@mui/lab';

const Registration = () => {
  const navigate = useNavigate();
  const formValues = {
    username: '',
    password: '',
    confPassword: '',
    email: '',
  };
  const formErrors = {
    username: '',
    password: '',
    confPassword: '',
    email: '',
  };
  const [formState, setFormState] = useState(formValues);
  const [formMsgs, setFormMsgs] = useState(formErrors);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const cloneFormState: any = { ...formState };
    cloneFormState[name] = value;

    const cloneFormMsgs: any = { ...formMsgs };
    if (value === '') {
      cloneFormMsgs[name] = 'Please enter ' + name;
    } else {
      cloneFormMsgs[name] = '';
    }
    //cloneFormState.username = value
    setFormState(cloneFormState);
    setFormMsgs(cloneFormMsgs);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(() => {
        setLoading(false);
        navigate('/login');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submitEnable = !(
    formState.username !== '' &&
    formState.password !== '' &&
    formState.email !== '' &&
    formState.confPassword !== ''
  );

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
          <Typography variant="h4">Register</Typography>
        </Box>
        <Box p={2}>
          <Button
            type="button"
            fullWidth
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Already have an account? Sign in!
          </Button>
          <Box>
            <form onSubmit={handleSubmit}>
              <CustomTextField
                label="Username"
                name="username"
                value={formState.username}
                errMsg={formMsgs.username}
                onHandleChange={handleChange}
                icon={<PersonIcon />}
              />

              <CustomTextField
                label="Email"
                name="email"
                value={formState.email}
                errMsg={formMsgs.email}
                onHandleChange={handleChange}
                icon={<EmailIcon />}
              />

              <CustomTextField
                label="Password"
                name="password"
                value={formState.password}
                errMsg={formMsgs.password}
                onHandleChange={handleChange}
                icon={<LockIcon />}
                type="password"
              />

              <CustomTextField
                label="Confirm Password"
                name="confPassword"
                value={formState.confPassword}
                errMsg={formMsgs.confPassword}
                onHandleChange={handleChange}
                icon={<LockIcon />}
                type="password"
              />
              <LoadingButton
                loading={loading}
                variant="contained"
                fullWidth
                disabled={submitEnable}
                type="submit"
              >
                Sign Up
              </LoadingButton>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Registration;
