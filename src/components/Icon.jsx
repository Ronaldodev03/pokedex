import Avatar from '@mui/material/Avatar';

const Icon = ({ PictuteDirection }, { ...rest }) => (
  <Avatar
    alt="Profile Picture"
    src={PictuteDirection}
    sx={{ width: 100, height: 100 }}
    {...rest}
  />
);

export default Icon;
