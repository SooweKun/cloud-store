import { TanstackProvider } from '@src/components/providers/tanstack-provider';
import { ThemeProvider } from '@src/components/providers/theme-provider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background'>
        <TanstackProvider>
          {/* <FpjsProvider
            loadOptions={{
              apiKey: '5gYmTSefHz7YNrsC3aWN',
              region: 'eu',
            }}> */}
          <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
            {children}
          </ThemeProvider>
          {/* </FpjsProvider> */}
        </TanstackProvider>
      </body>
    </html>
  );
}
