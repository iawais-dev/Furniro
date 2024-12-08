// pages/index.tsx
'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
    const { cart, removeFromCart} = useCart(); // Get cart data from context
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'Sri Lanka',
        streetAddress: '',
        city: '',
        province: 'Western Province',
        zipCode: '',
        phone: '',
        email: '',
        additionalInfo: '',
        paymentMethod: 'bank',
    });
    // Calculate cart subtotal
    const calculateTotal = () => {
        return cart.reduce(
            (total, item) => total + parseFloat(item.new_price) * item.quantity,
            0
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData, cart);
        localStorage.removeItem('cart');
        cart.forEach((item) => removeFromCart(item.id));
    
        alert('Order placed successfully!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 max-w-7xl w-full">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Billing Details */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
                        <div className="flex gap-10">
                            <div className="mb-4">
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Company Name (Optional)</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Country / Region</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            >
                                <option value="Sri Lanka">Sri Lanka</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Street Address</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Town / City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Province</label>
                            <select
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            >
                                <option value="Western Province">Western Province</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">ZIP Code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Additional Information</label>
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='ml-10 '>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Your Order</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    {cart.map((item) => (
                                        <li key={item.id}>
                                            {item.name} x {item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold">Subtotal </h3>
                                    <p>Rs. {calculateTotal().toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className="mb-4">
                            <hr />
                            <div className="mt-2 flex items-center ">  
                                    <div className='h-3 w-3 bg-black rounded-full'></div>
                                    <span className="ml-2">Direct Bank Transfer</span>
                            </div>
                            <div className="mt-2 font-light text-[14px] text-[#9F9F9F]">
                               <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                               <div className="mt-2 flex items-center ">  
                                    <div className='h-3 w-3 border rounded-full'></div>
                                    <span className="ml-2">Direct Bank Transfer</span>
                            </div>
                            <div className="mt-2 flex items-center ">  
                                    <div className='h-3 w-3 border rounded-full'></div>
                                    <span className="ml-2">Cash On Delivery</span>
                            </div>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-medium'>privacy policy.</span></p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-[200px]  py-2 px-4 rounded-2xl border-2 border-black"
                        >
                            Place order
                        </button></div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
