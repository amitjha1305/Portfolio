import { Manrope, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-manrope)]`}>
        <Header />
        <main className='min-h-screen md:mt-8'>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
