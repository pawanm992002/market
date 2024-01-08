import { NextResponse } from "next/server";
import { verifyJwtToken } from "./libs/auth";

export async function middleware(req) {
  try {
    if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/register") {
      //   if (!isVerified) return;
      //   else console.log("redirect to home");
      return;
    } else {
      let isVerified = await verifyJwtToken();
      if (
        req.nextUrl.pathname === "/api/login" ||
        req.nextUrl.pathname === "/api/register"
      )
        return;

      if (!isVerified) throw new Error("not authenticated");
    }
  } catch (err) {
    return NextResponse.json({ status: false, msg: err.message });
  }
}

// export const config = {
//   matcher: "/:path*",
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
