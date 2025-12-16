import { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const mockBlogs = [
    {
      _id: '1',
      title: 'Cloud Migration: A Step-by-Step Guide',
      slug: 'cloud-migration-guide',
      excerpt: 'Learn how to successfully migrate your infrastructure to the cloud',
      category: 'IT Services',
      author: 'John Doe',
      createdAt: new Date('2025-12-10'),
      image: '☁️'
    },
    {
      _id: '2',
      title: 'RCM Optimization Best Practices',
      slug: 'rcm-best-practices',
      excerpt: 'Improve your revenue cycle management with these proven strategies',
      category: 'Healthcare',
      author: 'Jane Smith',
      createdAt: new Date('2025-12-08'),
      image: '🏥'
    },
    {
      _id: '3',
      title: 'IoT in Manufacturing: Benefits and Implementation',
      slug: 'iot-manufacturing',
      excerpt: 'Discover how IoT is revolutionizing manufacturing processes',
      category: 'Semiconductors',
      author: 'Mike Johnson',
      createdAt: new Date('2025-12-05'),
      image: '🔌'
    }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : mockBlogs;

  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Blog & Insights</h1>
        <p>Expert insights and industry trends</p>
      </div>

      <div className="blog-container">
        {loading ? (
          <p className="loading">Loading articles...</p>
        ) : (
          <div className="blog-grid">
            {displayBlogs.map(post => (
              <article key={post._id} className="blog-card">
                <div className="blog-image">{post.image || '📰'}</div>
                <div className="blog-content">
                  <span className="category-badge">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="author">By {post.author}</span>
                    <span className="date">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <a href={`#`} className="read-more">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest insights and industry updates delivered to your inbox</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Blog;
