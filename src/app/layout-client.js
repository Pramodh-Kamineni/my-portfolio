'use client';

import './globals.css';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function ClientLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}