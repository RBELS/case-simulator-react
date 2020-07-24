import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Switch, Route } from "react-router-dom";
import CaseContent from './components/CaseContent/CaseContent';

function App() {
  return <>
    <Header />

    <Switch>
      <Route exact path="/" render={() => <Content />} />
      <Route path="/case/:caseid?" render={() => <CaseContent />} />
    </Switch>
  </>
}

export default App;
