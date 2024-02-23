import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import App from '@/components/app/app.jsx';
import {defaultTheme} from '@/themes/default.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
