import React, { useState } from 'react';
import {
  Users,
  Linkedin,
  Github,
  Sparkles,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/companyData';

export const LeadershipSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<'All' | 'Executive Leadership' | 'Core Engineering & Deep Tech'>('All');

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (selectedTier === 'All') return true;
    return m.tier === selectedTier;
  });

  const executiveCount = TEAM_MEMBERS.filter((m) => m.tier === 'Executive Leadership').length;
  const engineeringCount = TEAM_MEMBERS.filter((m) => m.tier === 'Core Engineering & Deep Tech').length;

  return (
    <section
      id="leadership"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 fill-current text-[#0494f4]" />
            <span>The 12 Minds of Gothwad Tech</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Leadership & Dedicated{' '}
            <span className="text-[#0494f4]">
              Engineering Powerhouse
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            A cohesive team of 12 innovators pushing the boundaries of sovereign software, led by Founder Pawan Gothwad, CEO Nishant, and CTO Vishnu Meena.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedTier('All')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedTier === 'All'
                ? 'bg-[#0494f4] text-white font-semibold shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <span>All 12 Members</span>
            <span className="px-1.5 py-0.2 bg-white/20 dark:bg-black/20 text-white rounded text-xs font-mono font-bold">12</span>
          </button>

          <button
            onClick={() => setSelectedTier('Executive Leadership')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedTier === 'Executive Leadership'
                ? 'bg-[#0494f4] text-white font-semibold shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <span>Executive Leadership</span>
            <span className="px-1.5 py-0.2 bg-white/20 dark:bg-black/20 text-white rounded text-xs font-mono font-bold">{executiveCount}</span>
          </button>

          <button
            onClick={() => setSelectedTier('Core Engineering & Deep Tech')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedTier === 'Core Engineering & Deep Tech'
                ? 'bg-[#0494f4] text-white font-semibold shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <span>8 Software Experts</span>
            <span className="px-1.5 py-0.2 bg-white/20 dark:bg-black/20 text-white rounded text-xs font-mono font-bold">{engineeringCount}</span>
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMembers.map((member) => {
            const isFounder = member.id === 'pawan-gothwad';

            return (
              <div
                key={member.id}
                className={`p-5 rounded-2xl bg-white dark:bg-zinc-900 border transition-colors flex flex-col justify-between group shadow-xs ${
                  isFounder
                    ? 'border-[#0494f4]/60 dark:border-[#0494f4]/50'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-[#0494f4]/40'
                }`}
              >
                <div>
                  {/* Top Avatar & Role Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        {member.avatarUrl ? (
                          <img
                            src={member.avatarUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center font-bold text-base text-white bg-gradient-to-br ${member.accentGradient}`}>
                            {member.initials}
                          </div>
                        )}
                      </div>
                      {isFounder && (
                        <div className="absolute -bottom-1 -right-1 bg-[#0494f4] text-white p-1 rounded-full shadow-xs">
                          <Sparkles className="w-3 h-3 fill-white" />
                        </div>
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        member.tier === 'Executive Leadership'
                          ? 'bg-[#0494f4]/15 text-[#0494f4] border border-[#0494f4]/30'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'
                      }`}
                    >
                      {member.tier === 'Executive Leadership' ? 'Executive' : 'Software Expert'}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-0.5">
                    {member.name}
                  </h3>

                  <div className="text-xs font-semibold text-[#0494f4] mb-1.5">
                    {member.role}
                  </div>

                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-2.5 bg-zinc-50 dark:bg-zinc-950 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    {member.titleBadge}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3.5 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Key Skills & Footnote */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-3.5">
                    {member.keySkills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 bg-zinc-50 dark:bg-zinc-950 rounded text-[10px] text-zinc-600 dark:text-zinc-400 font-mono border border-zinc-200 dark:border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{member.experience}</span>
                    <div className="flex items-center gap-1.5">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-1 text-zinc-400 hover:text-[#0494f4] transition-colors"
                          title={`Email ${member.name}: ${member.email}`}
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-zinc-400 hover:text-[#0494f4] transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Commitment Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0494f4] text-white flex items-center justify-center font-bold text-lg shrink-0">
              12
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">Direct Access to Senior Software Engineers</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                When you collaborate with Gothwad Tech, you interface directly with our dedicated architects and core developers.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              100% In-House Team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
