import {
  ServiceItem,
  ProjectItem,
  TeamMember,
  TestimonialItem,
  BrowserBenchmark,
} from '../types';

export const COMPANY_INFO = {
  name: 'Gothwad Tech',
  domain: 'gothwadtech.com',
  legalName: 'Gothwad Tech Private Limited',
  tagline: 'Digital Solutions for Indian Businesses & Sovereign Tech Platforms',
  slogan: 'Empowering Indian Businesses & Building Sovereign Tech (Aatmanirbhar Bharat)',
  shortDescription:
    'Gothwad Tech delivers complete digital transformation solutions — specialized school ERP & apps, restaurant POS & ordering websites, local shop billing & inventory tools, and custom business management systems — alongside our sovereign consumer tech platforms (Gothwad Browser, GrixChat, and Indogram).',
  foundedYear: '2023',
  headquarters: 'Corporate Innovation Centres, India',
  phone: '+91 73399 04665',
  phoneRaw: '07339904665',
  whatsappDirect: '+91 73399 04665',
  whatsappNumberOnly: '917339904665',
  email: 'contact@gothwadtech.com',
  corporateEmail: 'contact@gothwadtech.com',
  supportEmail: 'support@gothwadtech.com',
  helpEmail: 'help@gothwadtech.com',
  infoEmail: 'info@gothwadtech.com',
  founderEmail: 'pawan@gothwadtech.com',
  coFounderEmail: 'vishnu@gothwadtech.com',
  ceoEmail: 'nishant@gothwadtech.com',
  departmentEmails: [
    {
      category: 'Official Desk',
      name: 'Business Inquiries & Solutions',
      email: 'contact@gothwadtech.com',
      description: 'Primary channel for school apps, restaurant systems, shop billing tools, and custom development.',
      actionLabel: 'Contact Desk',
    },
    {
      category: 'Customer Care',
      name: 'Client Support & SLA',
      email: 'support@gothwadtech.com',
      description: 'Dedicated 24/7 technical support, live system maintenance, and project SLA support.',
      actionLabel: 'Support Desk',
    },
    {
      category: 'Assistance',
      name: 'Help & Onboarding',
      email: 'help@gothwadtech.com',
      description: 'Staff training, portal onboarding, user guides, and integration assistance.',
      actionLabel: 'Get Help',
    },
    {
      category: 'Information',
      name: 'General Information & Sovereign Tech',
      email: 'info@gothwadtech.com',
      description: 'Media inquiries, sovereign consumer app inquiries, and general corporate communications.',
      actionLabel: 'Info Desk',
    },
  ],
  leadershipEmails: [
    {
      role: 'Founder & Product Architect',
      name: 'Pawan Gothwad',
      email: 'pawan@gothwadtech.com',
      description: 'Direct consultation on business digital transformation and sovereign tech products.',
    },
    {
      role: 'Chief Executive Officer (CEO)',
      name: 'Nishant',
      email: 'nishant@gothwadtech.com',
      description: 'Institutional partnerships, enterprise sales, and growth operations.',
    },
    {
      role: 'Co-Founder & CTO',
      name: 'Vishnu Meena',
      email: 'vishnu@gothwadtech.com',
      description: 'Core engineering, system toolchains, and software infrastructure.',
    },
  ],
  stats: [
    { label: 'Schools & Businesses Digitized', value: '65+ Clients', helper: 'Schools, Cafes, Retail, ERP' },
    { label: 'Sovereign Consumer Apps', value: '3 Flagships', helper: 'Browser, GrixChat, Indogram' },
    { label: 'Dedicated Engineering Team', value: '12 Specialists', helper: 'Architects & Developers' },
    { label: 'Client Satisfaction Rating', value: '4.95 / 5', helper: 'Verified Google & Direct Reviews' },
  ],
};

export interface SovereignProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  category: string;
  iconName: string;
  platforms: string[];
  playStoreUrl: string;
  webUrl: string;
  apkSize: string;
  description: string;
  highlights: string[];
  features: { title: string; desc: string; icon: string }[];
  stats: { label: string; value: string }[];
  accentColor: string;
  themeGradient: string;
}

