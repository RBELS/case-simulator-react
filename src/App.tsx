import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Routes, Route } from 'react-router-dom';
import CaseContent from './components/CaseContent/CaseContent';
import LoginPage from './components/LoginPage/LoginPage';
import { connect } from 'react-redux';
import { RootState } from './store/store';
import { initAppTC } from './store/reducers/appReducer/appActions';
import InitializingComponent from './components/InitializingComponent/InitializingComponent';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';

interface PropsI {
    inited: boolean
    initApp: () => void
}

const App = ({ inited, initApp }: PropsI) => {
    useEffect(() => {
        initApp();
    });

    return inited ?
    <>
        <Header />

        <Routes>
            <Route path='/' element={<Content />} />
            <Route  path='/case/:caseid'  element={<CaseContent />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile/:username' element={<Profile />} />
        </Routes>
    </>
    :
    <InitializingComponent />
}

const mapStateToProps = (state: RootState) => ({
    inited: state.app.inited
});

export default connect(mapStateToProps, { initApp: initAppTC })(App);
