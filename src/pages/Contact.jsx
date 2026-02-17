import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+91[-\s]?|0)?[6-9]\d{9}$/; // Indian numbers

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setToast({ type: 'error', text: 'Invalid email format' });
      setLoading(false);
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid Indian phone number.');
      setToast({ type: 'error', text: 'Invalid phone number' });
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/api/contacts/send', formData);

      if (response.status === 201) {
        const serverMsg = response.data && response.data.message ? response.data.message : 'Message sent successfully!';
        const contactId = response.data && response.data.contact && response.data.contact._id ? response.data.contact._id : null;
        setSubmitted(true);
        setToast({ type: 'success', text: serverMsg + (contactId ? ` (id: ${contactId})` : '') });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          subject: '',
          message: ''
        });

        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      // Prefer server-provided error message when available
      const serverError = err && err.response && err.response.data && err.response.data.error ? err.response.data.error : null;
      const toastMsg = serverError || (err && err.message) || 'Failed to submit form';
      setError(serverError || 'Failed to submit form. Please try again.');
      setToast({ type: 'error', text: toastMsg });
      console.error('Contact submit error:', err && (err.response || err.message || err));
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll be in touch soon.
              </div>
            )}

            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
              />
            </div>

            <div className="form-group">
              <label>Service of Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="IT Services">IT Services</option>
                <option value="Healthcare RCM">Healthcare RCM</option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="IT Consulting">Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>info@yotira.com</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91-7893030059</p>
          </div>
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Hyderabad, India</p>
          </div>
          <div className="info-card">
            <h3>🕐 Hours</h3>
            <p>Mon-Fri: 9AM-6PM IST</p>
          </div>
        </div>
      </div>
      {/* Toast container */}
      <div className="toast-container" aria-live="polite">
        {toast && (
          <div className={`toast ${toast.type}`}>
            {toast.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
