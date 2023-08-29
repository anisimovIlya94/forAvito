import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
// import reportWebVitals from './reportWebVitals';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
    <StoreProvider>
        <App />
      </StoreProvider>
      </BrowserRouter>
      </ErrorBoundary>
  // </React.StrictMode>
);
// reportWebVitals();
