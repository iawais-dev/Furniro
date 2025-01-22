'use client';

import { StaticImageData } from 'next/image';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface LikeItem {
  id: string;
  title: string;
  image: string | StaticImageData;
  new_price: number;
}

interface LikeContextProps {
  likedItems: LikeItem[];
  addLike: (item: LikeItem) => void;
  removeLike: (id: string) => void;
}

const LikeContext = createContext<LikeContextProps | undefined>(undefined);

export const LikeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [likedItems, setLikedItems] = useState<LikeItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false); 
  

  useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      setLikedItems(storedCart ? JSON.parse(storedCart) : []);
      setIsHydrated(true); 
    }, []);
  
    useEffect(() => {
      if (isHydrated) {
        localStorage.setItem('cart', JSON.stringify(likedItems));
      }
    }, [likedItems, isHydrated]);

  const addLike = (item: LikeItem) => {
    setLikedItems((prevItems) => {
      // Check if the item is already liked
      if (prevItems.some((likedItem) => likedItem.id === item.id)) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeLike = (id: string) => {
    setLikedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <LikeContext.Provider value={{ likedItems, addLike, removeLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = (): LikeContextProps => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error('useLike must be used within a LikeProvider');
  }
  return context;
};
