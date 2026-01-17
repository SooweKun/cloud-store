import { Footer } from '@/src/components/layouts/footer';
import { Header } from '@/src/components/layouts/header';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
