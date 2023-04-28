/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

function CreateNewCategoryFrom({ handleNewCategory }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewCategory(name);
    };
    return (
        <div className="py-5">
            <form onSubmit={handleSubmit}>
                <label className="label">
                    <span className="label-text">New Category Name..</span>
                </label>
                <input type="text" id="name" value={name} onChange={(e) => setName((ps) => e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="btn mt-5 w-full max-w-xs">
                    Create Category
                </button>
            </form>
        </div>
    );
}

export default CreateNewCategoryFrom;
