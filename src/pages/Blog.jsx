import React, { useState } from 'react';

function Blog() {
  const blogs = [
    {
      title: "Understanding Digital Literacy",
      author: "John Doe",
      date: "May 30, 2024",
      views: 1200,
      image: "/assets/man1.webp",
      content: "In-depth information about digital literacy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      title: "The Future of Digital Marketing",
      author: "Jane Smith",
      date: "June 1, 2024",
      views: 950,
      image: "/assets/man2.webp",
      content: "Exploring the future of digital marketing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      title: "Effective SEO Strategies",
      author: "Michael Brown",
      date: "June 2, 2024",
      views: 1100,
      image: "/assets/man3.webp",
      content: "Effective strategies for SEO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover " />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <div className="flex justify-center items-center space-x-4 text-gray-600 mb-2">
                <span>{blog.views} views</span>
                <span>•</span>
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
              <p className="text-gray-700">{blog.content}</p>
              <button
                className="mt-4 inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md"
                onClick={() => openModal(blog)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
              <div className="flex justify-center items-center space-x-4 text-gray-600 mb-2">
                <span>{selectedBlog.views} views</span>
                <span>•</span>
                <span>{selectedBlog.author}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
              <button
                className="mt-4 inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
