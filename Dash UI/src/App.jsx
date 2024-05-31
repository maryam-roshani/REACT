import { useState } from 'react';
import SocialAccounts from './components/social accounts/socialAccounts';
import './App.css'
import DangerZone from './components/danger zone/dangerZone';
import IntegratedAccounts from './components/integrated Accounts/integratedAccounts';

function App() {
  return (
    <>
      <IntegratedAccounts />
      <SocialAccounts />
      <DangerZone />
    </>
  )
}

export default App
