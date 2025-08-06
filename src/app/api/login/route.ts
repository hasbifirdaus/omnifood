import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendlessinit";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Cek apakah email terdaftar
    const user = await Backendless.Data.of("Users").find({
      where: `email = '${email}'`,
    });

    if (!user || user.length === 0) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    // Login dengan Backendless
    const loginUser = await Backendless.UserService.login(
      email,
      password,
      true
    );

    return NextResponse.json({
      message: "Login successful",
      user: {
        email: loginUser.email,
        objectId: loginUser.objectId,
      },
    });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === 3003
    ) {
      return NextResponse.json({ message: "Wrong password" }, { status: 401 });
    }

    return NextResponse.json(
      { message: "Don't have an account yet, please register" },
      { status: 400 }
    );
  }
}
