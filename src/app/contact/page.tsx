'use client';

import Image from 'next/image';
import { useState } from 'react';
import Nav from '../component/nav';
import Footer from '../component/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hasSQLInjectionPattern = (text: string) => {
    const pattern = /(\b(SELECT|UPDATE|DELETE|INSERT|DROP|ALTER|--|\*|;)\b)/i;
    return pattern.test(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trim inputs
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Basic SQL injection prevention (front-end)
    if (
      hasSQLInjectionPattern(trimmedName) ||
      hasSQLInjectionPattern(trimmedEmail) ||
      hasSQLInjectionPattern(trimmedMessage)
    ) {
      alert('🚫 Invalid input detected!');
      return;
    }

    // Simuler l’envoi
    console.log('Sending...', { trimmedName, trimmedEmail, trimmedMessage });
    setMessageSent(true);

    // Reset du formulaire
    setFormData({ name: '', email: '', message: '' });

    // Effacer le message après 4 sec
    setTimeout(() => setMessageSent(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Nav />

      <h1 className="text-4xl font-bold text-center text-green-800 mt-12 mb-8">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-6 py-10">
        {/* Image */}
        <Image
          src="/african-f-removebg-preview.png"
          alt="Nissi Oyere"
          width={280}
          height={280}
          className="shadow-2xl shadow-green-400 rounded-full"
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-blue-200 p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          ></textarea>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ name: '', email: '', message: '' })}
              className="border border-red-300 text-red-400 hover:border-red-500 hover:text-red-600 px-5 py-2 rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>

          {messageSent && (
            <p className="mt-6 text-green-700 text-center font-medium animate-fade-in">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
}
