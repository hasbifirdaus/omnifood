import { NextResponse } from "next/server";
import Backendless from "@/lib/backendlessinit";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const saved = await Backendless.Data.of("BlogPost").save(body);
    return NextResponse.json(saved);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
  }
}
