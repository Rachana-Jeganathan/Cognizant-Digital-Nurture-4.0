import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div className="details-container">
      <h2 className="details-title">Blog Details</h2>
      <div className="details-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="details-card">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="author-text">by {blog.author}</p>

            <p>
              {blog.content ? blog.content : "This blog post is coming soon..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;