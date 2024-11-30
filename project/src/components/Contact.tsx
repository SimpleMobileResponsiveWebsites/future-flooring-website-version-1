import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@futureflooring.ca</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Serving all major cities across Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}