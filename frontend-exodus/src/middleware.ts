import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Rutas protegidas
  const protectedRoutes = ["/dashboard", "/usuarios", "/productos"];

  // Verifica si la ruta actual está protegida
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    // Leer el token desde las cookies
    const token = request.cookies.get("authToken");

    // Si no hay token, redirige al login
    if (!token) {
      
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Permite el acceso si está autenticado o la ruta no está protegida
  return NextResponse.next();
}

// Configura las rutas donde se aplica el middleware
export const config = {
  matcher: ["/dashboard/:path*", "/usuarios/:path*", "/productos/:path*"],
};


