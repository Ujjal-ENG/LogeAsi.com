/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';

function CategoryForm() {
    return (
        <div>
            <form className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Type here Updated Category!!</span>
                </label>
                <input type="text" placeholder="Category Name" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="btn-submit">
                    Update Here
                </button>
            </form>
        </div>
    );
}

export default CategoryForm;
