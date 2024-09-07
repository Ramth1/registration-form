import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Include your styles
import RegistrationForm from './pages/RegistrationForm';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>
);
