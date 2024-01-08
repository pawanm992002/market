import connectToDB from "@/database";
import userModel from "@/modals/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const { fname, email, password, role } = await req.json();
    if (!fname || !email || !password || !role)
      throw new Error("Missing Fields");

    let isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) throw new Error("Email already in use");

    let user = new userModel({
      fname: fname,
      email: email,
      password: password,
      role: role,
    });

    const registeredUser = await user.save();
    if (!registeredUser) throw new Error("Something went wrong");

    return NextResponse.json({ status: true, msg: "Registration successfull" });
  } catch (err) {
    return NextResponse.json({ status: false, msg: err.message });
  }
}
