// src/app/register/page.tsx
"use client";

import { useState } from "react";
import Backendless from "@/lib/backendlessinit";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await Backendless.UserService.register({
        email,
        password,
      });

      toast.success("Registrasi berhasil!");
      router.push("/login");
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Failed to register";
      toast.error(errMsg);
    }
  };

  return (
    <section className="bg-[#fae5d3] h-screen">
      <div className="md:w-7xl mx-auto py-20 px-6 bg-gray-50 translate-y-2/4 rounded-xl">
        <form onSubmit={handleRegister} className="space-y-6">
          <h1 className="text-5xl font-bold mb-10 text-orange-600 ">
            Register
          </h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block text-l font-bold w-full p-3 mb-5 border rounded-md "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block text-l font-bold w-full p-3 mb-[1rem] border rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-l px-20 py-8 block w-full rounded-md cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
