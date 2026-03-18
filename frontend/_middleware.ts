import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isRegistered = request.cookies.get('reg_complete')?.value === 'true';
  const isLoggedIn = request.cookies.has('auth_token');
  const { pathname } = request.nextUrl;

  // Список публичных путей
  const isAuthPage = pathname === '/registration' || pathname === '/verification' || pathname === '/authorization';
  const isStaticAsset = pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/static');

  if (isStaticAsset) {
    return NextResponse.next();
  }

  if (isRegistered && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isRegistered && !isAuthPage) {
    return NextResponse.redirect(new URL('/registration', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
