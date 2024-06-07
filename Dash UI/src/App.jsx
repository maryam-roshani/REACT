import { useState } from 'react';
import SocialAccounts from './components/social accounts/socialAccounts';
import './App.css'
import DangerZone from './components/danger zone/dangerZone';
import IntegratedAccounts from './components/integrated Accounts/integratedAccounts';
import BillingAddress from './components/billing Address/billingAddress';
import Plan from './components/plan/plan';
import Questions from './components/asked questions/Question';
import Efficient from './components/efficient/Efficient';

function App() {
  return (
    <>
      <Plan />
      <BillingAddress />
      <IntegratedAccounts />
      <SocialAccounts />
      <DangerZone />
      <Questions />
      <Efficient />
    </>
  )
}

export default App
