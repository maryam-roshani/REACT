import { useState } from 'react';
import SocialAccounts from './components/social accounts/socialAccounts';
import './App.css'
import DangerZone from './components/danger zone/dangerZone';

function App() {
  return (
    <>
      <SocialAccounts />
      <DangerZone />
    </>
  )
}

export default App
