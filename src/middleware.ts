//  /app 구조에서 /src/app 구조로 변경하면서 루트 디렉토리에 있던 이 파일을 src 디렉토리로 옮김.

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// Here you're initializing NextAuth.js with the authConfig object and exporting the auth property. You're also using the matcher option from Middleware to specify that it should run on specific paths.

// The advantage of employing Middleware for this task is that the protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the security and performance of your application.
