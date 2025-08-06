"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/useAuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backendless from "@/lib/backendlessinit";

export default function CreateBlogPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [form, setForm] = useState({
    author: "",
    title: "",
    excerpt: "",
    content: "",
    publishDate: "",
    imageFile: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [user, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, imageFile: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.imageFile) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Upload gambar ke Backendless
      const fileUploadResult = await Backendless.Files.upload(
        form.imageFile,
        "/blog-images",
        true
      );

      // 2. Simpan data blog ke tabel "BlogPost"
      const savedBlog = await Backendless.Data.of("BlogPost").save({
        author: form.author,
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        imageUrl: fileUploadResult.fileURL,
        publishDate: new Date(form.publishDate),
      });

      toast.success("Blog created!");
      router.push("/blog");
    } catch (err) {
      console.error("Submit Error:", err);
      toast.error("Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="text-center py-10 text-gray-500 animate-pulse">
        Checking authentication...
      </div>
    );
  }

  return (
    <section className="bg-[#fae5d3] h-screen">
      <div className="p-10 grid ">
        <form
          onSubmit={handleSubmit}
          className="p-10 space-y-4 mx-auto bg-white rounded shadow"
        >
          <h1 className="text-5xl font-bold text-center mb-9">Create Blog</h1>

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            className="border px-3 py-3 w-full text-lg rounded mb-5"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Judul"
            value={form.title}
            onChange={handleChange}
            className="border px-3 py-3 w-full text-lg rounded mb-5"
            required
          />

          <input
            type="text"
            name="excerpt"
            placeholder="Ringkasan (excerpt)"
            value={form.excerpt}
            onChange={handleChange}
            className="border px-3 py-3 w-full text-lg rounded mb-5"
            required
          />

          <textarea
            name="content"
            placeholder="Isi blog"
            value={form.content}
            onChange={handleChange}
            className="border px-3 py-2 w-full text-lg rounded min-h-[120px] mb-5"
            required
          />

          <input
            type="date"
            name="publishDate"
            value={form.publishDate}
            onChange={handleChange}
            className="border px-3 py-3 text-lg w-full rounded mb-5"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border px-3 py-3 w-full rounded text-lg bg-white mb-5"
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-xl font-bold text-white px-4 py-5 rounded-md w-full mb-5"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
