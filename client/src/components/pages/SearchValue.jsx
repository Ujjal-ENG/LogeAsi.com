/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchProvider';

function SearchValue() {
    const { searchResults } = useContext(SearchContext);
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <h1 className=" font-bold text-3xl text-center w-full">Search Product Found {searchResults.length}</h1>
            <div className="grid grid-cols-4 py-5 gap-6">
                {searchResults &&
                    searchResults.map((product) => {
                        const { _id, photo, price, quantity, name, description } = product;
                        return (
                            <div key={_id} className="bg-white rounded-md overflow-hidden shadow-md w-80 flex flex-col h-full">
                                <img src={photo} alt={name} className="w-full h-64 object-cover" />
                                <div className="p-4 flex-grow">
                                    <h2 className="font-bold text-lg mb-2">{name}</h2>
                                    <p className="text-gray-700 text-base mb-4">{description}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-700 font-bold text-xl">{price} USD</p>
                                        <p className="text-gray-600">{quantity} left in stock</p>
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-between items-center p-2">
                                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full h-full">
                                        Add to Cart
                                    </button>
                                    <button type="button" className="btn hover:bg-black text-white font-bold py-2 px-4 rounded-full h-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
            ;
        </div>
    );
}

export default SearchValue;
