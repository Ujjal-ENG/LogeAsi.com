import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - LogeAsi.com`;
    }, [title]);
};

export default useTitle;
