"use client";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail 
} from 'lucide-react';

// Reusable Info Box Component (Pixel-perfect matching WP theme)
const ContactInfoBox = ({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href?: string }) => (
  <div className="bg-[#f5f5f5] p-6 rounded-xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-[#183A1B] text-[#C6DC68] p-4 rounded-[15px_0px_15px_0px] flex items-center justify-center shrink-0 shadow-inner">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">
        {href ? <a href={href} className="hover:text-[#183A1B] transition-colors">{title}</a> : title}
      </h3>
      <p className="text-base font-medium text-gray-600">{desc}</p>
    </div>
  </div>
);

const ContactUsPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[#FDFAEE] text-gray-800 font-sans selection:bg-[#C6DC68] selection:text-[#1A411D] flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Parallax Background) */}
      <section 
        className="relative bg-cover bg-center lg:bg-fixed pt-32 pb-20"
        style={{ backgroundImage: 'url("https://minddhara.com/wp-content/uploads/2025/10/Contact-Us-Background.jpg")' }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-md tracking-wide">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Your thoughts, questions, and feedback mean a lot to us, they help us grow and serve you better. Whether you have a query, suggestion, or story to share, we'd love to hear from you!
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="relative z-20 mt-8 pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column: Contact Information */}
            <div className="w-full lg:w-[45%] flex flex-col gap-6 bg-white p-8 lg:p-10 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <div className="bg-[#183A1B] text-center p-5 rounded-xl mb-4 shadow-md">
                <h2 className="text-2xl font-bold text-white tracking-wide">We are just a click away</h2>
              </div>
              
              <ContactInfoBox 
                icon={<MapPin size={28} strokeWidth={2.5} />} 
                title="Corporate Office" 
                desc="Gurugram" 
              />
              <ContactInfoBox 
                icon={<Phone size={28} strokeWidth={2.5} />} 
                title="Mobile Number" 
                desc="+91-9821113234" 
                href="tel:+919821113234"
              />
              <ContactInfoBox 
                icon={<Mail size={28} strokeWidth={2.5} />} 
                title="Email Address" 
                desc="hello@minddhara.com" 
                href="mailto:hello@minddhara.com"
              />
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-[55%] bg-white p-8 lg:p-10 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <div className="bg-[#183A1B] text-center p-5 rounded-xl mb-8 shadow-md">
                <h2 className="text-2xl font-bold text-white tracking-wide">Co-production Starts Here</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-[#f9f9f9] border border-gray-200 text-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#183A1B] focus:ring-2 focus:ring-[#C6DC68]/30 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full bg-[#f9f9f9] border border-gray-200 text-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#183A1B] focus:ring-2 focus:ring-[#C6DC68]/30 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    required
                    className="w-full bg-[#f9f9f9] border border-gray-200 text-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#183A1B] focus:ring-2 focus:ring-[#C6DC68]/30 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <div className="relative">
                    <select 
                      required
                      defaultValue=""
                      className="w-full bg-[#f9f9f9] border border-gray-200 text-gray-600 p-4 rounded-xl focus:outline-none focus:border-[#183A1B] focus:ring-2 focus:ring-[#C6DC68]/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Looking For</option>
                      <option value="MindDhara Couch">MindDhara Couch</option>
                      <option value="MindDhara Forward">MindDhara Forward</option>
                      <option value="MindDhara Advantix">MindDhara Advantix</option>
                      <option value="Support">Support</option>
                      <option value="Others">Others</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Type Your Message Here!" 
                    required
                    className="w-full bg-[#f9f9f9] border border-gray-200 text-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#183A1B] focus:ring-2 focus:ring-[#C6DC68]/30 transition-all resize-y placeholder:text-gray-400"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#C6DC68] text-[#1A411D] font-bold text-lg py-4 rounded-xl hover:bg-[#1A411D] hover:text-[#C6DC68] transition-colors duration-300 shadow-md tracking-widest uppercase mt-4"
                >
                  ASK A QUESTION
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
