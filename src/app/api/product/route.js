import connectToDB from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    return NextResponse.json({
      status: true,
      msg: "Test data",
    });
  } catch (err) {
    return NextResponse.json({ status: false, msg: err.message });
  }
}
