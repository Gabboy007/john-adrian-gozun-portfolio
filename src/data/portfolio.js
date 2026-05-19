import {
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  DatabaseZap,
  GraduationCap,
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
  phone: 'Available on request',
  location: 'Bocaue, Bulacan',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Computer Engineering', value: 'BS CpE' },
  { label: 'Arduino + circuits', value: '2023+' },
  { label: 'ERP/CRM workflows', value: 'D365' },
];

export const photos = {
  hero: {
    src: '/images/profile.jpg',
    alt: 'John Adrian Gozun profile photo',
    label: 'Computer Engineering',
    title: 'Hardware, software, and hands-on systems work',
  },
  tiles: [
    {
      src: '/images/arduino-placeholder.svg',
      alt: 'Arduino electronics project placeholder',
      label: 'Arduino Builds',
    },
    {
      src: '/images/workbench-placeholder.svg',
      alt: 'Technical workbench placeholder',
      label: 'Wiring & Repair',
    },
    {
      src: '/images/systems-placeholder.svg',
      alt: 'Systems and data workflow placeholder',
      label: 'Systems Work',
    },
  ],
};

export const expertise = [
  {
    title: 'Bits & Bytes',
    icon: TerminalSquare,
    accent: 'text-electric',
    description:
      'Software logic, workflow automation, ERP/CRM configuration, data analysis, and systems thinking for cleaner operations.',
    points: ['Microsoft Dynamics 365', 'Data-driven troubleshooting', 'Automation mindset'],
  },
  {
    title: 'Wires & Hardware',
    icon: PlugZap,
    accent: 'text-circuit',
    description:
      'Hands-on electronics, Arduino prototyping, circuit wiring, computer repair, and technical support in real environments.',
    points: ['Arduino-based systems', 'Circuit wiring and testing', 'Hardware diagnostics'],
  },
];

export const education = [
  {
    title: "BS in Computer Engineering",
    school: "Dr. Yanga's Colleges, Inc.",
    period: '2022 - 2026',
    icon: GraduationCap,
  },
  {
    title: 'Electrical Installation and Maintenance NC II',
    school: 'TESDA PTC Calumpit',
    period: 'Certified training',
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
      'Worked across Microsoft Dynamics 365, ERP/CRM configuration, operational data, and workflow automation.',
    tags: ['Dynamics 365', 'ERP/CRM', 'Automation'],
  },
  {
    role: 'Freelance Arduino Developer & Mentor',
    company: 'Independent',
    period: '2023 - 2025',
    icon: Microchip,
    details:
      'Programmed Arduino-based systems, taught circuit wiring, and mentored students through research defenses.',
    tags: ['Arduino', 'Mentoring', 'Circuits'],
  },
  {
    role: 'Computer Tech',
    company: "Dr. Yanga's Colleges Inc.",
    period: '2023 - 2024',
    icon: Wrench,
    details:
      'Delivered technical support, hardware and software troubleshooting, system upgrades, and maintenance work.',
    tags: ['Support', 'Upgrades', 'Diagnostics'],
  },
  {
    role: 'Robotics Member',
    company: 'Self-Driving Car Focus',
    period: '2020 - 2022',
    icon: RadioTower,
    details:
      'Built discipline in precision, innovation, automation, and fast decisions inside a high-pressure robotics environment.',
    tags: ['Robotics', 'Automation', 'Precision'],
  },
  {
    role: 'Logistics & Operations',
    company: 'Golden City Ricemill',
    period: '2020 - 2021',
    icon: BriefcaseBusiness,
    details:
      'Managed transportation logistics and processing workflows with a practical eye for timing, coordination, and reliability.',
    tags: ['Operations', 'Logistics', 'Workflow'],
  },
];

export const skills = [
  {
    title: 'Hardware / Electronics',
    icon: Cpu,
    items: ['Arduino programming', 'Circuit wiring', 'Prototyping', 'Technical troubleshooting'],
  },
  {
    title: 'Software / Data',
    icon: Network,
    items: ['Microsoft Dynamics 365', 'ERP/CRM configuration', 'Data analysis', 'System optimization'],
  },
  {
    title: 'Core Skills',
    icon: BrainCircuit,
    items: ['Leadership', 'Problem-solving', 'Mentoring', 'English and Filipino'],
  },
  {
    title: 'Hands-On Work',
    icon: Hammer,
    items: ['Computer repair', 'Systems upgrades', 'Workflow support', 'Operations coordination'],
  },
];

export const highlights = [
  {
    icon: Settings2,
    title: 'Technical Range',
    text: 'Comfortable moving from software dashboards to wiring benches and repair tools.',
  },
  {
    icon: Users,
    title: 'Mentor Energy',
    text: 'Explains circuits and systems clearly enough for students to defend their work.',
  },
  {
    icon: Sparkles,
    title: 'Builder Mindset',
    text: 'Looks for practical systems that work reliably under real constraints.',
  },
];

export const contactLinks = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Send },
  { label: contact.phone, href: '#contact', icon: Phone },
  { label: contact.location, href: '#contact', icon: MapPin },
];
