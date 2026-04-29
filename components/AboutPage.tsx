"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { id: 1, icon: <Leaf size={24} />, title: 'Entry Points', desc: 'MindDhara brings together students, clinicians, and families to share real experiences that shape better care.', angle: -90, isLight: true },
    { id: 2, icon: <MessageCircle size={24} />, title: 'Transformation & Evolution', desc: 'Everyone evolves here. Students become professionals, clinicians deepen their work, and patients become active partners.', angle: -30 },
    { id: 3, icon: <MapPin size={24} />, title: 'Knowledge & Data Flow', desc: 'Knowledge flows both ways. What happens in therapy informs research, and research improves therapy.', angle: 30 },
    { id: 4, icon: <Rocket size={24} />, title: 'Core Subsystems', desc: 'Three interconnected engines: Forward, Couch, and ATLAS. Together, they connect learning, care, and innovation.', angle: 90, isLight: true },
    { id: 5, icon: <Hourglass size={24} />, title: 'A continuous cycle', desc: 'Growth does not stop. Students become clinicians, clinicians become researchers, and researchers mentor the next generation.', angle: 150 },
    { id: 6, icon: <Tag size={24} />, title: 'Why it matters', desc: 'We are not just helping individuals—we are improving how mental health care works globally for everyone.', angle: 210 },
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
                <img src="/shreeja-sign.png" alt="Signature" className="h-12 invert opacity-90" />
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
              <img src="/shreeja.jpeg" alt="Shreeja Reddy" className="w-64 h-80 object-cover mb-6 shadow-xl rounded-lg" />
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

      {/* Updated Section 3: Regenerative Ecosystem */}
      <section className="py-24 bg-white overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold mb-28 text-gray-900"
          >
            MindDhara's Regenerative Ecosystem
          </motion.h2>

          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] mx-auto border-4 border-[#1A411D]/20 rounded-full flex items-center justify-center">
            <div className="w-[70%] text-center z-10 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-[#1A411D] mb-3">
                    {activeItem.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed italic font-medium">
                    "{activeItem.desc}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-[#1A411D]/10 rounded-full"
            />

            {ecosystemItems.map((item, index) => {
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 250;
              const x = Math.cos((item.angle * Math.PI) / 180) * radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={item.id}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    x,
                    y,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 60,
                      damping: 12,
                      delay: index * 0.15,
                    },
                  }}
                  whileHover={{ scale: 1.15, zIndex: 50 }}
                  className="absolute cursor-pointer"
                  onMouseEnter={() =>
                    setActiveItem({ title: item.title, desc: item.desc })
                  }
                >
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-3 text-center border-4 border-white transition-all duration-500 ${
                      item.isLight
                        ? 'bg-[#FDFAEE] text-[#1A411D]'
                        : 'bg-[#1A411D] text-white'
                    }`}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-1"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase leading-tight tracking-tighter">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
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
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Cultural.png", title: "Cultural", text: "Culturally grounded care that honours South Asian identities shaping mental health approaches that are relevant, respectful, and deeply rooted in lived experiences and community realities." },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Co-production.png", title: "Co-production", text: "Co-creating mental health and brain care with communities ensuring lived experiences shape research, services, and solutions that are meaningful, inclusive, and collaborative." },
              { img: "/img3.png", title: "Evidence & Innovation", text: "Knowledge grows when it’s connected to real life By combining research with lived experience, we create approaches that are thoughtful, adaptable, and meaningful where you are." },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Dignity-.png", title: "Dignity", text: "Every person’s story matters shaping care that respects identity, values lived experience, and centres compassion, choice, and dignity within culturally informed mental health and brain care." },
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center group">
                <img src={val.img} alt={val.title} className="w-48 h-48 rounded-full object-cover mb-6 shadow-xl transition-transform group-hover:scale-105" />
                <h4 className="text-2xl font-semibold mb-3">{val.title}</h4>
                <p className="text-sm text-gray-300 mb-4 px-2">{val.text}</p>
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


    </div>
  );
};

export default AboutPage;