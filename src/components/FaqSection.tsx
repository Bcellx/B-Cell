import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
          PERTANYAAN YANG SERING DIAJUKAN
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          FAQ Seputar Service HP
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Jawaban ringkas dan jelas terkait estimasi waktu, garansi, keamanan data, dan mekanisme antar-jemput.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS_DATA.map((faq) => {
          const isOpen = openFaqId === faq.id;
          const answerId = `${faq.id}-answer`;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'bg-zinc-950 border-blue-500/40 shadow-lg shadow-blue-500/5'
                  : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
              </h3>

              {/* Seluruh jawaban tetap dirender di DOM agar terbaca Googlebot & sesuai FAQPage JSON-LD */}
              <div
                id={answerId}
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
                aria-hidden={!isOpen}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
