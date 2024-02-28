import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';

const CustomTextField = ({
  label,
  name,
  value,
  errMsg,
  onHandleChange,
  icon,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  errMsg: string;
  onHandleChange: any;
  icon: any;
  type?: string;
}) => {
  return (
    <FormControl variant="filled" fullWidth sx={{ marginBottom: '22px' }}>
      <InputLabel htmlFor="filled-adornment-name">{label}</InputLabel>
      <FilledInput
        id="filled-adornment-name"
        type={type}
        name={name}
        onChange={onHandleChange}
        value={value}
        error={errMsg !== ''}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">{icon}</IconButton>
          </InputAdornment>
        }
      />
      {errMsg !== '' && (
        <FormHelperText error id="accountId-error">
          {errMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomTextField;
