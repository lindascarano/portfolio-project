import { createTheme } from '@mui/material/styles';

// Crea il tema personalizzato
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Font predefinito (Inter per tutti gli altri elementi)
    h1: {
      fontFamily: 'Lora, serif', // Usa Lora per h1
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Lora, serif', // Usa Lora per h2
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Lora, serif', // Usa Lora per h3
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Lora, serif', // Usa Lora per h4
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Lora, serif', // Usa Lora per h5
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Lora, serif', // Usa Lora per h6
      fontWeight: 'bold',
    },
  },
});

export default theme;