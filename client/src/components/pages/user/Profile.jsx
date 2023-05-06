/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

function Profile() {
    const { userInfo } = useContext(AuthContext);
    const [name, setName] = useState(userInfo.user.name);
    const [email, setEmail] = useState(userInfo.user.email);
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(userInfo.user.phone);
    const [address, setAddress] = useState(userInfo.user.address);
    // const { user } = userInfo;
    // get user Data
    useEffect(() => {});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.patch('http://localhost:8080/api/v1/auth/update-profile', {
                name,
                email,
                password,
                phone,
                address
            });
            if (data.success) {
                toast.success('Data is Updated!!');
                console.log(data);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occur while update the user profile!!');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" className="border-gray-400 border rounded-md px-3 py-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email" className="border-gray-400 border rounded-md px-3 py-2 w-full" disabled value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                        New Password
                    </label>
                    <input type="password" id="password" className="border-gray-400 border rounded-md px-3 py-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                        Enter your PHone
                    </label>
                    <input type="text" id="phone" className="border-gray-400 border rounded-md px-3 py-2 w-full" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                        Enter New Address
                    </label>
                    <input type="text" id="text" className="border-gray-400 border rounded-md px-3 py-2 w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">Save Changes</button>
            </form>
        </div>
    );
}

export default Profile;
