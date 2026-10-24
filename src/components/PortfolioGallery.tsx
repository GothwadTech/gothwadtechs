import React, { useState } from 'react';
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  Eye,
  Star,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';

interface PortfolioGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenOrderModal: (service?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectProject,
  onOpenOrderModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Flagship Products', 'Web Platforms', 'Mobile Apps', 'Fintech & Cloud', 'Sovereign Systems'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section
      id="portfolio"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 fill-current text-[#0494f4]" />
            <span>Case Studies & Shipped Tech</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Proven Track Record of{' '}
            <span className="text-[#0494f4]">
              Software Excellence
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            Explore our deployed engineering projects, from the flagship Gothwad Browser to high-throughput financial settlement gateways and telemedicine platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#0494f4] text-white font-semibold shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:border-[#0494f4]/40 transition-colors flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-zinc-950/80 text-white border border-white/10 backdrop-blur-xs">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0494f4] text-white flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 fill-white" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span>{project.client}</span>
                    <span className="font-mono text-[11px]">{project.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-3.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-3.5">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] text-zinc-400">{m.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-[#0494f4] font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#0494f4] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <button
                    onClick={() => onOpenOrderModal(`Similar to ${project.title}`)}
                    className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-[#0494f4] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Build Similar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            Have a custom app or website project in mind?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
            Our 12-member engineering powerhouse handles end-to-end architecture, UI/UX, backend scalability, and production deployment on Cloudflare Pages.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-5 py-2.5 rounded-xl bg-[#0494f4] hover:bg-[#0077cd] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Get Instant Cost & Architecture Proposal</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
