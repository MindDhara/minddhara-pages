"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, ChevronUp, DownloadCloud, PlayCircle, Lock
} from 'lucide-react';

// Custom SVGs for Social Icons
const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.1-3 2.4c1.5.3 3.1 1.3 3.7 2.7-.2-.1-.5-.1-.8-.1-2.9 0-5.3 2.4-5.3 5.3 0 .4 0 .7.1 1.1C12.4 15 8.9 13.1 6.6 10.1c-.4.7-.6 1.5-.6 2.4 0 1.8.9 3.4 2.3 4.3-.8 0-1.6-.2-2.3-.6v.1c0 2.5 1.8 4.6 4.1 5.1-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.1 2.6 3.6 4.9 3.6-1.8 1.4-4.1 2.2-6.5 2.2-.4 0-.8 0-1.3-.1 2.3 1.5 5 2.4 8 2.4 9.6 0 14.8-8 14.8-14.8 0-.2 0-.4 0-.7.9-.8 1.7-1.8 2.4-3z"></path></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

// Reusable Components
const SectionHeading = ({ title, light = false }: { title: string, light?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mb-16"
  >
    <h2 className={`font-serif text-4xl md:text-5xl font-bold inline-block pb-4 border-b-2 ${light ? 'text-white border-[#C6DC68]' : 'text-[#1E4822] border-[#1E4822]'}`}>
      {title}
    </h2>
  </motion.div>
);

const FlipCard = ({ img, title, desc, link }: { img: string, title: string, desc: string, link: string }) => (
  <div className="group w-full h-[450px] [perspective:1000px] cursor-pointer">
    <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
      {/* Front */}
      <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl overflow-hidden border-2 border-gray-100">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
          <span className="text-white font-bold tracking-widest bg-black/50 px-4 py-2 rounded-full text-sm backdrop-blur-sm">HOVER TO FLIP</span>
        </div>
      </div>
      {/* Back */}
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1D2A35] text-white p-8 flex flex-col items-center justify-center rounded-2xl border-b-4 border-[#C6DC68]">
        <h3 className="font-serif text-3xl font-bold mb-4 text-[#C6DC68]">{title}</h3>
        <p className="text-center text-gray-300 leading-relaxed text-sm md:text-base mb-8 line-clamp-6">{desc}</p>
        <a href={link} target="_blank" className="bg-[#1E4822] hover:bg-black text-white px-6 py-3 rounded-lg font-bold transition-colors uppercase tracking-widest text-xs flex items-center gap-2">
          Get Your Copy <DownloadCloud size={16} />
        </a>
      </div>
    </div>
  </div>
);

// Main Page Component
const GuruLibraryPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isMounted) return null;

  return (
    <div className="bg-[#FDFAEE] text-gray-800 font-sans selection:bg-[#C6DC68] selection:text-[#1A411D] flex flex-col min-h-screen">
      
      {/* 1. FREE RESOURCES CAROUSEL */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Free Resources" />
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 hide-scrollbar cursor-grab active:cursor-grabbing px-4">
            {[
              { img: "https://minddhara.com/wp-content/uploads/2025/10/A4-Psychologist-Vocab-.jpg", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/How-To.jpg", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/A.Psychologist.jpg", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2026/01/Talking-Back-to-Your-Inner-Critic-essential-for-Your-Mental-Wellbeing-381-x-538-px.png", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2026/01/Untitled-381-x-538-px.png", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2026/01/Ref.png", link: "#" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[260px] md:min-w-[300px] snap-center bg-[#F5F5F5] p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col group"
              >
                <div className="overflow-hidden rounded-xl mb-4 border border-gray-200">
                  <img src={item.img} alt="Resource" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <a href={item.link} className="mt-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#1E4822] text-[#1E4822] hover:bg-[#1E4822] hover:text-white font-bold py-3 rounded-xl transition-colors uppercase text-xs tracking-widest">
                  Download Now <DownloadCloud size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ADVANCED LEARNING (Parallax Background) */}
      <section 
        className="py-32 bg-cover bg-center lg:bg-fixed relative"
        style={{ backgroundImage: 'url("https://minddhara.com/wp-content/uploads/2025/10/Why-Join-MindDhara.jpg")' }}
      >
        <div className="absolute inset-0 bg-[#1A411D]/85 backdrop-blur-sm"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <SectionHeading title="Advanced Learning" light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "https://minddhara.com/wp-content/uploads/2026/02/1.png", title: "It's Here!", desc: "50 ABCs of Clinical & Research Language: It’s a dictionary of psychology terms in practice.", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Start-From-The-Start.jpg", title: "It's Here!", desc: "Our FREE International Student Checklist Guide is designed to make this transition clear, structured, and stress-free.", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2021/08/Book-Launched.jpg", title: "It's Here!", desc: "Cracking the Psychology Interviews: A Guide I Wish I Had. The ultimate guide for aspiring psychologists.", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/E-guide.jpg", title: "It's Here!", desc: "This guide didn’t start as a product, it began as a conversation to help you navigate through applications.", link: "#" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FlipCard img={card.img} title={card.title} desc={card.desc} link={card.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BROCHURES & GUIDES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading title="Brochures & Guides" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
             {[
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Is-is-a-stroke.jpg", title: "Understanding Stroke", desc: "A comprehensive brochure detailing the early signs, immediate actions, and long-term adjustment for stroke.", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Start-From-The-Start.jpg", title: "Student Checklist", desc: "Our FREE International Student Checklist Guide is designed to make this transition clear, structured, and stress-free.", link: "#" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Brain-Injury.jpg", title: "Understanding TBI", desc: "A detailed guide on Understanding Traumatic Brain Injury (TBI) and pathways for cognitive rehabilitation.", link: "#" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: 'spring' }}
                viewport={{ once: true }}
              >
                <FlipCard img={card.img} title={card.title} desc={card.desc} link={card.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARTICLES (Masonry Style Grid) */}
      <section className="py-24 bg-[#FDFAEE] border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading title="Articles" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://minddhara.com/wp-content/uploads/2025/10/I-tried-my-best-to-fit-but-ended-up-as-a-square-peg-in-a-round-hole.jpg", date: "31 Aug", title: "I tried my best to fit but ended up as a square peg in a round hole" },
              { img: "https://minddhara.com/wp-content/uploads/2025/11/The-Silent-returns-scaled.png", date: "16 Jul", title: "Affordability of Assistant Psychologist (UK landscape)" },
              { img: "https://minddhara.com/wp-content/uploads/2025/11/The-Man-on-the-Inside-A-Quirky-Netflix-Show-That-Had-Us-Crying-Over-Alzheimers-and-Loving-It--scaled.png", date: "08 Jul", title: "The Man on the Inside: A Quirky Netflix Show That Had Me Crying" },
              { img: "https://minddhara.com/wp-content/uploads/2025/11/Affordability-of-Assistant-Psychologist--scaled.png", date: "24 Jun", title: "The Silent Returns" },
              { img: "https://minddhara.com/wp-content/uploads/2025/08/800-Seats-for-40000-Minds-The-Pipeline-in-UK-Psychology.jpg", date: "22 May", title: "800 Seats for 40,000 Minds: The Pipeline in UK Psychology" },
              { img: "https://minddhara.com/wp-content/uploads/2025/11/Understanding-psychological-adjustment-following-a-diagnosis-of-dementia-and-how-to-support-this-adjustment--scaled.png", date: "10 Apr", title: "Understanding psychological adjustment following a diagnosis of Dementia" }
            ].map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden h-56">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1A411D] px-3 py-1 rounded-md font-bold text-sm shadow-sm">
                    {article.date}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#1A411D] transition-colors leading-snug">
                    <a href="#">{article.title}</a>
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENTS & MEDIA CAROUSEL */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Events & Media" />
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 hide-scrollbar cursor-grab active:cursor-grabbing px-4">
            {[
              { img: "https://minddhara.com/wp-content/uploads/2026/01/MindDhara-381-x-538-px.png", btnText: "Watch Now", icon: <PlayCircle size={16}/>, color: "bg-[#1E4822]" },
              { img: "https://minddhara.com/wp-content/uploads/2026/01/jxnakz.png", btnText: "Ended", icon: <Lock size={16}/>, color: "bg-gray-500" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/New-Country-New-Chapter.jpg", btnText: "Ended", icon: <Lock size={16}/>, color: "bg-gray-500" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Hidden-Struggles.jpg", btnText: "Watch Now", icon: <PlayCircle size={16}/>, color: "bg-[#1E4822]" },
              { img: "https://minddhara.com/wp-content/uploads/2025/10/Navigating.jpg", btnText: "Watch Now", icon: <PlayCircle size={16}/>, color: "bg-[#1E4822]" }
            ].map((media, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="min-w-[280px] md:min-w-[320px] snap-center bg-[#F5F5F5] p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col group"
              >
                <div className="overflow-hidden rounded-xl mb-5 border border-gray-200">
                  <img src={media.img} alt="Media" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <a href="#" className={`mt-auto flex items-center justify-center gap-2 text-white ${media.color} hover:bg-black font-bold py-3.5 rounded-xl transition-colors uppercase text-xs tracking-widest`}>
                  {media.btnText} {media.icon}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default GuruLibraryPage;