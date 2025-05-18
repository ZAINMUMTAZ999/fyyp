import { AppContext } from '@/context/AppNotify';
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const {showToast}=AppContext();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast({type:"SUCCESS",message:"Information Submitted"});
    // TODO: Send data to backend
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions, feedback, or need help with your booking? Reach out to us anytime. We're here to help!
          </p>
          <div className="space-y-4 text-gray-800">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p>123 Main Street, Lahore, Pakistan</p>
            </div>
            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p>+92 300 1234567</p>
            </div>
            <div>
              <h4 className="font-semibold">✉️ Email</h4>
              <p>support@busbooking.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
