'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.success);
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error);
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {status && <p className="text-center mb-5 text-dark">{status}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 rounded h-40"
          required
        />
        <button type="submit" className="bg-dark text-white p-3 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
