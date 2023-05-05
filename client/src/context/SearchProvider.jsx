/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { createContext, useState } from 'react';

import Spinner from '../components/layouts/Spinner';

export const SearchContext = createContext(null);
function SearchProvider({ children }) {
    const [searchText, setSearchText] = useState('');
    const [loading, setIsLoading] = useState(false);

    if (loading) {
        return <Spinner />;
    }
    const auths = {
        setSearchText,
        setIsLoading
    };
    console.log(searchText);
    return <SearchContext.Provider value={auths}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
