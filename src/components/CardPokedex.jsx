import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardPokedex({ children }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
