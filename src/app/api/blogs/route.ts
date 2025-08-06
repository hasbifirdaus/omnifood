import { NextResponse } from "next/server";
import Backendless from "@/lib/backendlessinit";

// Handle POST (create blog)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, content, author, imageUrl } = body;

    if (!title || !content || !author || !imageUrl) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const savedBlog = await Backendless.Data.of("BlogPost").save(body);

    return NextResponse.json({
      message: "Blog created successfully",
      data: savedBlog,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to save blog",
        detail: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

// ✅ Tambahkan method GET untuk fetch daftar blog
export async function GET() {
  try {
    const blogs = await Backendless.Data.of("BlogPost").find();
    return NextResponse.json({ data: blogs });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
        detail: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
