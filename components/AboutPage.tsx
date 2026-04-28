"use client";
import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Leaf, MessageCircle, Rocket, 
  Hourglass, Tag, ChevronUp 
} from 'lucide-react';

// Custom SVGs for Social Icons
const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.1-3 2.4c1.5.3 3.1 1.3 3.7 2.7-.2-.1-.5-.1-.8-.1-2.9 0-5.3 2.4-5.3 5.3 0 .4 0 .7.1 1.1C12.4 15 8.9 13.1 6.6 10.1c-.4.7-.6 1.5-.6 2.4 0 1.8.9 3.4 2.3 4.3-.8 0-1.6-.2-2.3-.6v.1c0 2.5 1.8 4.6 4.1 5.1-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.1 2.6 3.6 4.9 3.6-1.8 1.4-4.1 2.2-6.5 2.2-.4 0-.8 0-1.3-.1 2.3 1.5 5 2.4 8 2.4 9.6 0 14.8-8 14.8-14.8 0-.2 0-.4 0-.7.9-.8 1.7-1.8 2.4-3z"></path></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

const AboutPage = () => {
  // Ecosystem Interactive State
  const [activeItem, setActiveItem] = useState({
    title: "Core Subsystems",
    desc: "Three interconnected engines power MindDhara's mission: Forward, our mentoring hub; Couch, our cognitive mental wellbeing arm; and ATLAS, our decolonial research wing. Together, they connect learning, care, and innovation."
  });

  const ecosystemItems = [
    { icon: <Leaf size={20} />, title: "Entry Points", desc: "MindDhara brings together students, clinicians, and families.", angle: -90, isLight: true },
    { icon: <MessageCircle size={20} />, title: "Transformation & Evolution", desc: "Everyone evolves here. Students become professionals.", angle: -30 },
    { icon: <MapPin size={20} />, title: "Knowledge & Data Flow", desc: "Knowledge flows both ways between therapy and research.", angle: 30 },
    { icon: <Rocket size={20} />, title: "Core Subsystems", desc: "Forward, Couch, and ATLAS connect care and innovation.", angle: 90, isLight: true },
    { icon: <Hourglass size={20} />, title: "A continuous cycle", desc: "Growth doesn't stop. Researchers mentor the next generation.", angle: 150 },
    { icon: <Tag size={20} />, title: "Why it matters", desc: "We're improving how mental health care works globally.", angle: 210 },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-800 font-sans selection:bg-[#C6DC68] selection:text-[#1A411D]">
      
      {/* 1. OUR STORY SECTION */}
<section className="w-full bg-white mb-20 mt-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <div className="flex flex-col lg:flex-row items-stretch w-full overflow-hidden rounded-2xl lg:rounded-none">
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <img 
          src="/sprofilehorizontal.jpeg"
          alt="MindDhara Story" 
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[300px] lg:min-h-[600px] object-cover"
        />
      </div>
            {/* Text Column */}
            <div className="w-full lg:w-1/2 bg-[#1A411D] text-white p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Story</h2>
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-gray-100">
                <p className="font-bold text-base sm:text-lg">
                  "MindDhara began from recognising a cultural gap in how mental health is understood."
                </p>
                <p>
                  We were taught how to perform and adapt, but not how to understand the mind doing it all. Struggles with attention, overwhelm, or identity were labelled as personal failings, rather than reflections of deeper cognitive and cultural experiences.
                </p>
                <p>
                  As life became faster and more demanding, our cognitive experiences were misunderstood, with overwhelm, attention, and identity struggles seen as personal failings rather than deeper, contextual realities.
                </p>
                <p>
                  MindDhara was created from this realization: that mental wellbeing cannot be separated from cognition, and cognition cannot be separated from the worlds we are shaped by.
                </p>
                <p>
                  This is a space built with that intention, where training professionals are given the clarity and confidence to question beyond what they've been taught, and where clients remain at the centre of both care and research.
                </p>
                <p>Many of us grew up hearing, <i>"log kya kahengey or what will people think?"</i></p>
                <p>We want to know, <i>"Parr aap kya kehna chaahtey ho or What do you want to express?"</i></p>
                <p className="font-bold text-base sm:text-lg pt-2">
                  Khud ko samajhne ka waqt aa gaya hai.<br/>
                  It's time to meet yourself.
                </p>
              </div>
              <div className="mt-8 flex flex-col items-start gap-2">
                <p className="font-semibold text-sm">Shreeja Reddy (GMBPsS, BCBA, RBT) & Team MindDhara</p>
                <img src="https://minddhara.com/wp-content/uploads/2026/04/shreeja-sign.png" alt="Signature" className="h-12 invert opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & ADVISORY BOARD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900 border-b-2 border-gray-300 inline-block pb-4 px-10">
            Leadership & Advisory Board
          </h2>
          
          {/* Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-20">
            <div className="flex flex-col items-center">
              <img src="https://minddhara.com/wp-content/uploads/2026/04/shreeja-reddy-png-565x800.jpg" alt="Shreeja Reddy" className="w-64 h-80 object-cover mb-6 shadow-xl rounded-lg" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shreeja Reddy</h3>
              <p className="text-gray-800 font-medium text-sm mb-4 max-w-xs">(GMBPsS, BCBA, RBT), Neuropsychology Practitioner, Researcher Founder, Director</p>
              <p className="text-gray-500 text-sm mb-4 max-w-sm">Neuropsychology practitioner and founder building MindDhara...</p>
              <button className="text-gray-400 font-medium text-xs tracking-widest hover:text-[#1A411D] transition-colors uppercase">READ MORE</button>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="https://minddhara.com/wp-content/uploads/2026/04/shreeman-reddy.jpg" alt="Shreeman Reddy" className="w-64 h-80 object-cover mb-6 shadow-xl rounded-lg" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shreeman Reddy</h3>
              <p className="text-gray-800 font-medium text-sm mb-4 max-w-xs">Co-Director | Computer Science Postgraduate</p>
              <p className="text-gray-500 text-sm mb-4 max-w-sm">Computer Science postgraduate and Co-Director at MindDhara...</p>
              <button className="text-gray-400 font-medium text-xs tracking-widest hover:text-[#1A411D] transition-colors uppercase">READ MORE</button>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <img src="https://minddhara.com/wp-content/uploads/2025/10/Dr.-Kunal-Bahrani.png" alt="Dr. Kunal Bahrani" className="w-40 h-40 rounded-full object-cover mb-6 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Kunal Bahrani</h3>
              <p className="text-gray-800 font-medium text-xs mb-3 max-w-[250px]">MBBS, MD, DM (AIIMS), FEBN, MRCP (UK), FRCP (Glasgow), FRCP (London)</p>
              <p className="text-gray-500 text-xs mb-4 max-w-xs">Neurologist and clinical leader advancing comprehensive brain care...</p>
              <button className="text-gray-400 font-medium text-[10px] tracking-widest hover:text-[#1A411D] transition-colors uppercase">READ MORE</button>
            </div>

            <div className="flex flex-col items-center">
              <img src="https://minddhara.com/wp-content/uploads/2025/12/gh.png" alt="Mr. Alim Tunkara" className="w-40 h-40 rounded-full object-cover mb-6 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Alim Tunkara</h3>
              <p className="text-gray-800 font-medium text-xs mb-3 max-w-[250px]">GMBPsS, Neuropsychology Practitioner, Researcher Founder, Director</p>
              <p className="text-gray-500 text-xs mb-4 max-w-xs">Neuropsychology practitioner and director advancing person-centred neurobehavioral care...</p>
              <button className="text-gray-400 font-medium text-[10px] tracking-widest hover:text-[#1A411D] transition-colors uppercase">READ MORE</button>
            </div>

            <div className="flex flex-col items-center">
              <img src="https://minddhara.com/wp-content/uploads/2025/12/Untitled-200-x-200-px.png" alt="Saira Mirza" className="w-40 h-40 rounded-full object-cover mb-6 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saira Mirza</h3>
              <p className="text-gray-800 font-medium text-xs mb-3 max-w-[250px]">PhD Researcher, author in Psychology at Leeds Trinity University, England, UK.</p>
              <p className="text-gray-500 text-xs mb-4 max-w-xs">Cognitive researcher exploring culturally grounded psychology...</p>
              <button className="text-gray-400 font-medium text-[10px] tracking-widest hover:text-[#1A411D] transition-colors uppercase">READ MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REGENERATIVE ECOSYSTEM (INTERACTIVE CIRCLE) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-28 text-gray-900">
            MindDhara' s Regenerative Ecosystem
          </h2>
          
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] mx-auto border-4 border-[#1A411D] rounded-full flex items-center justify-center mb-16">
            
            {/* Center Dynamic Text */}
            <div className="w-[75%] text-center z-10">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{activeItem.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {activeItem.desc}
              </p>
            </div>

            {/* Orbiting Bubbles */}
            {ecosystemItems.map((item, index) => {
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 225;
              const x = Math.cos((item.angle * Math.PI) / 180) * radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-transform duration-300 hover:scale-105 z-20"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => setActiveItem({ title: item.title, desc: item.desc })}
                >
                  <div className={`
                    w-24 h-24 md:w-[110px] md:h-[110px] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-2 text-center border-[3px] border-white transition-all
                    ${item.isLight ? 'bg-[#FDFAEE] text-[#1A411D]' : 'bg-[#1A411D] text-white hover:bg-[#255a29]'}
                  `}>
                    <div className="mb-1 opacity-90">{item.icon}</div>
                    <span className="text-[10px] md:text-[11px] font-semibold leading-tight px-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VISION, MISSION, VALUES */}
      <section className="bg-[#1A411D] text-white py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Our What, Why & How</h2>
          <h5 className="text-[#C6DC68] font-medium tracking-widest uppercase mb-16">Vision • Mission • Values</h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Why we exist</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">To redefine brain health and mind care through innovation grounded in South Asian identity, lived experience, and research, led by a team trained at leading institutions worldwide.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">What we do</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">We build inclusive systems that merge real-world lived experience with data, research, and clinical expertise to improve mental health and brain wellness.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">How we do it</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">By blending neuropsychology, psychiatry, and neuroscience, delivering care and education that are evidence-based, collaborative, and culturally informed.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Cultural.png", title: "Cultural", text: "Culturally grounded care that honours South Asian identities..." },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Co-production.png", title: "Co-production", text: "Co-creating mental health and brain care with communities..." },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Evidence-Innovation.png", title: "Evidence & Innovation", text: "Knowledge grows when it's connected to real life..." },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Dignity-.png", title: "Dignity", text: "Every person's story matters shaping care that respects identity..." },
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center group">
                <img src={val.img} alt={val.title} className="w-48 h-48 rounded-full object-cover mb-6 shadow-xl transition-transform group-hover:scale-105" />
                <h4 className="text-2xl font-semibold mb-3">{val.title}</h4>
                <p className="text-sm text-gray-300 mb-4 px-2">{val.text}</p>
                <button className="text-gray-400 font-medium text-[11px] tracking-widest hover:text-[#C6DC68] transition-colors uppercase">READ MORE</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL SERVE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Where Do We Serve?</h2>
          <p className="text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            We serve globally through cultural understanding, recognising how people experience life across the world.
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://minddhara.com/wp-content/uploads/2025/10/Global-Serve-1536x760.png" 
              alt="Global Service Map" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 6. OUR VALUES BANNER */}
      <section className="pt-16 pb-16 bg-[#FDFAEE] text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
        <p className="text-xl font-bold text-gray-800 tracking-wide">
          Cultural &nbsp;&middot;&nbsp; Co-Production &nbsp;&middot;&nbsp; Dignity &nbsp;&middot;&nbsp; Evidence & Innovation
        </p>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#1A411D] relative pt-12 pb-8">
        <div className="container mx-auto px-6 lg:px-12 relative">
          
          {/* Newsletter & Socials Banner */}
          <div className="bg-[#FDFAEE] rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-w-6xl mx-auto relative">
            <div className="w-full lg:w-[40%]">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
              <div className="flex gap-4">
                <a href="#" className="bg-[#3b5998] text-white p-3 rounded-full hover:opacity-80 transition"><FacebookIcon /></a>
                <a href="#" className="bg-[#262626] text-white p-3 rounded-full hover:opacity-80 transition"><InstagramIcon /></a>
                <a href="#" className="bg-black text-white p-3 rounded-full hover:opacity-80 transition"><TwitterIcon /></a>
                <a href="#" className="bg-[#0077b5] text-white p-3 rounded-full hover:opacity-80 transition"><LinkedinIcon /></a>
                <a href="#" className="bg-[#cd201f] text-white p-3 rounded-full hover:opacity-80 transition"><YoutubeIcon /></a>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up For Our Newsletter</h2>
              <form className="flex w-full shadow-sm rounded-md overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:bg-gray-50 text-gray-700"
                />
                <button type="submit" className="bg-[#2E6F34] text-white px-8 py-4 font-bold hover:bg-[#1A411D] transition flex-shrink-0 tracking-wide text-sm">
                  SUBSCRIBE US
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white max-w-6xl mx-auto mt-20 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-8">Quick Links</h3>
              <ul className="space-y-4 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Guru Library</a></li>
                <li><a href="#" className="hover:text-white transition">Build With Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-medium mb-8">Our Ecosystem</h3>
              <ul className="space-y-4 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white transition">MindDhara Forward</a></li>
                <li><a href="#" className="hover:text-white transition">MindDhara Couch</a></li>
                <li><a href="#" className="hover:text-white transition">MindDhara ATLAS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-medium mb-8">Information</h3>
              <ul className="space-y-4 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Term and Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Refund and Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping and Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-medium mb-8">Contact Information</h3>
              <div className="space-y-6 text-gray-200 text-sm">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Office Address</h4>
                    <p>Gurugram</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Mobile Number</h4>
                    <p>+91-9821113234</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Email Address</h4>
                    <p>hello@minddhara.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 max-w-6xl mx-auto">
            <p>&copy; 2026 MindDhara Pvt Ltd | All Rights Reserved</p>
            <div className="mt-4 md:mt-0 flex gap-2">
              <img src="https://royalblue-seahorse-189824.hostingersite.com/wp-content/themes/woodmart/images/payments.png" alt="Payments" className="h-6 opacity-80" />
            </div>
          </div>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="absolute right-6 bottom-6 bg-[#FDFAEE] text-black p-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>

        </div>
      </footer>

    </div>
  );
};

export default AboutPage;