import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  Bot,
  Shield,
  Palette,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Search,
} from 'lucide-react';
import { SERVICES } from '../data/companyData';

interface ServicesSectionProps {
  onOpenOrderModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Sovereign Tech', 'AI & Automation', 'Cloud & Security', 'UI/UX Design'];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#0494f4]" />
            <span>Engineering Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Software Services &{' '}
            <span className="text-[#0494f4]">
              Custom Digital Systems
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            From high-converting web applications and native mobile apps to AI pipelines and custom sovereign browsers, we build production software that scales.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0494f4] text-white font-semibold shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4] transition-colors"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-[#0494f4]/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0494f4]/10 border border-[#0494f4]/20 flex items-center justify-center text-[#0494f4]">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.popular && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0494f4]/15 text-[#0494f4] border border-[#0494f4]/30">
                      Popular
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-semibold text-[#0494f4] uppercase tracking-wider mb-1">
                  {service.category}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{service.estimatedTimeline}</span>
                  </div>
                  <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    {service.startingPriceInr}
                  </div>
                </div>

                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-[#0494f4] hover:text-white dark:bg-zinc-800 dark:hover:bg-[#0494f4] dark:hover:text-white text-zinc-800 dark:text-zinc-200 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
