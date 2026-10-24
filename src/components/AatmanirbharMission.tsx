import React from 'react';
import {
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Flag,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AatmanirbharMissionProps {
  onOpenOrderModal: () => void;
}

export const AatmanirbharMission: React.FC<AatmanirbharMissionProps> = ({ onOpenOrderModal }) => {
  const pillars = [
    {
      title: 'Sovereign Digital Privacy',
      description:
        'India’s data must stay protected within Indian borders. We design every system with strict zero-telemetry and sovereign security safeguards.',
      icon: Lock,
      highlight: 'Zero Data Harvesting',
    },
    {
      title: 'Extreme Performance',
      description:
        'We reject slow, bloated legacy codebases. Our engineers optimize at the bytecode and kernel level using compiled Rust, C++, and modern TypeScript.',
      icon: Zap,
      highlight: 'High Speed Standards',
    },
    {
      title: 'Sovereign Product Suite',
      description:
        'From high-speed web browsers like Gothwad Browser to custom cloud consoles and enterprise POS systems, we lead in quality.',
      icon: Cpu,
      highlight: 'Proudly Designed in India',
    },
    {
      title: 'Enterprise Trust & 100% IP',
      description:
        'When clients build apps and websites with Gothwad Tech, they receive 100% source code ownership, clean architecture, and transparent engineering.',
      icon: ShieldCheck,
      highlight: 'Full Source Code Rights',
    },
  ];

  return (
    <section
      id="mission"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
              <Flag className="w-3.5 h-3.5" />
              <span>Sovereign Manifesto</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Building an{' '}
              <span className="text-[#0494f4]">
                Aatmanirbhar Bharat
              </span>{' '}
              in Deep Tech & Software Engineering
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              India has long been known as an IT powerhouse. At <strong className="text-zinc-900 dark:text-white font-semibold">{COMPANY_INFO.name}</strong>, we are creating sovereign, world-class software products engineered for extreme performance.
            </p>

            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Under the leadership of Founder <strong>Pawan Gothwad</strong>, CEO <strong>Nishant</strong>, and CTO <strong>Vishnu Meena</strong>, our 12-member engineering core is proving that Indian software can lead in speed, efficiency, and privacy.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                'Indigenous software kernels running without unnecessary tracking',
                'High-performance architectures designed to work flawlessly on all devices',
                'Transparent corporate portfolio serving startups, SMEs, and enterprise leaders',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0494f4] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenOrderModal}
                className="px-6 py-3 rounded-xl bg-[#0494f4] hover:bg-[#0077cd] text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Partner with Gothwad Tech</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-[#0494f4]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#0494f4]/10 border border-[#0494f4]/20 text-[#0494f4] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="text-[10px] font-bold text-[#0494f4] uppercase tracking-wider mb-1">
                      {pillar.highlight}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-1.5">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
