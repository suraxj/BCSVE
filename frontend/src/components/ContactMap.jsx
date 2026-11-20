import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactMap() {
  const { contact } = siteData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // TODO: Connect to backend API endpoint to handle contact inquiries
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <Section id="contact" background="white">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={contact.tag}
          heading={contact.heading}
          subtitle={contact.subtitle}
        />

        {/* 2-Column Split: Contact Details vs Google Map with Standard 12-Col Ratio (5 / 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Left: Contact Info Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            <Reveal direction="left" duration={600} className="space-y-2.5">
              
              {/* Phone Card */}
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50/70 border border-bcsve-100/90 hover:border-bcsve-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 text-bcsve-800 group-hover:bg-bcsve-800 group-hover:text-gold-300 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <Phone size={15} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Direct Phone Support
                  </h4>
                  <p className="text-sm font-extrabold text-bcsve-950 group-hover:text-bcsve-800 transition-colors pt-0.5">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50/70 border border-bcsve-100/90 hover:border-bcsve-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 text-bcsve-800 group-hover:bg-bcsve-800 group-hover:text-gold-300 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <Mail size={15} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Official Email Desk
                  </h4>
                  <p className="text-sm font-extrabold text-bcsve-950 group-hover:text-bcsve-800 transition-colors pt-0.5">
                    {contact.email}
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50/70 border border-bcsve-100/90 text-left">
                <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 text-bcsve-800 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin size={15} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Coordination Secretariat
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-gray-800 pt-0.5 leading-snug">
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50/70 border border-bcsve-100/90 text-left">
                <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 text-gold-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Clock size={15} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Working Hours
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-gray-800 pt-0.5">
                    {contact.workingHours}
                  </p>
                </div>
              </div>

            </Reveal>

            {/* Quick Enquiry Form on Mobile / Small screens */}
            <div className="block lg:hidden pt-1">
              <div className="p-3.5 rounded-xl bg-cream-100/80 border border-gold-200 shadow-xs">
                <h4 className="text-xs font-bold text-bcsve-950 mb-2">Send Instant Enquiry</h4>
                {formSubmitted ? (
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Enquiry sent! We will call back shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-9 min-h-[36px] px-3 text-xs rounded-lg bg-white border border-bcsve-200 focus:outline-none focus:ring-1 focus:ring-bcsve-800/20"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-9 min-h-[36px] px-3 text-xs rounded-lg bg-white border border-bcsve-200 focus:outline-none focus:ring-1 focus:ring-bcsve-800/20"
                    />
                    <button
                      type="submit"
                      className="w-full h-9 min-h-[36px] rounded-lg bg-bcsve-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Send size={13} />
                      <span>Submit Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Right: Embedded Interactive Map (Span 7) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" duration={600} className="h-full">
              <div className="h-full min-h-[260px] lg:min-h-[300px] rounded-xl overflow-hidden border border-bcsve-200 shadow-xs relative">
                {/* Lazy-loaded Google Map iframe */}
                <iframe
                  title="BCSVE Location Map"
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[260px] lg:min-h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

        </div>

      </Container>
    </Section>
  );
}
