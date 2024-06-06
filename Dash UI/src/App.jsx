import { useState } from 'react';
import SocialAccounts from './components/social accounts/socialAccounts';
import './App.css'
import DangerZone from './components/danger zone/dangerZone';
import IntegratedAccounts from './components/integrated Accounts/integratedAccounts';
import BillingAddress from './components/billing Address/billingAddress';
import Plan from './components/plan/plan';
import Questions from './components/asked questions/Question';

function App() {
  return (
    <>
      <Plan />
      <BillingAddress />
      <IntegratedAccounts />
      <SocialAccounts />
      <DangerZone />
      <Questions />
    </>
  )
}

export default App
