/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

function UpdateCategoryForm({ datas, updateButtonClick }) {
    const { name, id } = datas;
    const [updateName, setUpdateName] = useState({
        category: ''
    });

    useEffect(() => {
        setUpdateName({
            category: name
        });
    }, [name]);

    const handleChange = (e) => {
        setUpdateName({
            ...updateName,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateButtonClick(updateName.category, id);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-0 top-0">
                        ✕
                    </label>

                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Update Category Name here"
                        className="input input-bordered w-full max-w-xs mt-4"
                        value={updateName.category}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn-submit btn mt-7 w-full">
                        Update Here
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateCategoryForm;
