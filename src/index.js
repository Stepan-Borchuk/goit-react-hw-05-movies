import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import 'modern-normalize';
import './styles.css';

const rootElement = document.getElementById( 'root' );
const root = createRoot( rootElement );

root.render(
    <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
