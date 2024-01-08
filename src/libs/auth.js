"use server";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.SECRET_KEY);

export async function verifyJwtToken() {
  try {
    const cookieStore = cookies();

    const token = cookieStore.get("AuthToken");
    if (!token) throw new Error("auth token not found");

    const { payload } = await jwtVerify(token.value, secret);
    return payload;
  } catch (err) {
    return null;
  }
}

export async function generateToken(authUser) {
  try {
    const AuthToken = await new SignJWT(authUser)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(process.env.SESSION_EXPIRY)
      .sign(secret);
    return AuthToken;
  } catch (err) {
    return null;
  }
}
