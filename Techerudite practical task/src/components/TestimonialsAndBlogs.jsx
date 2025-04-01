import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../services/api";
import SectionBG from "../assets/Rectangletestimonial-bg.png";
// import './TestimonialsAndBlogs.css';

const TestimonialsAndBlogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    const res = await fetchBlogs();
    if (res && res.success) {
      setBlogData(res.data);
    }
  };

  return (
    <div
      className="testimonials-blogs-container"
      style={{ backgroundImage: `url(${SectionBG})` }}
    >
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="quote-icon-left">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor incididunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60" alt="Author" />
                <h4>Josh Brollins</h4>
              </div>
            </div>
            <div className="quote-icon-right">
              <i className="fas fa-quote-right"></i>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial-text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="testimonial-author">
              <span>Josh Ibrahims</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="blogs-view-all">
          <h2>Blogs</h2>
          <a href="/blogs" className="view-all text-primary">
            View All →
          </a>
        </div>
        <div className="blogs">
          {/* Map through only the first 3 blogs */}
          {blogData && blogData.length > 0 ? (
            blogData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="blog-post">
                <img
                  src={blog.image_url}
                  alt={blog.name}
                  height={200}
                  width={332}
                />
                <div className="blog-info">
                  <h3 className="fw-bold ">{blog.name}</h3>
                  <p>
                    {blog.createdAt.split("T")[0]} | {blog.writer_name}
                  </p>
                  <p>{blog.short_description}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              <p>No Blogs Found !</p>
            </>
          )}
        </div>
        {/* Displaying Blogs and "View All" on the same line */}
      </section>
    </div>
  );
};

export default TestimonialsAndBlogs;
