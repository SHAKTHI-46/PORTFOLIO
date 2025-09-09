import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              onClick={handleFormSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:shakthigopikumar@gmail.com" className="text-blue-400 hover:underline">
                    shakthigopikumar@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+916384624976" className="text-blue-400 hover:underline">
                    +91 6384624976
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/shakthi-gopi-kumar-4855422ab/" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/SHAKTHI-46" 
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
