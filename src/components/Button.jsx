import MuButton from '@mui/material/Button';
// wft am I doing this this children?
const Button = ({ children, ...rest }) => (
  <MuButton variant="outlined" {...rest}>
    {children}
  </MuButton>
);

export default Button;
