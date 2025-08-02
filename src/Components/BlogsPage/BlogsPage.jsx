import { useEffect, useState } from "react";
import defaultBlogImage from "../../assets/default_blog_img.png"; // <-- your default image

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImageFromDescription = (html) => {
    if (typeof html !== "string") return "";
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  };

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@urnisha09`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="mx-16 mt-8 text-center">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">My Recent Blogs</h1>
        <p className="text-lg text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="mx-16 mt-8">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">My Recent Blogs</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No blogs found. Please check back later.
        </p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={getImageFromDescription(blog.description) || defaultBlogImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded"
                  onError={(e) => {
                    e.target.src = defaultBlogImage;
                  }}
                />
                <h2 className="text-lg font-semibold mt-3">{blog.title}</h2>
                <p
                  className="text-sm text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.description.substring(0, 120).replace(/<[^>]+>/g, "") +
                      "...",
                  }}
                />
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium mt-3 inline-block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Button to Medium profile */}
          <div className="text-center mt-10">
            <a
              href="https://medium.com/@urnisha09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              View More Blogs on Medium
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogsPage;
