import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import IndexPage from './pages/Index';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <IndexPage />
    </ThemeProvider>
  );
};

export default App;