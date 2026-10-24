import React from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenOrderModal: (service?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenOrderModal,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden my-8">
        {/* Modal Header Bar with Close */}
        <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header text on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0494f4] text-white">
                {project.category}
              </span>
              <span className="text-xs text-zinc-200 font-medium">
                {project.client} • {project.year}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Subtitle / Pitch */}
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[10px] text-zinc-400 mb-0.5">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-[#0494f4] font-mono">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                The Engineering Challenge
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our Sovereign Solution
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Results */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0494f4]">
              Verified Project Outcomes & Results
            </h4>
            <div className="space-y-1.5">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
              Architectural Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xs font-semibold cursor-pointer"
          >
            Close Case Study
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenOrderModal(`Project similar to ${project.title}`);
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#0494f4] hover:bg-[#0077cd] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 fill-white" />
            <span>Order Project Like This</span>
          </button>
        </div>
      </div>
    </div>
  );
};
