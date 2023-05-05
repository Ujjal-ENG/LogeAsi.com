/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { createContext, useState } from 'react';

import Spinner from '../components/layouts/Spinner';

export const SearchContext = createContext(null);
function SearchProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    if (loading) {
        return <Spinner />;
    }

    const auths = {
        setSearchResults,
        setIsLoading,
        searchResults
    };

    return <SearchContext.Provider value={auths}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
