/* eslint-disable react/jsx-indent */
import React from 'react';

function Home() {
    return (
        <div className="grid grid-cols-12 gap-4 px-5 pt-5">
            <div className="col-span-3">
                <h6 className="text-xl font-bold">Filter By Category</h6>
            </div>

            <div className="col-span-9 w-full ">
                <h1 className=" font-bold text-3xl text-center w-full">All Products</h1>
            </div>
        </div>
    );
}

export default Home;
