import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Cpu,
  Bot,
  Layers,
  Phone,
  MessageSquare,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ClientInquiry } from '../types';
import { safeStorage } from '../utils/safeStorage';
import { safeCopyToClipboard, safeOpenExternalLink } from '../utils/browserUtils';

interface ClientOrderSuiteProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const ClientOrderSuite: React.FC<ClientOrderSuiteProps> = ({
  initialService = '',
  isModal = false,
}) => {
  // Form State
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceType, setServiceType] = useState(
    initialService || 'Custom Enterprise Web Development'
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Custom Responsive UI/UX',
    'SEO & Cloudflare Deployment',
    'Admin Control Dashboard',
  ]);
  const [budgetTier, setBudgetTier] = useState('₹25,000 - ₹50,000 (Startup / MVP)');
  const [timeline, setTimeline] = useState('Standard (3 - 5 Weeks)');
  const [description, setDescription] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Email' | 'Phone Call'>('WhatsApp');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ClientInquiry | null>(null);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Sync if initialService changes
  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  const serviceOptions = [
    {
      id: 'web',
      name: 'Custom Enterprise Web Development',
      icon: Globe,
      basePrice: 24999,
      baseWeeks: 3,
    },
    {
      id: 'mobile',
      name: 'High-Performance Mobile Apps (Android/iOS)',
      icon: Smartphone,
      basePrice: 34999,
      baseWeeks: 4,
    },
    {
      id: 'browser',
      name: 'Sovereign Systems & Browser Core Tech',
      icon: Cpu,
      basePrice: 49999,
      baseWeeks: 5,
    },
    {
      id: 'ai',
      name: 'AI Engineering & Intelligent Automations',
      icon: Bot,
      basePrice: 29999,
      baseWeeks: 3,
    },
    {
      id: 'cloud',
      name: 'Cloud Architecture & DevSecOps Security',
      icon: Shield,
      basePrice: 19999,
      baseWeeks: 2,
    },
    {
      id: 'uiux',
      name: 'UI/UX Design Systems & Product Strategy',
      icon: Layers,
      basePrice: 14999,
      baseWeeks: 2,
    },
  ];

  const availableFeatures = [
    { name: 'Custom Responsive UI/UX', cost: 5000 },
    { name: 'User Authentication & JWT/OAuth', cost: 6000 },
    { name: 'Payment Gateway (Razorpay/UPI/Stripe)', cost: 8000 },
    { name: 'Admin Control Dashboard & Analytics', cost: 10000 },
    { name: 'AI Assistant / Gemini Chatbot Integration', cost: 12000 },
    { name: 'Real-Time WebSockets / Live Updates', cost: 9000 },
    { name: 'SEO Optimization & Cloudflare Pages Setup', cost: 4000 },
    { name: 'Multi-Language Support (Hindi + Regional)', cost: 5000 },
    { name: 'Offline Data Caching & PWA Support', cost: 7000 },
    { name: 'Automated WhatsApp / SMS Alerts', cost: 6000 },
  ];

  const toggleFeature = (featureName: string) => {
    if (selectedFeatures.includes(featureName)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featureName));
    } else {
      setSelectedFeatures([...selectedFeatures, featureName]);
    }
  };

  // Dynamic Cost Calculation
  const selectedServiceObj =
    serviceOptions.find((s) => s.name === serviceType) || serviceOptions[0];

  const featuresCost = selectedFeatures.reduce((total, featName) => {
    const feat = availableFeatures.find((f) => f.name === featName);
    return total + (feat ? feat.cost : 0);
  }, 0);

  const estimatedMinInr = selectedServiceObj.basePrice + Math.round(featuresCost * 0.85);
  const estimatedMaxInr = Math.round(estimatedMinInr * 1.35);
  const estimatedWeeks = selectedServiceObj.baseWeeks + (selectedFeatures.length > 4 ? 2 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!clientName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Please enter your WhatsApp/Contact number.');
      return;
    }

    setIsSubmitting(true);

    const inquiryId = `GT-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newInquiry: ClientInquiry = {
      id: inquiryId,
      clientName,
      email,
      phone,
      company: company || 'Individual / Startup',
      serviceType,
      featuresSelected: selectedFeatures,
      budgetTier,
      timeline,
      description: description || 'No specific description provided.',
      preferredContact,
      calculatedEstimate: {
        minInr: estimatedMinInr,
        maxInr: estimatedMaxInr,
        timelineWeeks: estimatedWeeks,
      },
      submittedAt: new Date().toISOString(),
      status: 'Received',
    };

    // Save with safe resilient storage engine
    try {
      const existing = safeStorage.getItem<ClientInquiry[]>('gt_client_inquiries', []) || [];
      safeStorage.setItem('gt_client_inquiries', [newInquiry, ...existing]);
    } catch {
      // Graceful fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedInquiry(newInquiry);
    }, 600);
  };

  const copyInquirySummary = async () => {
    if (!submittedInquiry) return;
    const text = `*Gothwad Tech Client Inquiry #${submittedInquiry.id}*
