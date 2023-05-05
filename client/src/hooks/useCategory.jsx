/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useCategory = () => {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    // get categories
    const getCategories = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/category/getall-category/', {
                headers: {
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                setCategories(data.Categoires);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, [userInfo?.token]);
    return categories;
};

export default useCategory;
