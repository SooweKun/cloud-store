import { Footer } from '@/src/components/layouts/footer';
import { Header } from '@/src/components/layouts/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-background'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
