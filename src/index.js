import React from 'react';
import { createRoot } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import { UserContextProvider } from './context/UserContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

