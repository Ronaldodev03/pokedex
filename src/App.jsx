import Box from '@mui/material/Box';
import Button from './components/Button';
import CardTitle from './components/CardTitle';
import Icon from './components/Icon';
import './App.css';
import CardPokedex from './components/CardPokedex';
import CardDescription from './components/CardDescription';

function App() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <CardPokedex>
        <CardTitle>Pikachu</CardTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <Icon pictureUrl="/src/pics/images.png" altText="Profile Picture" />
        </Box>
        <CardDescription>
          {' '}
          Hi, this is my powerfull pokemon, its name is Pemon. Would you like to
          know more?
        </CardDescription>
        <Box
          sx={{
            marginTop: 4,
          }}
        >
          <Button>Ver mas</Button>
        </Box>
      </CardPokedex>
      <CardPokedex>
        <CardTitle>Pikachu</CardTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <Icon pictureUrl="/src/pics/images.png" altText="Profile Picture" />
        </Box>
        <CardDescription>
          {' '}
          Hi, this is my powerfull pokemon, its name is Pemon. Would you like to
          know more?
        </CardDescription>
        <Box
          sx={{
            marginTop: 4,
          }}
        >
          <Button>Ver mas</Button>
        </Box>
      </CardPokedex>
      <CardPokedex>
        <CardTitle>Pikachu</CardTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <Icon pictureUrl="/src/pics/images.png" altText="Profile Picture" />
        </Box>
        <CardDescription>
          {' '}
          Hi, this is my powerfull pokemon, its name is Pemon. Would you like to
          know more?
        </CardDescription>
        <Box
          sx={{
            marginTop: 4,
          }}
        >
          <Button>Ver mas</Button>
        </Box>
      </CardPokedex>
    </Box>
  );
}

export default App;
