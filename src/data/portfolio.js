import {
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  DatabaseZap,
  GraduationCap,
  Github,
  Hammer,
  MapPin,
  Microchip,
  Network,
  Phone,
  PlugZap,
  RadioTower,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Wrench,
} from 'lucide-react';

export const contact = {
  email: 'Adrian07gozun@gmail.com',
  phone: '0939 692 0721',
  location: 'Bocaue, Bulacan',
  github: 'https://github.com/Gabboy007',
};

export const navItems = [
  { label: 'Profile', href: '#home' },
  { label: 'Modes', href: '#modes' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const identityFacts = [
  {
    label: 'Base',
    value: contact.location,
    icon: MapPin,
  },
  {
    label: 'Program',
    value: 'BS Computer Engineering',
    icon: GraduationCap,
  },
  {
    label: 'Technical training',
    value: 'EIM NC II',
    icon: ShieldCheck,
  },
  {
    label: 'Languages',
    value: 'English + Filipino',
    icon: Users,
  },
];

export const proofPoints = [
  { label: 'Dynamics 365 and Power Platform', value: 'D365' },
  { label: 'Arduino systems and mentoring', value: '2023+' },
  { label: 'Robotics and automation foundation', value: '2020+' },
  { label: 'Software, hardware, and operations', value: '3 lanes' },
];

export const photos = {
  hero: {
    src: '/images/profile.jpg',
    alt: 'John Adrian Gozun profile photo',
    label: 'John Adrian Gozun',
    title: 'Computer engineering student with a hands-on systems mindset',
  },
};

export const operatingModes = [
  {
    title: 'Systems Tuner',
    icon: DatabaseZap,
    description:
      'Configures, supports, and improves business systems with a practical eye for cleaner workflows.',
    points: ['Dynamics 365', 'Power Platform', 'ERP/CRM support'],
  },
  {
    title: 'Circuit Builder',
    icon: PlugZap,
    description:
      'Moves comfortably through Arduino logic, wiring, testing, and hands-on prototype iteration.',
    points: ['Arduino programming', 'Circuit wiring', 'System optimization'],
  },
  {
    title: 'Rapid Fixer',
    icon: Wrench,
    description:
      'Troubleshoots computers, peripherals, installations, and upgrades when downtime needs to stay low.',
    points: ['Diagnostics', 'Maintenance', 'Technical support'],
  },
  {
    title: 'Calm Mentor',
    icon: Users,
    description:
      'Guides students through research builds, documentation, presentations, and defense preparation.',
    points: ['Student mentoring', 'Research support', 'Clear explanations'],
  },
];

export const education = [
  {
    title: 'Bachelor of Science in Computer Engineering',
    school: "Dr. Yanga's Colleges, Inc.",
    period: '2022 - 2026',
    icon: GraduationCap,
  },
  {
    title: 'Electrical Installation and Maintenance NC II',
    school: 'TESDA PTC Calumpit',
    period: '2024 - 2025',
    icon: ShieldCheck,
  },
];

export const experiences = [
  {
    role: 'Junior Data Analyst',
    company: 'Dynamics Plus Max IT Solutions',
    period: '2025 - 2026',
    icon: DatabaseZap,
    details:
      'Gained hands-on experience with Microsoft Dynamics 365 and Power Platform, contributing to ERP/CRM configuration, system support, business process optimization, documentation, troubleshooting, and workflow automation.',
    tags: ['Dynamics 365', 'Power Platform', 'ERP/CRM', 'Documentation'],
  },
  {
    role: 'Freelance Arduino Developer & Mentor',
    company: 'Independent',
    period: '2023 - 2025',
    icon: Microchip,
    details:
      'Designed and programmed Arduino-based systems while mentoring high school and senior high school students through circuit wiring, coding, documentation, presentations, and research defense preparation.',
    tags: ['Arduino', 'Circuits', 'Mentoring', 'Research builds'],
  },
  {
    role: 'Computer Tech',
    company: "Dr. Yanga's Colleges, Inc.",
    period: '2023 - 2024',
    icon: Wrench,
    details:
      'Provided technical support and maintenance for computer systems and peripherals, assisting students and faculty with hardware/software troubleshooting, installations, and system upgrades.',
    tags: ['Support', 'Troubleshooting', 'Installations', 'Upgrades'],
  },
  {
    role: 'Robotics Member',
    company: "Dr. Yanga's Colleges, Inc.",
    period: '2020 - 2022',
    icon: RadioTower,
    details:
      'Worked in a high-pressure self-driving car development environment with a focus on precision, innovation, fast decisions, collaboration, and disciplined problem-solving.',
    tags: ['Robotics', 'Automation', 'Precision', 'Teamwork'],
  },
  {
    role: 'Delivery & Operations',
    company: 'Golden City Ricemill',
    period: '2020 - 2021',
    icon: BriefcaseBusiness,
    details:
      'Supported rice mill operations by managing transportation logistics and processing workflows with attention to efficiency, reliability, quality control, and timing.',
    tags: ['Logistics', 'Operations', 'Workflow', 'Reliability'],
  },
];

export const visualStories = [
  {
    src: '/images/arduino-placeholder.svg',
    alt: 'Arduino project illustration with board traces and signal lines',
    kicker: 'Embedded builds',
    title: 'Code that has to touch real wiring.',
    text: 'Arduino work is presented as a craft lane, not a throwaway bullet: logic, circuits, tests, and fixes all in one loop.',
  },
  {
    src: '/images/workbench-placeholder.svg',
    alt: 'Technical workbench illustration with tools and electronics',
    kicker: 'Hands-on support',
    title: 'Comfortable where the problem is physical.',
    text: 'Computer repair, installations, EIM training, and maintenance work give the site a grounded hardware identity.',
  },
  {
    src: '/images/systems-placeholder.svg',
    alt: 'Systems workflow illustration with connected process blocks',
    kicker: 'Business systems',
    title: 'Dashboards, documents, and process flow.',
    text: 'D365 and Power Platform experience sits beside hardware work as part of the same practical systems mindset.',
  },
];

export const skills = [
  {
    title: 'Business Systems',
    kicker: 'Configure',
    icon: Network,
    items: [
      'Microsoft Dynamics 365',
      'Power Platform',
      'ERP/CRM configuration',
      'Business process optimization',
    ],
  },
  {
    title: 'Embedded Electronics',
    kicker: 'Prototype',
    icon: Cpu,
    items: ['Arduino programming', 'Circuit wiring', 'Hardware testing', 'System optimization'],
  },
  {
    title: 'Technical Support',
    kicker: 'Repair',
    icon: Hammer,
    items: ['Computer repair', 'Peripheral support', 'System upgrades', 'Hardware/software diagnostics'],
  },
  {
    title: 'Working Style',
    kicker: 'Lead',
    icon: BrainCircuit,
    items: ['Problem-solving', 'Leadership', 'Time management', 'Organizational skills'],
  },
  {
    title: 'Field Mindset',
    kicker: 'Operate',
    icon: Settings2,
    items: ['Logistics coordination', 'Quality control', 'Workflow support', 'Fast-paced execution'],
  },
  {
    title: 'Mentoring',
    kicker: 'Explain',
    icon: Sparkles,
    items: ['Student guidance', 'Research documentation', 'Presentation prep', 'Project defense support'],
  },
  {
    title: 'Software Logic',
    kicker: 'Build',
    icon: TerminalSquare,
    items: ['Coding fundamentals', 'Data analysis', 'Troubleshooting flow', 'Automation mindset'],
  },
  {
    title: 'Electrical Training',
    kicker: 'Wire',
    icon: PlugZap,
    items: ['Electrical installation basics', 'Maintenance training', 'Safety awareness', 'Hands-on discipline'],
  },
];

export const contactLinks = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Send },
  { label: contact.phone, href: 'tel:+639396920721', icon: Phone },
  { label: contact.location, href: '#home', icon: MapPin },
  { label: 'github.com/Gabboy007', href: contact.github, icon: Github, external: true },
];
