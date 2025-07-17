'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] flex items-center justify-center p-6 mt-12">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-[#003049] mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-[#003049]"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-[#003049]"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-[#003049]"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#003049] text-white py-4 px-8 rounded-full font-semibold hover:bg-[#002233] duration-150"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
