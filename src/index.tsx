import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

async function init() {
  const root = ReactDOM.createRoot(document.getElementById('root')!);

  if (import.meta.env.MODE === 'development') {
    const { default: App } = await import('./App');

    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

init();