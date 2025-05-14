import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
  // Handle specific dynamic routes by redirecting to the static fallback
  if (pathname.startsWith('/dashboard/community/groups/') && pathname !== '/dashboard/community/groups/') {
    // Extract the ID from the URL
    const id = pathname.split('/').pop();
    
    // Store the ID in a cookie or query parameter to be used by the fallback page
    url.pathname = '/dashboard/community/groups';
    url.searchParams.set('id', id as string);
    
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/community/groups/:id*',
    // Add other dynamic route patterns as needed
  ],
}; 