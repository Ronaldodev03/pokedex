import Typography from '@mui/material/Typography';
// wft am I doing this this children for?
const CardTitle = ({ children }) => (
  <Typography variant="h5" component="div" textAlign="left" color="primary">
    {children}
  </Typography>
);

export default CardTitle;
