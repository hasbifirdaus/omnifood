import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filename = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, filename);

  // Simpan file ke folder public/uploads
  await writeFile(filePath, buffer);

  const imageUrl = `/uploads/${filename}`;

  return NextResponse.json({ imageUrl });
}
