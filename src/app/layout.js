// Css
import './globals.css';
// Fonts
import { Poppins } from 'next/font/google';
// Components
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
// Toast
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // اختار الأوزان اللي هتستخدمها
  display: 'swap',
  variable: '--font-poppins',
});

// Meta Data
// export const metadata = {
//   title: 'Mountain Matrix',
//   description:
//     'Mountain Matrix: Your Trusted Partner in Lead Generation & Sales Growth',
//   icons: {
//     icon: '/favicon.png',
//   },
//   keywords: ['Mountain Matrix', 'Mountains Solutions'],
//   authors: [
//     { name: 'Mountain Matrix', url: 'https://www.mountain-matrix.com' },
//   ],
//   creator: 'Mountain Matrix',
//   openGraph: {
//     title: 'Mountain Matrix  | https://www.facebook.com/mountainssolutions/',
//     description: '',
//     url: 'https://mountain-matrix.com',
//     siteName: 'Mountain Matrix',

//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     title: 'Mountain Matrix',
//     description:
//       'Mountain Matrix: Your Trusted Partner in Lead Generation & Sales Growth',
//     images: ['/logo.jpg'],
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
