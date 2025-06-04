import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const res = await axios.post('http://localhost:8000/api/contacts', form);
      setSuccess(res.data.message);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        const messages = Object.values(err.response.data.errors).flat().join(' ');
        setError(messages);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>

        {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
