import { ThemeProvider } from '@/src/components/providers/theme-provider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background'>
        <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
