import Typography from '@mui/material/Typography';
// wft am I doing this this children?
const CardTitle = ({ children }) => (
  <Typography variant="h5" component="div">
    {children}
  </Typography>
);

export default CardTitle;
