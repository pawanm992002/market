import connectToDB from "@/database";
import userModel from "@/modals/userModel";
import { NextResponse } from "next/server";
import { generateToken } from "@/libs/auth";

export async function POST(req) {
  try {
    await connectToDB();

    const { email, password } = await req.json();
    if (!email || !password) throw new Error("Missing Fields");

    let existingUser = await userModel.findOne({ email });
    if (!existingUser) throw new Error("User not Exists");

    await existingUser.validatePassword(password);

    const authUser = {
      _id: existingUser._id,
      fname: existingUser.fname,
      email: existingUser.email,
      role: existingUser.role,
    };

    const AuthToken = await generateToken(authUser);
    if (!AuthToken) throw new Error("token not generated");

    const response = NextResponse.json({
      status: true,
      msg: "Login successfull",
      data: authUser,
    });
    response.cookies.set({ name: "AuthToken", value: AuthToken });
    return response;
  } catch (err) {
    return NextResponse.json({ status: false, msg: err.message });
  }
}
