import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Amit's Portfolio",
  description:
    'Professional portfolio showcasing my web development projects and skills',
  icons: {
    icon: './code.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.className}`}>
        <Header />
        <main className='min-h-screen md:mt-8'>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
