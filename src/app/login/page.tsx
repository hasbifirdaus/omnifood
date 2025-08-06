"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import useAuthStore from "@/stores/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/login", values);
        login(response.data.user);
        toast.success("Login success!");
        router.push("/create-blog");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data?.message || "Login failed";
          toast.error(message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    },
  });

  return (
    <div className="bg-[#fae5d3] h-screen  ">
      <section className="md:w-7xl mx-auto py-20 px-6 bg-gray-50 translate-y-2/4">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-3 border rounded-md"
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full p-3 border rounded-md"
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700"
          >
            Login
          </button>

          <div className="text-center">
            <p className="text-sm mt-4">
              Belum punya akun?
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="ml-1 text-orange-600 hover:underline font-medium"
              >
                Register here
              </button>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
