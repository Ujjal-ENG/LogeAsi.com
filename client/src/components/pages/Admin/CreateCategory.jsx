/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../layouts/Spinner';

function CreateCategory() {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setIsLoading] = useState(false);
    // get all category
    const getAllCategory = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/category/getall-category/', {
                headers: {
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                setCategories(data.Categoires);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in the getting categories');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);
    if (loading) {
        return <Spinner />;
    }
    // create index
    let count = 1;
    return (
        <div className="w-full mx-auto">
            <h1 className="text-4xl font-bold">Manage Category</h1>
            <div className="w-full pt-10">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {categories &&
                            categories.map((el) => (
                                <tr key={el._id}>
                                    <th>{count++}</th>
                                    <td>{el.name}</td>
                                    <td className="flex text-3xl items-center gap-3 divide-x-2 div divide-black">
                                        <label htmlFor="my-modal-3" className="btn">
                                            <AiFillEdit className="text-yellow-500 cursor-pointer" />
                                        </label>
                                        <AiFillDelete className="cursor-pointer text-red-500" />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CreateCategory;
