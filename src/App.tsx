import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Switch, Route } from "react-router-dom";
import CaseContent from './components/CaseContent/CaseContent';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return <>
    <Header />

    <Switch>
      <Route exact path="/" render={() => <Content />} />
      <Route path="/case/:caseid?" render={() => <CaseContent />} />
      <Route exact path="/login" render={() => <LoginPage />} />
    </Switch>
  </>
}

export default App;
