/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
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

    // create index
    let count = 1;
    return (
        <div className="w-full mx-auto">
            <h1 className="text-4xl font-bold">Manage Category</h1>
            <div className="overflow-x-auto pt-10">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {categories &&
                            categories.map((el) => (
                                <tr key={el._id}>
                                    <th>{count++}</th>
                                    <td>{el.name}</td>
                                    <td>{el.slug}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CreateCategory;
