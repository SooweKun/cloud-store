import { Footer } from '@/src/components/layouts/footer';
import { Header } from '@/src/components/layouts/header';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
