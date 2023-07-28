import React, { createContext, useState, useContext } from 'react';

const KeywordContext = createContext();

export const KeywordProvider = ({ children }) => {
    const [activeKeyword, setActiveKeyword] = useState('');
    const defaultKeyword = 'All';

    return (
        <KeywordContext.Provider value={{ activeKeyword, setActiveKeyword, defaultKeyword }}>
            {children}
        </KeywordContext.Provider>
    );
};

export const useKeywordContext = () => useContext(KeywordContext);