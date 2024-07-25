import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './contextAPI/AccountProvider';



function App() {
const clientId= '205688264647-h04om6jv0sj4kdj15g9lc61ctpfuiqjc.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
