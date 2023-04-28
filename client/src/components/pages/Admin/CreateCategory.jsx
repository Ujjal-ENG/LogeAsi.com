/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
import CreateNewCategoryFrom from './CreateNewCategoryFrom';
import UpdateCategoryForm from './UpdateCategoryForm';

function CreateCategory() {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [updateProps, setUpdatePros] = useState({
        name: '',
        id: ''
    });
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

    const handleNewCategory = async (name) => {
        try {
            const { data } = await axios.post(
                'http://localhost:8080/api/v1/category/create-category',
                { name },
                {
                    headers: {
                        Authorization: userInfo?.token
                    }
                }
            );
            toast.success(`${name} Successfully Created!!`);
            getAllCategory();
        } catch (error) {
            console.log(error);
            toast.error('Error occured when Creating Category!!');
        }
    };

    const handleEditClick = (name, id) => {
        setUpdatePros({
            name,
            id
        });
    };
    const updateButtonClick = async (datas, id) => {
        try {
            const { data } = await axios.patch(
                `http://localhost:8080/api/v1/category/update-category/${id}`,
                { name: datas },
                {
                    headers: {
                        Authorization: userInfo?.token
                    }
                }
            );
            toast.success('Successfully Updated!!');
            getAllCategory();
        } catch (error) {
            console.log(error);
            toast.error('Error occured when Updating Category!!');
        }
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/category/delete-category/${id}`, {
                headers: {
                    Authorization: userInfo?.token
                }
            });
            toast.success('Successfully Deleted!!');
            getAllCategory();
        } catch (error) {
            console.log(error);
            toast.error('Error occured when Deleting Category!!');
        }
    };
    return (
        <div className="w-full mx-auto">
            <h1 className="text-4xl font-bold">Manage Category</h1>
            <CreateNewCategoryFrom handleNewCategory={handleNewCategory} />
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
                                        <label htmlFor="my-modal-3" className="">
                                            <AiFillEdit className="text-yellow-500 cursor-pointer" onClick={() => handleEditClick(el.name, el._id)} />
                                        </label>
                                        <AiFillDelete className="cursor-pointer text-red-500" onClick={() => handleDelete(el._id)} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {/* modal popup */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <UpdateCategoryForm datas={updateProps} updateButtonClick={updateButtonClick} />
            </div>
        </div>
    );
}

export default CreateCategory;
