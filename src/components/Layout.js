import React, { useState } from 'react';
import { KeywordProvider } from './KeywordContext';
import Header from './headerbar/Header';
import Sidebar from './sidebar/Sidebar';
import HomeScreen from '../screens/HomeScreen';

const Layout = () => {
    const [sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => toggleSidebar(value => !value)
    const [logout, setLogout] = useState(false);
    const logOutHandler = () => { 
        setLogout(true); 
    };
    if (logout) { 
        setLogout(false); 
    };

    return (
        <KeywordProvider>
            <div>
                <Header handleToggleSidebar = {handleToggleSidebar} logOutHandler={logOutHandler} />
                <div className="app__container">
                    <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} logOutHandler={logOutHandler} />
                </div>
                <HomeScreen />
            </div>
        </KeywordProvider>
    );
};

export default Layout;