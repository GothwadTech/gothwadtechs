import React, { useState } from 'react';
import {
  Star,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current text-[#0494f4]" />
            <span>Client Reviews & Trust</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Trusted by Visionaries &{' '}
            <span className="text-[#0494f4]">
              Enterprise Leaders
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            Read what startup founders, CTOs, and product directors say about collaborating with Gothwad Tech.
          </p>

          {/* Rating Summary */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex text-[#0494f4]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#0494f4]" />
              ))}
            </div>
            <span className="font-bold text-zinc-900 dark:text-white">4.95 / 5.0</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-500 dark:text-zinc-400">50+ Verified Engagements</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-[#0494f4]/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex text-[#0494f4]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#0494f4]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    Verified Client
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 italic mb-5 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0494f4] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {t.avatarText}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">{t.clientName}</div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {t.role}, <span className="text-zinc-700 dark:text-zinc-300">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <div className="text-[11px] text-[#0494f4] font-medium">{t.projectType}</div>
                  <div className="text-[10px] text-zinc-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0494f4]">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-2.5">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-zinc-900 dark:text-white hover:text-[#0494f4] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#0494f4] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