export const SOVEREIGN_PRODUCTS: SovereignProduct[] = [
  {
    id: 'gothwad-browser',
    name: 'Gothwad Browser',
    tagline: 'World’s Lightest & Fastest Multi-Engine Sovereign Mobile Browser',
    badge: 'Flagship Microkernel Browser',
    category: 'High-Performance Web Engine',
    iconName: 'Compass',
    platforms: ['Google Play Store', 'Web App', 'Direct APK'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gothwad.browser',
    webUrl: 'https://browser.gothwadtech.com',
    apkSize: '11.8 MB',
    description:
      'Engineered in compiled Rust and C++ to deliver blazing fast browsing speeds with up to 75% lower RAM consumption than Google Chrome. Features native TurboShield ad-blocking, 16-thread download acceleration, and zero background data harvesting.',
    highlights: [
      'Under 12MB binary package size (8x lighter than Chrome)',
      'Consumes only 142MB RAM for 10 active tabs vs 580MB on Chrome',
      'Integrated 16-thread multi-part Turbo Downloader with auto-resume',
      'TurboShield tracker and ad-blocker saving up to 40MB data per hour',
    ],
    features: [
      {
        title: 'Microkernel Speed Engine',
        desc: 'Instant cold launch in under 180ms with native compiled bytecodes.',
        icon: 'Cpu',
      },
      {
        title: 'Zero Data Harvesting',
        desc: 'Browsing records stay strictly on-device with zero telemetry.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Multi-Thread Downloader',
        desc: 'Splits files into 16 parallel chunks with automated retry streams.',
        icon: 'Zap',
      },
      {
        title: 'AI Smart Article Reader',
        desc: 'Clean text-only reader mode with instant regional language speech.',
        icon: 'Sparkles',
      },
    ],
    stats: [
      { label: 'Package Size', value: '11.8 MB' },
      { label: 'RAM Saved', value: '75%' },
      { label: 'Page Load Speed', value: '0.85s' },
      { label: 'Ad Block Rate', value: '99.4%' },
    ],
    accentColor: '#0494f4',
    themeGradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'grixchat',
    name: 'GrixChat',
    tagline: 'Lightning-Fast Real-Time Messaging & Sovereign Communication Suite',
    badge: 'NextGen Real-Time Messenger',
    category: 'Sovereign Instant Messenger',
    iconName: 'MessageSquare',
    platforms: ['Google Play Store', 'Web App', 'Desktop Client'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gothwad.grixchat',
    webUrl: 'https://chat.gothwadtech.com',
    apkSize: '16.4 MB',
    description:
      'A high-speed, instant communication platform engineered for crystal-clear voice and HD video calling, lightning-fast text messaging, media sharing up to 2GB per file, interactive group chats, broadcast channels, and dynamic status updates with seamless cross-platform Web & Mobile synchronization.',
    highlights: [
      'Sub-millisecond message delivery across mobile networks',
      'Crystal-clear HD voice & multi-participant video calling engine',
      'High-capacity file and high-resolution media sharing up to 2GB',
      'Rich status stories, channels, voice notes, and live typing indicators',
      'Instant real-time synchronization between Mobile App and Web Browser',
    ],
    features: [
      {
        title: 'Real-Time Message Engine',
        desc: 'Low-latency WebSockets architecture for instantaneous message dispatch and delivery receipts.',
        icon: 'Zap',
      },
      {
        title: 'HD Voice & Video Calling',
        desc: 'Optimized adaptive bitrate calling that stays clear even on 3G and congested networks.',
        icon: 'Phone',
      },
      {
        title: '2GB Rich Media Transfers',
        desc: 'Share documents, RAW photos, audio files, and 4K videos without aggressive lossy compression.',
        icon: 'Layers',
      },
      {
        title: 'Dynamic Stories & Channels',
        desc: 'Share 24-hour visual updates, announcements, and follow specialized verified creator feeds.',
        icon: 'Sparkles',
      },
    ],
    stats: [
      { label: 'Delivery Latency', value: '<15ms' },
      { label: 'Max File Share', value: '2 GB' },
      { label: 'Call Quality', value: 'HD 60FPS' },
      { label: 'Web Sync Speed', value: 'Instant' },
    ],
    accentColor: '#10b981',
    themeGradient: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'indogram',
    name: 'Indogram',
    tagline: 'Supercharged Sovereign Cloud Messenger, Channels & Community Platform',
    badge: 'Sovereign Cloud Community Client',
    category: 'High-Capacity Cloud Messenger',
    iconName: 'Send',
    platforms: ['Google Play Store', 'Web App', 'Desktop Native'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gothwad.indogram',
    webUrl: 'https://indogram.gothwadtech.com',
    apkSize: '21.2 MB',
    description:
      'A high-capacity sovereign cloud messaging client and community platform. Built for massive public and private channels, high-volume group discussions, custom automation bots, instant multi-device cloud synchronization, and limitless cloud media streaming.',
    highlights: [
      'Massive group communities supporting up to 200,000 members with rich admin tools',
      'High-throughput broadcast channels with unlimited subscribers and detailed analytics',
      'Infinite cloud storage for messages and media with instant search across years of history',
      'Custom programmable bots, web mini-apps, and automated utility workflows',
      'Pure multi-device cloud independence — use on phone, tablet, and web simultaneously without phone connection',
    ],
    features: [
      {
        title: 'Massive Communities & Channels',
        desc: 'Broadcast to unlimited audiences and manage massive discussion groups with granular moderation.',
        icon: 'Users',
      },
      {
        title: 'Infinite Cloud Storage',
        desc: 'Access your complete media library and document archives from any device at any time.',
        icon: 'Cloud',
      },
      {
        title: 'Intelligent Bot Ecosystem',
        desc: 'Integrate automated payment bots, AI agents, and interactive custom web mini-apps seamlessly.',
        icon: 'Bot',
      },
      {
        title: 'Multi-Device Cloud Freedom',
        desc: 'Log in simultaneously across multiple desktop, web, and mobile clients with instant sync.',
        icon: 'Laptop',
      },
    ],
    stats: [
      { label: 'Group Capacity', value: '200,000+' },
      { label: 'Cloud Storage', value: 'Unlimited' },
      { label: 'Channel Reach', value: 'Infinite' },
      { label: 'Multi-Device', value: '100% Cloud' },
    ],
    accentColor: '#0284c7',
    themeGradient: 'from-sky-600 to-indigo-600',
  },
];

export const BROWSER_BENCHMARKS: BrowserBenchmark[] = [
  {
    metric: 'RAM Usage (10 Active Tabs)',
    unit: 'MB Memory',
    gothwad: 142,
    chrome: 580,
    firefox: 490,
    edge: 520,
    description: 'Proprietary Zero-Waste Tab Suspension & Memory Purge Engine.',
    winner: 'gothwad',
    advantageText: '75.5% lower memory footprint than Google Chrome',
  },
  {
    metric: 'Cold Startup Time',
    unit: 'ms',
    gothwad: 180,
    chrome: 740,
    firefox: 820,
    edge: 690,
    description: 'Instant binary hydration written in compiled Rust/C++ native core.',
    winner: 'gothwad',
    advantageText: '4x faster app launch on low and mid-tier Android devices',
  },
  {
    metric: 'Full Page Load Time (Heavy News Portal)',
    unit: 'Seconds',
    gothwad: 0.85,
    chrome: 2.3,
    firefox: 2.6,
    edge: 2.1,
    description: 'Integrated TurboDNS pre-fetch with multi-threaded bytecode cache.',
    winner: 'gothwad',
    advantageText: '63% faster page rendering on 4G/5G connections',
  },
  {
    metric: 'Battery Drain per Hour (Video Streaming)',
    unit: '% Battery',
    gothwad: 4.8,
    chrome: 12.4,
    firefox: 11.2,
    edge: 10.5,
    description: 'Hardware-accelerated shader offloading with zero background telemetry.',
    winner: 'gothwad',
    advantageText: 'Saves more than 60% device battery vs mainstream browsers',
  },
  {
    metric: 'Ad & Tracker Block Efficiency',
    unit: '% Block Rate',
    gothwad: 99.4,
    chrome: 0,
    firefox: 72.0,
    edge: 64.0,
    description: 'Native kernel-level TurboShield blocker removing trackers before download.',
    winner: 'gothwad',
    advantageText: 'Saves up to 40MB data per hour by eliminating ad payload',
  },
  {
    metric: 'App Package Size (APK / Binary)',
    unit: 'Megabytes',
    gothwad: 11.8,
    chrome: 94.0,
    firefox: 88.5,
    edge: 92.0,
    description: 'Ultra-condensed microkernel design combining multi-browser features in one.',
    winner: 'gothwad',
    advantageText: 'Under 12MB — 8x lighter than Chrome and Firefox',
  },
];

export const BROWSER_UNIQUE_FEATURES = [
  {
    title: 'All Top Play Store Features In One App',
    description:
      'Combines UC Browser’s lightning download acceleration, Brave’s aggressive ad-shielding, Opera’s smart data compression, and Firefox’s strict privacy sandbox without bloated toolbars.',
    icon: 'Layers',
  },
  {
    title: 'Ultra-Lightweight Microkernel Engine',
    description:
      'Engineered with a streamlined rendering pipeline that runs smoothly even on entry-level smartphones with 1GB/2GB RAM, preventing lag and device thermal throttling.',
    icon: 'Cpu',
  },
  {
    title: 'Zero Data Harvesting & Sovereign Privacy',
    description:
      'Your browsing data never leaves your device. No user tracking, no third-party ad profiling, and completely sovereign architecture tailored for Indian digital privacy.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Multi-Threaded Turbo Downloader',
    description:
      'Splits downloads into 16 parallel threads with auto-resume capability and network packet recovery, delivering up to 300% faster file downloads.',
    icon: 'Zap',
  },
  {
    title: 'AI Smart Reader & Page Optimizer',
    description:
      'Instant article decluttering with text-to-speech support in Hindi, English, and regional Indian languages with dark reader mode.',
    icon: 'Sparkles',
  },
  {
    title: 'Offline Video & Media Sniffer',
    description:
      'Seamlessly captures public web video streams for smooth offline playback with built-in hardware decoding for zero stutter.',
    icon: 'PlayCircle',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'school-management-systems',
    title: 'School & College Management Suite',
    subtitle: 'Complete Cloud ERP, Mobile Apps, Fees, Attendance & Parent Portals',
    category: 'Schools & Education',
    icon: 'GraduationCap',
    description:
      'Turnkey digital management systems for schools, coaching institutes, and colleges. Includes student/staff attendance, online fee collection with auto-receipts, instant WhatsApp notifications to parents, digital report cards, exam scheduling, and custom branded Android & iOS apps.',
    features: [
      'Automated Online Fee Collection with UPI / Net Banking & instant digital receipts',
      'RFID & Biometric / Mobile Attendance with auto-SMS & WhatsApp alert to parents',
      'Interactive Parent-Teacher Mobile App with homework, notices & timetable',
      'Digital Examination, Grading & CBSE/ICSE/State Board Report Card Generation',
      'Library, Transport / GPS Bus Tracking & Staff Payroll Management',
    ],
    deliverables: [
      'Custom School Web Portal + Branded Android/iOS Mobile Apps',
      'Role-Based Login Portals (Principal, Teachers, Accountant, Parents, Students)',
      'Complete On-Premises & Cloud Database Setup with Daily Automated Backups',
      'Free Onboarding Staff Training & 1 Year Priority Support',
    ],
    estimatedTimeline: '2 to 4 Weeks',
    startingPriceInr: '₹24,999',
    popular: true,
    techStack: ['React', 'Node.js', 'Kotlin / Flutter', 'PostgreSQL', 'Razorpay/UPI', 'WhatsApp Cloud API'],
  },
  {
    id: 'restaurant-management-systems',
    title: 'Restaurant & Café Digital Ecosystem',
    subtitle: 'Direct Online Ordering, QR Digital Menu, POS Billing & KDS',
    category: 'Restaurants & Food',
    icon: 'Utensils',
    description:
      'Empower your restaurant, cloud kitchen, or café with zero-commission direct online ordering websites, interactive QR code table menus, lightning-fast POS billing, kitchen display systems (KDS), and customer loyalty retention programs.',
    features: [
      'Zero-Commission Direct Online Food Ordering Website & Customer App',
      'Contactless QR Table Ordering with live order status & digital bill payment',
      'Fast Touchscreen POS Billing with thermal printer & GST invoice generation',
      'Kitchen Display System (KDS) & Captain App for instant order routing',
      'Inventory & Recipe Costing with automated low-stock ingredient alerts',
    ],
    deliverables: [
      'Custom Branded Online Ordering Website & Mobile Web App',
      'Complete Restaurant Admin Dashboard & Billing Software',
      'Thermal Printer & Barcode Scanner Hardware Integration',
      'Menu Setup, Photo Uploads & Staff Billing Training',
    ],
    estimatedTimeline: '1 to 3 Weeks',
    startingPriceInr: '₹19,999',
    popular: true,
    techStack: ['Next.js', 'React Native POS', 'WebSockets Real-Time', 'Node.js', 'UPI Soundbox/Gateway'],
  },
  {
    id: 'local-shop-retail-tools',
    title: 'Local Shop & Retail Management Suite',
    subtitle: 'Fast Barcode Billing, Inventory, WhatsApp Invoicing & Digital Khata',
    category: 'Retail & Local Shops',
    icon: 'Store',
    description:
      'Engineered specifically for Indian grocery stores, electronics shops, apparel boutiques, and wholesalers. Manage your entire store with ultra-fast barcode billing, automated stock tracking, WhatsApp invoice sharing, customer credit (Khata) ledger, and a direct digital storefront for neighborhood customers.',
    features: [
      'Ultra-Fast Barcode Billing & GST / Non-GST thermal receipt generation',
      'Live Stock & Inventory Tracking with expiry alerts and wholesale reorder levels',
      'Instant Digital Invoices sent directly to customer WhatsApp with UPI pay link',
      'Digital Customer Khata (Credit/Udhaar) with automated polite payment reminders',
      'Online Digital Storefront website for customers to browse & order from your shop',
    ],
    deliverables: [
      'Store Management Desktop Software + Mobile App',
      'Online Catalog Website for local customer ordering',
      'Product Master Data import with 10,000+ pre-filled FMCG barcodes',
      'Thermal Printer, Cash Drawer & Barcode Scanner setup guide',
    ],
    estimatedTimeline: '1 to 2 Weeks',
    startingPriceInr: '₹14,999',
    popular: true,
    techStack: ['Electron / React', 'SQLite / Cloud Sync', 'WhatsApp API', 'Razorpay / BharatPe UPI'],
  },
  {
    id: 'business-management-erp',
    title: 'Business Management Tools & Custom ERP',
    subtitle: 'Tailored Workflows, Lead CRM, Employee Payroll & Operations Dashboards',
    category: 'Business & Enterprise',
    icon: 'Building2',
    description:
      'Custom management software and cloud dashboards tailored to your exact business operations. Eliminate messy spreadsheets with unified CRM, quotation generators, staff attendance & payroll, customer ticketing, and real-time revenue analytics.',
    features: [
      'Custom Operations Dashboards with real-time KPI metrics and financial graphs',
      'Lead Management CRM with automated sales pipeline & WhatsApp/Email follow-ups',
      'Staff Attendance, Geo-fencing check-in, Leave management & Salary calculation',
      'Automated Quotation, Invoice & Delivery Challan generation with digital signature',
      'Role-Based Access Control (Admin, Manager, Sales, Accountant, Support)',
    ],
    deliverables: [
      'Cloud Web Dashboard + Native Mobile Admin App',
      'Automated Daily Business Summary reports sent to Founder/Owner WhatsApp',
      'Full Source Code ownership & database migration support',
      'Dedicated Account Manager & 24/7 SLA Guarantee',
    ],
    estimatedTimeline: '2 to 5 Weeks',
    startingPriceInr: '₹29,999',
    popular: true,
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS / Cloudflare'],
  },
  {
    id: 'custom-web-mobile-apps',
    title: 'Custom Web & Mobile App Development',
    subtitle: 'High-Performance Consumer Apps, SaaS & Modern Web Platforms',
    category: 'Custom Development',
    icon: 'Smartphone',
    description:
      'From innovative consumer applications to high-converting commercial web platforms, our 12 engineering architects design, code, and deploy ultra-fast Android, iOS, and Web applications engineered for scale and speed.',
    features: [
      'Sub-second page load times with 100/100 Lighthouse SEO & Performance score',
      'Native Android (Kotlin), iOS (Swift), and cross-platform React Native / Flutter builds',
      'Bank-grade SSL/TLS, biometric security, and zero-downtime Cloud deployment',
      'Complete Play Store & Apple App Store approval management',
      'Integrated Indian Payment Gateways (Razorpay, PhonePe, Paytm, Cashfree, UPI)',
    ],
    deliverables: [
      'Production-ready Web Platform + Published Android/iOS App Builds',
      '100% Source Code & Intellectual Property (IP) Handover',
      'Interactive Figma UI/UX Prototypes & Architecture Documentation',
      '6 Months Free Maintenance & Security Patching',
    ],
    estimatedTimeline: '3 to 6 Weeks',
    startingPriceInr: '₹34,999',
    popular: true,
    techStack: ['React 19', 'Next.js', 'Kotlin', 'Flutter', 'Node.js', 'Cloudflare Pages'],
  },
  {
    id: 'sovereign-browser-tech',
    title: 'Sovereign Systems & Native Engine Engineering',
    subtitle: 'Deep-Tech Native Browsers, WebViews & Microkernel Engines',
    category: 'Sovereign Tech',
    icon: 'Cpu',
    description:
      'Leveraging our core breakthroughs from Gothwad Browser, GrixChat, and Indogram, we build specialized native system software, custom kiosk browsers, low-latency compiled engines, and sovereign communication infrastructure.',
    features: [
      'Custom Android & Desktop browser builds with custom branding & TurboShield adblock',
      'Low-latency WebSocket real-time messaging backends with audio/video streaming',
      'Kiosk Mode & Enterprise Safe Browsing solutions for institutions and defense',
      'Compiled C++/Rust native performance modules for Android and Linux',
      'Zero background telemetry & strict sovereign Indian data residency compliance',
    ],
    deliverables: [
      'Whitelabel Custom Browser / Messaging Client APK & Executable',
      'Proprietary ad-block filter & privacy management portal',
      'Source code & native toolchain deployment scripts',
      'High-throughput server cluster configuration',
    ],
    estimatedTimeline: '4 to 8 Weeks',
    startingPriceInr: '₹49,999',
    techStack: ['Rust', 'C++', 'Chromium/Blink Core', 'Android NDK', 'WebSockets', 'WebAssembly'],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'vidyasagar-school-erp',
    title: 'Vidyasagar Public School ERP & Parent App',
    subtitle: 'Automated Fees, Attendance, Digital Report Cards & Parent App',
    category: 'Schools & Education',
    client: 'Vidyasagar Group of Institutions (2,400+ Students)',
    year: '2024',
    description:
      'A complete cloud-based school management system featuring automated UPI fee collection, biometric attendance with instant WhatsApp SMS alerts to parents, digital report card generator, and custom branded mobile apps.',
    challenge:
      'Manual cash fee handling, high paper expenditure on report cards, and parent complaints regarding delayed communication.',
    solution:
      'Built a centralized School ERP with role-based access for Principal, Teachers, and Parents with integrated Razorpay/UPI gateway and automated WhatsApp API.',
    results: [
      '100% cashless digital fee collection with automated instant receipts',
      'Zero manual errors in CBSE/State board term exam marksheets',
      '98% parent satisfaction with daily homework & attendance updates on mobile app',
      'Reduced school administrative paperwork costs by 85%',
    ],
    metrics: [
      { label: 'Students Managed', value: '2,400+' },
      { label: 'Fee Collection', value: '100% Digital' },
      { label: 'Parent Engagement', value: '98%' },
      { label: 'Admin Time Saved', value: '70%' },
    ],
    tags: ['School ERP', 'React', 'Kotlin Parent App', 'UPI Fees', 'WhatsApp API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'royal-spice-pos-ordering',
    title: 'Royal Spice Restaurant & Café POS Suite',
    subtitle: 'Zero-Commission Online Ordering, QR Table Menu & POS Billing',
    category: 'Restaurants & Hospitality',
    client: 'Royal Spice Fine Dine & Café Chain (4 Outlets)',
    year: '2024',
    description:
      'An end-to-end restaurant digitalization system with contactless QR code table ordering, touchscreen POS billing with thermal printer, direct customer food delivery website, and Kitchen Display Systems (KDS).',
    challenge:
      'Paying 28-32% high commissions to third-party delivery apps and frequent kitchen order miscommunications during peak dining hours.',
    solution:
      'Launched their own branded direct food ordering website and synced it with a sub-second Kitchen Display System (KDS) and POS counter.',
    results: [
      'Saved over ₹2.4 Lakhs monthly in third-party food delivery commissions',
      'Average order preparation and table dispatch time reduced by 40%',
      'Over 14,000 direct customer orders processed with repeat loyalty coupons',
      'Instant thermal bill generation supporting GST & split payments',
    ],
    metrics: [
      { label: 'Commissions Saved', value: '₹2.4L/mo' },
      { label: 'Kitchen Speedup', value: '40%' },
      { label: 'Direct Orders', value: '14,000+' },
      { label: 'POS Latency', value: '<200ms' },
    ],
    tags: ['Restaurant POS', 'QR Menu', 'Next.js Ordering', 'KDS Screen', 'Thermal Print', 'UPI Soundbox'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'shree-ram-mart-retail',
    title: 'Shree Ram Mart & Supermarket Suite',
    subtitle: 'Fast Barcode Billing, Stock Management, WhatsApp Invoicing & Khata',
    category: 'Retail & Local Shops',
    client: 'Shree Ram Supermarket & Retailers (FMCG & Groceries)',
    year: '2024',
    description:
      'A lightning-fast retail shop management system with barcode scanner billing, 12,000+ pre-filled FMCG inventory items, digital customer Khata (credit ledger) with automated WhatsApp payment reminders, and online catalog website.',
    challenge:
      'Long billing queues during evening rush hours, untracked inventory expiries, and delayed payment collections on customer credit.',
    solution:
      'Deployed an offline-first desktop POS that synchronizes with cloud inventory and automatically sends WhatsApp bills with instant UPI payment links.',
    results: [
      'Billing checkout speed boosted to under 10 seconds per customer',
      'Recovered 92% of pending customer Khata dues via automated polite WhatsApp reminders',
      'Zero stock shortages due to automated re-order level warnings',
      'Neighborhood customers now order online directly via store web app',
    ],
    metrics: [
      { label: 'Checkout Time', value: '<10s' },
      { label: 'Khata Recovery', value: '92%' },
      { label: 'Items Cataloged', value: '12,000+' },
      { label: 'Paper Saved', value: '100% Digital' },
    ],
    tags: ['Retail POS', 'Barcode Scanner', 'WhatsApp Billing', 'Digital Khata', 'Cloud Sync', 'FMCG'],
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'gothwad-browser',
    title: 'Gothwad Browser',
    subtitle: 'World’s Lightest, Fastest Multi-Engine Sovereign Mobile Browser',
    category: 'Sovereign Tech',
    client: 'Gothwad Tech Sovereign Labs (Play Store & Web Release)',
    year: '2024 - Present',
    description:
      'A revolutionary indigenous sovereign browser engineered to outclass international giants in speed, memory consumption, and data privacy. Packs all top Play Store browser features into an ultra-slim 11.8MB build.',
    challenge:
      'Mainstream browsers consume up to 600MB+ RAM for simple browsing, drain battery rapidly with background telemetry, and overwhelm users with intrusive ads.',
    solution:
      'Engineered an ultra-condensed C++/Rust microkernel with TurboShield ad-blocking, parallel multi-threaded download engine, and intelligent tab memory suspension.',
    results: [
      'Over 100,000+ active sessions with a 4.9-star user rating',
      '75% lower RAM consumption compared to Google Chrome',
      'Average page load speed reduced to 0.85s on mobile networks',
      'Featured as an exemplary Indian sovereign software innovation',
    ],
    metrics: [
      { label: 'Package Size', value: '11.8 MB' },
      { label: 'RAM Saved', value: '75%' },
      { label: 'Load Speedup', value: '3.2x' },
      { label: 'Ad Block Rate', value: '99.4%' },
    ],
    tags: ['Android Core', 'Rust Microkernel', 'C++', 'TurboShield', 'Ad-Block', 'Aatmanirbhar Tech'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'grixchat',
    title: 'GrixChat',
    subtitle: 'High-Speed Real-Time Instant Messenger, Voice & Video Suite',
    category: 'Sovereign Tech',
    client: 'Gothwad Tech Sovereign Labs (Play Store & Web Release)',
    year: '2024 - Present',
    description:
      'A next-generation sovereign communication platform offering lightning-fast text messaging, HD voice & video calling, large media sharing up to 2GB, rich broadcast channels, stories, and instantaneous multi-device synchronization between mobile and web.',
    challenge:
      'Users needed an ultra-fast, clean messaging experience without intrusive platform locks or sluggish media uploads during peak mobile network hours.',
    solution:
      'Developed a distributed low-latency WebSockets messaging pipeline with adaptive-bitrate voice/video streaming codecs and instant cross-platform synchronization.',
    results: [
      'Sub-15ms message delivery across mobile networks',
      'Flawless HD audio and video calling even on congested 3G/4G bands',
      'Direct file transfers supporting up to 2GB per asset',
      'Live synchronization across Web and Google Play Store mobile client',
    ],
    metrics: [
      { label: 'Latency', value: '<15ms' },
      { label: 'Max File', value: '2 GB' },
      { label: 'Call Stream', value: '60 FPS HD' },
      { label: 'Sync Speed', value: 'Instant' },
    ],
    tags: ['Real-Time WebSockets', 'Voice/Video Engine', 'Cross-Platform Sync', 'Channels & Status', 'Play Store Live'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'indogram',
    title: 'Indogram',
    subtitle: 'Supercharged Sovereign Cloud Messenger, Channels & Community Platform',
    category: 'Sovereign Tech',
    client: 'Gothwad Tech Sovereign Labs (Play Store & Web Release)',
    year: '2024 - Present',
    description:
      'An enterprise-grade sovereign cloud messaging client and community ecosystem. Engineered with infinite cloud storage, massive 200,000+ member group communities, broadcast channels with unlimited reach, and a powerful bot automation platform.',
    challenge:
      'Traditional device-bound messaging apps struggle with local storage clutter, single-device constraints, and group size limitations for large Indian developer communities.',
    solution:
      'Architected a distributed cloud server cluster with zero-local-storage requirement, unlimited searchable cloud archives, and an extensible bot mini-app runtime.',
    results: [
      'Support for communities with up to 200,000 active participants',
      'Unlimited cloud media storage with instant streaming from edge servers',
      'Programmable automation bots and custom interactive web apps',
      'Independent multi-device cloud logins across web and mobile apps',
    ],
    metrics: [
      { label: 'Community Cap', value: '200k+' },
      { label: 'Cloud Space', value: 'Infinite' },
      { label: 'Channel Reach', value: 'Unlimited' },
      { label: 'Device Logins', value: 'Multi-Device' },
    ],
    tags: ['Cloud Messenger', 'Channel Broadcasts', 'Bot Runtime', 'Unlimited Cloud', 'Play Store Live'],
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'zenith-business-erp',
    title: 'Zenith Business Management & Operations ERP',
    subtitle: 'Custom Lead CRM, Staff Attendance, Quotations & Revenue Analytics',
    category: 'Business & Enterprise',
    client: 'Zenith Logistics & Manufacturing (120+ Employees)',
    year: '2024',
    description:
      'Custom management software and cloud dashboard replacing fragmented spreadsheets with unified CRM, automated quotation generators, geo-fenced staff attendance, and real-time revenue analytics.',
    challenge:
      'Sales team was losing leads in scattered WhatsApp chats, quotation approvals took days, and attendance tracking was unreliable.',
    solution:
      'Engineered a centralized web dashboard and Android admin app with automated WhatsApp lead capture and one-click PDF quotation generation.',
    results: [
      'Lead conversion rate increased by 45% with automated follow-up reminders',
      'Quotation generation time reduced from 3 hours to 90 seconds',
      '100% accurate geo-fenced staff clock-in and payroll calculation',
    ],
    metrics: [
      { label: 'Lead Conversion', value: '+45%' },
      { label: 'Quote Speed', value: '90s' },
      { label: 'Staff Managed', value: '120+' },
      { label: 'Hours Saved', value: '25 hrs/wk' },
    ],
    tags: ['Custom ERP', 'CRM Pipeline', 'React 19', 'PostgreSQL', 'PDF Engine', 'WhatsApp CRM'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'gothwad-cloud-console',
    title: 'Gothwad Cloud Orchestrator',
    subtitle: 'High-Throughput Edge Infrastructure & Microservices Dashboard',
    category: 'Fintech & Cloud',
    client: 'Enterprise SaaS Clients & Internal Ops',
    year: '2024',
    description:
      'An enterprise cloud management portal built to orchestrate edge containers, monitor API response latency, and dynamically scale microservices across Cloudflare Edge and AWS regions.',
    challenge:
      'Managing distributed microservices with complex multi-cloud monitoring often caused configuration errors and unexpected cloud billing spikes.',
    solution:
      'Built a unified real-time dashboard featuring WebSockets telemetry, zero-trust API gateway routing, and automated cost optimization alarms.',
    results: [
      'Processed over 15M+ edge requests per day at sub-12ms latency',
      'Reduced cloud hosting overhead costs by 38% for enterprise clients',
      'Zero-downtime deployment pipeline executed across 12 distributed regions',
    ],
    metrics: [
      { label: 'Requests/Day', value: '15M+' },
      { label: 'P99 Latency', value: '<12ms' },
      { label: 'Cost Reduced', value: '38%' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
    tags: ['Cloudflare Workers', 'React 19', 'TypeScript', 'Docker', 'Redis', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'bharatpay-fintech',
    title: 'BharatPay NextGen POS & Gateway',
    subtitle: 'High-Speed UPI, QR & Card Checkout Engine for Retail Merchants',
    category: 'Web Platforms',
    client: 'Fintech Merchant Network',
    year: '2023 - 2024',
    description:
      'A robust, PCI-DSS compliant financial settlement and merchant POS platform facilitating instant UPI QR code generation, webhook callbacks, and ledger accounting for over 5,000+ Indian retail businesses.',
    challenge:
      'High transaction failure rates during peak festival sales and slow merchant settlement reconciliation.',
    solution:
      'Engineered an event-driven architecture using Kafka streams and distributed PostgreSQL clustering with automated failover retry queues.',
    results: [
      'Achieved 99.8% transaction success rate during peak rush hours',
      'Instant settlement reconciliation under 1.5 seconds',
      'Handled ₹45+ Crore in monthly transaction volume securely',
    ],
    metrics: [
      { label: 'Monthly Volume', value: '₹45+ Cr' },
      { label: 'Success Rate', value: '99.8%' },
      { label: 'Active Merchants', value: '5,000+' },
      { label: 'Settlement Speed', value: '1.5s' },
    ],
    tags: ['Next.js', 'UPI Gateway', 'Node.js', 'PostgreSQL', 'PCI-DSS', 'Razorpay API'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'sovereign-shield-cyber',
    title: 'SovereignShield Cyber Command',
    subtitle: 'Zero-Trust Network Sentinel & Threat Intelligence Platform',
    category: 'Sovereign Systems',
    client: 'Defense & Enterprise Security Audit Partners',
    year: '2024',
    description:
      'An indigenous cybersecurity platform that inspects outbound traffic, detects data exfiltration anomalies, and neutralizes malicious botnets in real-time.',
    challenge:
      'Detecting zero-day vulnerabilities and stealth data scraping without introducing network latency to internal corporate networks.',
    solution:
      'Created an eBPF-based packet filter combined with lightweight on-device machine learning classifiers running at the kernel level.',
    results: [
      'Blocked 2.4 Million malicious telemetry queries and spoofed IP attacks',
      'Zero false positives across critical banking and defense audit trials',
      'Sub-millisecond packet inspection overhead (<0.2ms)',
    ],
    metrics: [
      { label: 'Attacks Blocked', value: '2.4M+' },
      { label: 'Inspection Delay', value: '<0.2ms' },
      { label: 'Data Protected', value: '100% In-Country' },
      { label: 'Zero-Day Catch', value: '99.2%' },
    ],
    tags: ['eBPF', 'Rust', 'Zero-Trust', 'WAF', 'Cybersecurity', 'Aatmanirbhar'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'eduvigyan-adaptive-lms',
    title: 'EduVigyan Adaptive LMS & Virtual Labs',
    subtitle: 'Interactive STEM Learning Platform for 100k+ Indian Students',
    category: 'Mobile Apps',
    client: 'National EdTech Foundation',
    year: '2023 - 2024',
    description:
      'A cross-platform mobile and web learning application providing offline-first video lectures, interactive 3D virtual science lab simulations, and regional language quizzes.',
    challenge:
      'Students in tier-2 and tier-3 rural areas suffered from poor internet connectivity and could not stream high-bandwidth video lessons.',
    solution:
      'Implemented progressive video slicing with P2P mesh distribution and offline indexed storage, allowing lessons to run smoothly on 2G/3G networks.',
    results: [
      'Onboarded 120,000+ active students across Rajasthan, UP, and Maharashtra',
      'Reduced video bandwidth requirement by 60% without visual quality loss',
      '4.8 rating on Google Play Store with over 80,000 student reviews',
    ],
    metrics: [
      { label: 'Active Students', value: '120k+' },
      { label: 'Bandwidth Saved', value: '60%' },
      { label: 'Play Store Rating', value: '4.8 ★' },
      { label: 'Offline Lessons', value: '100%' },
    ],
    tags: ['React Native', 'Offline SQLite', 'WebRTC', 'FastAPI', 'EdTech'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'healthpulse-telemed',
    title: 'HealthPulse Smart Clinic & Diagnostics',
    subtitle: 'HIPAA & ABDM Compliant Telemedicine & E-Prescription Suite',
    category: 'Web Platforms',
    client: 'Healthcare Hospital Consortium',
    year: '2024',
    description:
      'A comprehensive digital health suite connecting specialized doctors with remote clinics, integrating Ayushman Bharat Digital Mission (ABDM) health IDs and instant video consultations.',
    challenge:
      'Fragmented patient medical records and high latency in rural doctor video consultations.',
    solution:
      'Designed end-to-end encrypted WebRTC video pipelines with digital signature prescription generation and ABDM ABHA ID interoperability.',
    results: [
      'Facilitated 45,000+ tele-consultations across 80+ rural healthcare clinics',
      'Automated instant PDF e-prescriptions with cryptographic doctor verification',
      '99.95% uptime during critical 24/7 medical emergency operations',
    ],
    metrics: [
      { label: 'Consultations', value: '45,000+' },
      { label: 'Clinics Connected', value: '80+' },
      { label: 'ABDM Verified', value: '100%' },
      { label: 'Latency', value: '<50ms' },
    ],
    tags: ['WebRTC', 'ABDM Standards', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

// EXACT 12 MEMBERS: Founder, CEO, Co-Founder & CTO, COO + 8 Dedicated Technical Experts
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pawan-gothwad',
    name: 'Pawan Gothwad',
    role: 'Founder & Chief Visionary Officer',
    titleBadge: 'Visionary Tech Leader, Chief Architect & Creator of Gothwad Browser',
    tier: 'Executive Leadership',
    bio: 'Pawan is the founding force behind Gothwad Tech and the creator of Gothwad Browser. Passionate about Indian sovereign software (Aatmanirbhar Bharat), he leads deep-tech innovation, core product architecture, and engineering excellence to build world-beating software products.',
    experience: '8+ Years in Deep-Tech & System Architecture',
    focusArea: 'Sovereign Tech Vision, Product Strategy, High-Performance Systems',
    keySkills: ['Product Architecture', 'Executive Leadership', 'System Design', 'Strategic Scaling', 'Aatmanirbhar Vision'],
    initials: 'PG',
    accentGradient: 'from-amber-500 via-orange-500 to-red-500',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    email: 'pawan@gothwadtech.com',
    linkedin: 'https://linkedin.com/in/pawangothwad',
    github: 'https://github.com/pawangothwad',
  },
  {
    id: 'nishant',
    name: 'Nishant',
    role: 'Chief Executive Officer (CEO)',
    titleBadge: 'Executive Governance, Corporate Strategy & Business Growth Lead',
    tier: 'Executive Leadership',
    bio: 'Leads global corporate scaling, strategic enterprise partnerships, client acquisition, and operational excellence for Gothwad Tech. Dedicated to positioning Gothwad Tech as India\'s foremost sovereign software giant and trusted technology partner.',
    experience: '8+ Years in Tech Strategy & Corporate Scaling',
    focusArea: 'Corporate Governance, Enterprise Partnerships, Global Scaling',
    keySkills: ['Executive Governance', 'Strategic Growth', 'Client Relations', 'Enterprise Scaling', 'Tech Management'],
    initials: 'NS',
    accentGradient: 'from-blue-600 via-indigo-600 to-violet-600',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    email: 'nishant@gothwadtech.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'vishnu-meena',
    name: 'Vishnu Meena',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    titleBadge: 'Deep-Tech & Distributed Systems Architect',
    tier: 'Executive Leadership',
    bio: 'Co-Founder overseeing global technical architecture, native compiler toolchains, and high-throughput server backends. Co-architected the Gothwad Browser microkernel, TurboShield engine, and sovereign cloud infrastructure.',
    experience: '8+ Years in C++, Rust & Cloud Infrastructure',
    focusArea: 'Native Browser Microkernels, Distributed Cloud & Cryptography',
    keySkills: ['Rust / C++', 'Microservices', 'Distributed Systems', 'Kernel Optimizations', 'Cyber Security'],
    initials: 'VM',
    accentGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    email: 'vishnu@gothwadtech.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: 'Chief Operating Officer (COO)',
    titleBadge: 'Enterprise Operations & Client Delivery Lead',
    tier: 'Executive Leadership',
    bio: 'Leads global operations, client success management, and delivery SLAs. Ananya ensures every software project ordered by clients is scoped with precision and delivered ahead of schedule.',
    experience: '7+ Years in Tech Operations & Enterprise Delivery',
    focusArea: 'Operational Excellence, Agile Delivery, Client Partnership',
    keySkills: ['SLA Management', 'Agile Operations', 'Enterprise Consulting', 'Client Success', 'Resource Scaling'],
    initials: 'AD',
    accentGradient: 'from-purple-500 via-pink-500 to-rose-500',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    email: 'support@gothwadtech.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  // 8 DEDICATED ENGINEERING & TECH EXPERTS
  {
    id: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'Principal AI & Machine Learning Researcher',
    titleBadge: 'LLM & Edge Intelligence Specialist',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Builds low-latency on-device AI models, transformer optimizations, and generative AI pipelines that power intelligent features in Gothwad applications without user data tracking.',
    experience: '5+ Years in Machine Learning & NLP',
    focusArea: 'Generative AI, ONNX Runtime, Quantized Edge Models',
    keySkills: ['PyTorch', 'Gemini SDK', 'Quantization', 'FastAPI', 'Vector Databases'],
    initials: 'AM',
    accentGradient: 'from-violet-500 to-indigo-600',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'priya-sundaram',
    name: 'Priya Sundaram',
    role: 'Lead Full-Stack Architect',
    titleBadge: 'Cloud-Native & Distributed Web Expert',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Architects enterprise web solutions using React, Next.js, and high-performance TypeScript microfrontends. Guarantees 100/100 Lighthouse performance metrics on all deployed web apps.',
    experience: '6+ Years in Modern Web Engineering',
    focusArea: 'Edge Rendering, Microfrontends, Performance Optimization',
    keySkills: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    initials: 'PS',
    accentGradient: 'from-blue-600 to-cyan-600',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'devendra-rathore',
    name: 'Devendra Rathore',
    role: 'Mobile Platforms Lead',
    titleBadge: 'Android Core & Multi-Engine Mobile Specialist',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Specialist in Android NDK, Kotlin native threading, and memory optimization. Key contributor to Gothwad Browser’s multi-threaded download manager and lightning rendering pipeline.',
    experience: '5+ Years in Mobile Platform Engineering',
    focusArea: 'Android NDK, JNI, Kotlin Coroutines, React Native',
    keySkills: ['Kotlin', 'Android NDK', 'JNI / C++', 'React Native', 'Offline Storage'],
    initials: 'DR',
    accentGradient: 'from-green-500 to-emerald-600',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'sneha-bhattacharya',
    name: 'Sneha Bhattacharya',
    role: 'Cloud Security & DevSecOps Lead',
    titleBadge: 'Zero-Trust Cloud & WAF Architect',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Designs immutable cloud security perimeters, automated CI/CD pipelines, and zero-trust edge infrastructure on Cloudflare Pages and AWS to safeguard client platforms from cyber threats.',
    experience: '5+ Years in DevSecOps & Cloud Security',
    focusArea: 'Cloudflare Edge, Docker, Kubernetes, WAF, Zero-Trust',
    keySkills: ['Cloudflare Pages', 'Terraform', 'Docker', 'Kubernetes', 'Penetration Testing'],
    initials: 'SB',
    accentGradient: 'from-red-500 to-rose-600',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'sameer-khan',
    name: 'Sameer Khan',
    role: 'Lead Systems & Browser Core Engineer',
    titleBadge: 'Compiled Rust / C++ Performance Specialist',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Deep systems engineer who tunes memory allocations, cache line optimizations, and native network stack execution. Authored the TurboShield ad-blocking pattern matcher.',
    experience: '5+ Years in Systems Programming',
    focusArea: 'Memory Allocators, Rust WebAssembly, Network Sockets',
    keySkills: ['Rust', 'C++20', 'WebAssembly', 'eBPF', 'Network Protocols'],
    initials: 'SK',
    accentGradient: 'from-amber-600 to-orange-700',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'meera-nambiar',
    name: 'Meera Nambiar',
    role: 'Lead UI/UX Product Designer',
    titleBadge: 'Design Systems & Human-Centered Interface Specialist',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Creates elegant, accessible, and high-conversion user interfaces. Crafts comprehensive Figma design systems and intuitive user journeys for Gothwad Tech products and client web portals.',
    experience: '4+ Years in Digital Product & Motion Design',
    focusArea: 'Design Systems, Micro-interactions, Accessibility (a11y)',
    keySkills: ['Figma', 'Design Systems', 'Tailwind CSS', 'Motion Design', 'User Research'],
    initials: 'MN',
    accentGradient: 'from-pink-500 to-purple-600',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'tarun-verma',
    name: 'Tarun Verma',
    role: 'Database & Microservices Architect',
    titleBadge: 'High-Concurrency Data & API Specialist',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Designs fault-tolerant database schemas, Redis caching layers, and high-throughput REST and GraphQL APIs capable of handling tens of thousands of concurrent client transactions.',
    experience: '5+ Years in High-Volume Database Engineering',
    focusArea: 'PostgreSQL Clustering, Redis Caching, High Concurrency',
    keySkills: ['PostgreSQL', 'Redis', 'Node.js', 'Go', 'GraphQL'],
    initials: 'TV',
    accentGradient: 'from-teal-500 to-cyan-700',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'ishita-banerjee',
    name: 'Ishita Banerjee',
    role: 'QA Automation & Performance Benchmarking Lead',
    titleBadge: 'Zero-Defect Quality Assurance & Load Testing Lead',
    tier: 'Core Engineering & Deep Tech',
    bio: 'Guarantees flawless software releases through automated Playwright end-to-end tests, stress tests, and automated benchmark verification across hundreds of device configurations.',
    experience: '4+ Years in Automated QA & Reliability Testing',
    focusArea: 'Playwright, Automated Benchmarking, Load & Stress Testing',
    keySkills: ['Playwright', 'JMeter', 'Appium', 'CI/CD Automation', 'Regression Testing'],
    initials: 'IB',
    accentGradient: 'from-yellow-500 to-amber-600',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Rajesh Singhania',
    role: 'Chief Technology Officer (CTO)',
    company: 'FinVanguard Technologies',
    location: 'Mumbai, India',
    rating: 5,
    projectType: 'High-Throughput Fintech Portal & Cloud Migration',
    quote:
      'Gothwad Tech delivered our complete payment orchestrator in just 4 weeks with zero downtime. Their technical rigor, deep-tech mindset, and speed are unmatched in the Indian software landscape. Truly representing the gold standard of Aatmanirbhar software engineering.',
    date: 'January 2024',
    verified: true,
    avatarText: 'RS',
  },
  {
    id: 't-2',
    clientName: 'Sarah Jenkins',
    role: 'VP of Product Innovation',
    company: 'OmniStream Media Corp',
    location: 'Singapore & London',
    rating: 5,
    projectType: 'Custom Native Kiosk Browser & Web Engine',
    quote:
      'We needed an ultra-lightweight custom browser engine for our interactive retail terminals. Gothwad Tech delivered a solution based on their Gothwad Browser tech that cut our device RAM consumption by over 70% and eliminated lag completely. Pawan and his team are true masters of low-level systems.',
    date: 'November 2023',
    verified: true,
    avatarText: 'SJ',
  },
  {
    id: 't-3',
    clientName: 'Dr. Alok Verma',
    role: 'Founder & Managing Director',
    company: 'Arogya Bharat Digital Health',
    location: 'Jaipur & Delhi, India',
    rating: 5,
    projectType: 'Cross-Platform Telemedicine Mobile App',
    quote:
      'Working with Gothwad Tech felt like having our own elite in-house engineering team. They delivered our ABDM-compliant healthcare app on time with a pristine user interface. 45,000+ rural patients have already booked consultations without a single server crash.',
    date: 'March 2024',
    verified: true,
    avatarText: 'AV',
  },
  {
    id: 't-4',
    clientName: 'Vikram Joshi',
    role: 'Head of Digital Transformation',
    company: 'Apex Logistics & Supply Chain',
    location: 'Bengaluru, India',
    rating: 5,
    projectType: 'Enterprise Web ERP & Real-Time Fleet Tracker',
    quote:
      'The responsiveness, clean code architecture, and transparent communication from Pawan and the Gothwad Tech team was phenomenal. Their custom order estimator gave us an exact quote with zero hidden costs, and they delivered 4 days before the deadline!',
    date: 'May 2024',
    verified: true,
    avatarText: 'VJ',
  },
];

export const FAQS = [
  {
    question: 'What makes Gothwad Browser faster and lighter than Google Chrome and Firefox?',
    answer:
      'Gothwad Browser is built with a compiled Rust/C++ microkernel designed specifically to eliminate background data harvesting, bloatware, and redundant toolbars. It features native TurboShield ad-blocking that stops advertising scripts before network download, combined with intelligent memory tab suspension that drops RAM consumption by up to 75%.',
  },
  {
    question: 'How do I place an order for my custom website, mobile app, or software project?',
    answer:
      'You can easily use our interactive Client Order & Estimator Suite on this website! Select your required platform (Web, Mobile App, SaaS, Custom Browser), pick your features, review the live instant cost and timeline estimate, and submit your inquiry. Our Founder Pawan Gothwad or executive delivery team will contact you within 2 to 4 business hours via WhatsApp or Email.',
  },
  {
    question: 'What is the philosophy of Aatmanirbhar Bharat at Gothwad Tech?',
    answer:
      'We believe India should not merely be a consumer of foreign software architectures but the primary innovator of sovereign, secure, and world-class digital products. We build sovereign technologies—from native browser engines to enterprise cloud platforms—that keep data secure within India while delivering performance that beats Silicon Valley standards.',
  },
  {
    question: 'Do you provide full source code ownership and post-launch maintenance?',
    answer:
      'Yes, 100%! All software developed for your business comes with complete IP ownership, clean Git repository handover, comprehensive technical documentation, and 3 months of complimentary warranty and security maintenance.',
  },
  {
    question: 'Will our website or application be ready for deployment on Cloudflare Pages and modern Edge CDNs?',
    answer:
      'Absolutely. All Gothwad Tech web solutions are architected from the ground up for edge deployments like Cloudflare Pages, AWS CloudFront, and Vercel, ensuring sub-second load times worldwide with 99.99% uptime and bulletproof DDoS protection.',
  },
];
