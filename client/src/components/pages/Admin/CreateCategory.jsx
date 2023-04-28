/* eslint-disable comma-dangle */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

function CreateCategory() {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    // get all category
    const getAllCategory = async () => {
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
            toast.error('Something went wrong in the getting categories');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    return <div>Kopa Mama</div>;
}

export default CreateCategory;
