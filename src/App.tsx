import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Switch, Route } from 'react-router-dom';
import CaseContent from './components/CaseContent/CaseContent';
import LoginPage from './components/LoginPage/LoginPage';
import { connect } from 'react-redux';
import { RootState } from './store/store';
import { initAppTC } from './store/reducers/appReducer/appActions';
import InitializingComponent from './components/InitializingComponent/InitializingComponent';
import RegisterPage from './components/RegisterPage/RegisterPage';

interface PropsI {
    inited: boolean
    initApp: () => void
}

const App = ({ inited, initApp }: PropsI) => {
    useEffect(() => {
        initApp();
    }, []);

    return inited ?
    <>
        <Header />

        <Switch>
            <Route exact path='/' render={() => <Content />} />
            <Route path='/case/:caseid?' render={() => <CaseContent />} />
            <Route exact path='/login' render={() => <LoginPage />} />
            <Route exact path='/register' render={() => <RegisterPage />} />
        </Switch>
    </>
    :
    <InitializingComponent />
}

const mapStateToProps = (state: RootState) => ({
    inited: state.app.inited
});

export default connect(mapStateToProps, { initApp: initAppTC })(App);
