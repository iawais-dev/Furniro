// app/layout.tsx
import { CartProvider } from '@/contexts/CartContext';
import { LikeProvider } from '@/contexts/LikeContext'; // Import the LikeProvider
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <LikeProvider> 
        <html lang="en">
          <head />
          <body className={`${poppins.variable} antialiased`}>
            {children}
          </body>
        </html>
      </LikeProvider>
    </CartProvider>
  );
}
