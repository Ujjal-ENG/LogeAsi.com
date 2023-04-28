/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';

function CreateNewCategoryFrom() {
    return (
        <div className="py-5">
            <form action="">
                <label className="label">
                    <span className="label-text">New Category Name..</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="btn mt-5 w-full max-w-xs">
                    Create Category
                </button>
            </form>
        </div>
    );
}

export default CreateNewCategoryFrom;
