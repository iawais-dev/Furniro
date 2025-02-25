'use client';
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  if (!cart) {
    return <p>Loading cart...</p>; // Prevents rendering mismatched content
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items Section */}
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4 text-sm font-semibold bg-[#F9F1E7] py-5 px-5 text-gray-600 border-b">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cart.length === 0 ? (
              <p className="text-center text-lg text-gray-500 py-4">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 gap-4 items-center text-sm text-gray-700 py-4 border-b last:border-none"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-16 object-cover rounded"
                      width={48}
                      height={64}
                    />
                    <span>{item.title}</span>
                  </div>
                  {/* Price */}
                  <span>Rs. {item.new_price.toLocaleString()}</span>
                  {/* Quantity */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    className="w-12 border rounded text-center py-1"
                  />
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span>Rs. {(item.new_price * item.quantity).toLocaleString()}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#B88E2F] pr-5 hover:text-[#5f4b1c]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2v0a2 2 0 002 2h4a2 2 0 002-2v0a2 2 0 00-2-2m-4 0h4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Cart Totals Section */}
          {cart.length > 0 && (
            <div className="w-full bg-[#F9F1E7] px-10 py-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
              </div>
              <Link href="/checkout">
                <button className="w-full mt-8 border-2 border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition">
                  Check Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
