import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

function CreateCategory() {
    const [categories, setCategories] = useState([]);

    // get all category
    const getAllCategory = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/category/getall-category');
            console.log(res);
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