Client: ${submittedInquiry.clientName} (${submittedInquiry.company})
Email: ${submittedInquiry.email}
Phone: ${submittedInquiry.phone}
Service: ${submittedInquiry.serviceType}
Features: ${submittedInquiry.featuresSelected.join(', ')}
Budget Tier: ${submittedInquiry.budgetTier}
Timeline: ${submittedInquiry.timeline}
Estimate: ₹${submittedInquiry.calculatedEstimate.minInr.toLocaleString()} - ₹${submittedInquiry.calculatedEstimate.maxInr.toLocaleString()} (~${submittedInquiry.calculatedEstimate.timelineWeeks} Weeks)
Notes: ${submittedInquiry.description}`;

    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const openWhatsAppDirect = () => {
    if (!submittedInquiry) return;
    const msg = encodeURIComponent(
      `Hello Pawan / Gothwad Tech Team, I just submitted an order inquiry on gothwadtech.com!
Ref: ${submittedInquiry.id}
Client Name: ${submittedInquiry.clientName} (${submittedInquiry.company})
Required Service: ${submittedInquiry.serviceType}
Estimated Budget: ₹${submittedInquiry.calculatedEstimate.minInr.toLocaleString()} - ₹${submittedInquiry.calculatedEstimate.maxInr.toLocaleString()}
Let's discuss the project timeline and execution!`
    );
    safeOpenExternalLink(`https://wa.me/${COMPANY_INFO.whatsappNumberOnly}?text=${msg}`);
  };

  return (
    <div className={`relative ${isModal ? 'p-0' : 'py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16 transition-colors duration-150'}`} id="order">
      <div className={`${isModal ? 'max-w-4xl mx-auto' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0494f4]/10 border border-[#0494f4]/30 text-[#0494f4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-current text-[#0494f4]" />
              <span>Direct Project Booking & Estimator</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Order Your Custom{' '}
              <span className="text-[#0494f4]">
                App, Website or Software
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Configure your project requirements below to receive an instant estimate and start your engineering engagement directly with our 12-member engineering powerhouse.
            </p>
          </div>
        )}

        {/* Success Confirmation View */}
        {submittedInquiry ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-500/40 shadow-sm text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-500/30">
                Ref: {submittedInquiry.id}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Project Inquiry Successfully Received!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-lg mx-auto">
                Thank you, <strong className="text-zinc-900 dark:text-white">{submittedInquiry.clientName}</strong>. Our team will review your specifications and contact you within <span className="text-[#0494f4] font-semibold">2-4 hours</span>.
              </p>
            </div>

            {/* Estimated Summary Box */}
            <div className="max-w-lg mx-auto p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-left space-y-2.5">
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span>Selected Service</span>
                <span className="font-semibold text-zinc-900 dark:text-white">{submittedInquiry.serviceType}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span>Estimated Budget</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  ₹{submittedInquiry.calculatedEstimate.minInr.toLocaleString()} - ₹{submittedInquiry.calculatedEstimate.maxInr.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span>Estimated Delivery</span>
                <span className="font-semibold text-[#0494f4]">
                  ~{submittedInquiry.calculatedEstimate.timelineWeeks} Weeks (100% SLA)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>Preferred Contact</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {submittedInquiry.preferredContact} ({submittedInquiry.phone})
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <button
                onClick={openWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Fast-Track on WhatsApp</span>
              </button>

              <button
                onClick={copyInquirySummary}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={() => setSubmittedInquiry(null)}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-800 cursor-pointer"
              >
                Submit Another Project
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Form & Quote Estimator Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Form Column */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-5"
            >
              {validationError && (
                <div className="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Step 1: Select Service Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0494f4] mb-2.5">
                  1. Choose Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = serviceType === opt.name;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setServiceType(opt.name)}
                        className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-[#0494f4]/10 border-[#0494f4] text-zinc-900 dark:text-white'
                            : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#0494f4] text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold truncate">{opt.name}</div>
                          <div className="text-[10px] text-zinc-400 font-mono">
                            Starts ₹{opt.basePrice.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Capabilities & Features */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0494f4]">
                    2. Desired Modules
                  </label>
                  <span className="text-[11px] text-zinc-400">
                    {selectedFeatures.length} selected
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {availableFeatures.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.name);
                    return (
                      <div
                        key={feat.name}
                        onClick={() => toggleFeature(feat.name)}
                        className={`p-2 rounded-lg border text-xs cursor-pointer transition-colors flex items-center justify-between ${
                          isSelected
                            ? 'bg-zinc-100 dark:bg-zinc-800 border-emerald-500 dark:border-emerald-500/50 text-zinc-900 dark:text-white'
                            : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                        }`}
                      >
                        <span className="truncate pr-1 text-[11px]">{feat.name}</span>
                        <span
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-emerald-500 text-white' : 'border border-zinc-300 dark:border-zinc-700'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Target Budget
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#0494f4] cursor-pointer"
                  >
                    <option>₹25,000 - ₹50,000 (Startup / MVP)</option>
                    <option>₹50,000 - ₹1,50,000 (Growth & Full-Stack)</option>
                    <option>₹1,50,000 - ₹5,00,000+ (Enterprise Custom)</option>
                    <option>Flexible / To Be Estimated</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#0494f4] cursor-pointer"
                  >
                    <option>Fast-Track (2 - 3 Weeks)</option>
                    <option>Standard (3 - 5 Weeks)</option>
                    <option>Comprehensive (6 - 10 Weeks)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Client Contact Information */}
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0494f4]">
                  3. Contact Info
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp / Mobile Number *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company / Brand (Optional)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your project requirements or reference links..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[#0494f4]"
                  />
                </div>

                {/* Preferred Contact Channel */}
                <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <span className="text-zinc-400 font-medium">Channel:</span>
                  {(['WhatsApp', 'Email', 'Phone Call'] as const).map((ch) => (
                    <label key={ch} className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="contactChannel"
                        checked={preferredContact === ch}
                        onChange={() => setPreferredContact(ch)}
                        className="text-[#0494f4] focus:ring-[#0494f4]"
                      />
                      <span>{ch}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-[#0494f4] hover:bg-[#0077cd] text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Proposal & Estimate...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Project Order & Request Estimate</span>
                  </>
                )}
              </button>
            </form>

            {/* Live Instant Quote & SLA Summary Card (Right Column) */}
            <div className="lg:col-span-5 bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 sticky top-20">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0494f4]">
                    Live Engineering Estimate
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    Direct Quote
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Estimated Investment
                </h3>
              </div>

              {/* Price Display */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Indicative Cost Bracket (INR)</div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
                  ₹{estimatedMinInr.toLocaleString()}{' '}
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">- ₹{estimatedMaxInr.toLocaleString()}</span>
                </div>
                <div className="text-[10px] text-zinc-400">
                  Includes full source code rights & 3 months warranty.
                </div>
              </div>

              {/* Estimated Delivery Time */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs">
                <span className="text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0494f4]" />
                  Estimated Timeline
                </span>
                <span className="font-bold text-zinc-900 dark:text-white font-mono">
                  ~{estimatedWeeks} Weeks
                </span>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="font-bold text-zinc-700 dark:text-zinc-300">Selected Scope:</div>
                <div className="p-2.5 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-1 text-zinc-500 dark:text-zinc-400">
                  <div className="text-zinc-900 dark:text-white font-semibold">• {serviceType}</div>
                  {selectedFeatures.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                      <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {selectedFeatures.length > 3 && (
                    <div className="text-[10px] text-[#0494f4] font-medium">
                      + {selectedFeatures.length - 3} additional modules
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Reach Out Notice */}
              <div className="p-3 rounded-xl bg-[#0494f4]/10 border border-[#0494f4]/20 text-xs space-y-0.5">
                <div className="font-bold text-[#0494f4] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Team Support</span>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                  Reach out at <strong className="text-zinc-900 dark:text-white">contact@gothwadtech.com</strong> or call <strong className="text-zinc-900 dark:text-white">+91 73399 04665</strong>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
