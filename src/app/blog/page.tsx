import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog - Omnifood",
  description: "Explore healthy lifestyle blogs by Omnifood AI.",
  keywords: ["Omnifood", "Blog", "Healthy Food", "AI Meals"],
  authors: [{ name: "Omnifood Team", url: "https://omnifood.com" }],
  openGraph: {
    title: "Omnifood Blog",
    description:
      "Learn more about our healthy food subscription powered by AI.",
    url: "https://omnifood.com/blog",
    siteName: "Omnifood",
    locale: "en_US",
    type: "website",
  },
};

// Fungsi fetch data blog dengan validasi lengkap
async function getBlogs() {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status, res.statusText);
      return [];
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      console.error("Expected JSON but got", contentType);
      return [];
    }

    const json = await res.json();
    if (!Array.isArray(json.data)) {
      console.warn("Invalid blog structure:", json);
      return [];
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section className="bg-[#fdf2e9]">
      <div className="container-box mx-auto p-4">
        <div className="  pt-[4.8rem] flex flex-col items-center">
          <span className="subheading">Omnifood Blog</span>
          <h2 className="heading-secondary">
            Insights, tips, and stories to fuel your healthy lifestyle
          </h2>
        </div>

        <button className="border border-gray-100 bg-[#cf711f] py-5 px-20 rounded-md text-white font-semibold text-2xl mb-5 ">
          <a href="/create-blog">Create Blog</a>
        </button>

        {blogs.length === 0 ? (
          <p className="text-gray-600">No blogs available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {blogs.map((blog: any) => {
              const formattedDate = blog.publishDate
                ? new Date(blog.publishDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "Unknown date";

              return (
                <div
                  key={blog.objectId || Math.random()}
                  className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white "
                >
                  <div className="w-full h-[25rem] relative">
                    <Image
                      src={blog.imageUrl || "/placeholder.jpg"}
                      alt={blog.title || "Blog image"}
                      fill
                      className="rounded object-cover "
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={true}
                    />
                  </div>
                  <h2 className="text-3xl font-semibold mt-4">
                    {blog.title || "Untitled"}
                  </h2>
                  <p className="text-gray-600 text-l mb-2">
                    {formattedDate} by {blog.author || "Unknown author"}
                  </p>
                  <p className="text-gray-800 text-xl line-clamp-3">
                    {blog.excerpt || "No excerpt available."}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
