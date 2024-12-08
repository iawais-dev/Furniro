import React from 'react';
import time from '@/assets/imgs/time.svg'
import location from '@/assets/imgs/location.svg'
import phone from '@/assets/imgs/phone.svg'
import Image from 'next/image';

interface InputField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const Contact = () => {
  const inputFields: InputField[] = [
    { id: 'name', label: 'Your name', type: 'text', placeholder: 'Abc', required: true },
    { id: 'email', label: 'Email address', type: 'email', placeholder: 'Abc@def.com', required: true },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'This is an optional', required: false },
    { id: 'message', label: 'Message', type: 'textarea', placeholder:"Hi! i'd like to ask about", required: true },
  ];

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-[36px] font-semibold">Get In Touch With Us</h1>
          <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] text-center max-w-[640px] mx-auto mt-2">
            For more information about our product & services, please feel free to drop us an email. 
            Our staff is always there to help you out. Do not hesitate!
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 w-fit mx-auto">
          {/* Left Side: Contact Info */}
          <div className="bg-white p-6 ">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-green-500">
                  {/* Replace this placeholder with an image */}
                  <span className="text-2xl"><Image src={location} alt='location' /></span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-green-500">
                  {/* Replace this placeholder with an image */}
                  <span className="text-2xl"><Image src={phone} alt='phone' /></span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start space-x-4">
                <div className="text-green-500">
                  {/* Replace this placeholder with an image */}
                  <span className="text-2xl"><Image src={time} alt='time' /></span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Working Time</h3>
                  <p className="text-gray-600">Monday–Friday: 9:00–22:00</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00–21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-6 ">
            <form action="#" method="POST" className="space-y-6">
              {inputFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={4}
                      placeholder={field.placeholder || ''}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm border outline-none  py-6 pl-7 sm:text-sm"
                      required={field.required}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder || ''}
                      className="mt-1 block w-full rounded-lg border-gray-300 outline-none shadow-sm border py-6 pl-7 sm:text-sm"
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <div>
              <button type='submit' className="mt-6 py-[10px] px-[40px] lg:py-[25px] lg:px-[72px] bg-[#B88E2F] text-white text-[16px] font-bold transition-all hover:bg-[#a5802a]">
            Submit
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
