import './variables.css';

import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor(getComputedStyle(document.documentElement).getPropertyValue('--colors-red-300').trim()),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Avatar sx={{ width: 56, height: 56, bgcolor: "var(--colors-red-300)"}}>N</Avatar>
    <Button color="anger" variant="contained">Test</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
