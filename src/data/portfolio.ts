export type Accent = "flare" | "volt" | "signal" | "pulse";

export const profile = {
  name: "Praphull Kumar",
  initials: "PK",
  role: "AI/ML Developer",
  location: "Kolkata, India",
  tagline: "I build intelligent systems and full-stack products that ship.",
  eyebrow: "B.Tech CSE (AI & ML) · Institute of Engineering and Management",
  summary:
    "Third-year Computer Science student specializing in AI & Machine Learning. I spend my time training models that see and full-stack apps that people actually use — chest X-ray classifiers, finance dashboards, browser tools — and shipping all of it myself, end to end.",
  bio: [
    "I'm a B.Tech Computer Science student at the Institute of Engineering and Management, Kolkata, specializing in AI & Machine Learning, expected to graduate in 2027.",
    "My work sits at the intersection of deep learning and full-stack engineering: convolutional networks for medical imaging on one side, React and TypeScript products on the other. I like problems where both halves matter — a model is only useful if someone can actually reach it.",
    "Off-screen, I play for my college's inter-college Kabaddi team — a good reminder that shipping under pressure isn't just a software skill.",
  ],
  email: "praphulln21@gmail.com",
  github: "https://github.com/praphulln19",
  linkedin: "https://www.linkedin.com/in/praphulln21/",
};

export const stats = [
  { value: "06", label: "Projects shipped", accent: "flare" as Accent },
  { value: "03", label: "Years building", accent: "volt" as Accent },
  { value: "02", label: "Certifications earned", accent: "signal" as Accent },
];

export const methodSteps = [
  {
    index: "1",
    title: "Learn",
    detail: "Research the problem space — the data, the domain, the prior art — before touching an editor.",
  },
  {
    index: "2",
    title: "Design",
    detail: "Sketch the system: data flow, model architecture or component tree, the interface that sits on top.",
  },
  {
    index: "3",
    title: "Build",
    detail: "Implement in tight loops. Train, evaluate, adjust — or code, render, adjust. Same rhythm either way.",
  },
  {
    index: "4",
    title: "Validate",
    detail: "Check against real numbers: accuracy and loss curves for a model, real usage for a product.",
  },
  {
    index: "5",
    title: "Ship",
    detail: "Deploy it, document it, hand it off. Nothing counts until it's live and someone else can use it.",
  },
];

export type Project = {
  id: string;
  letter: string;
  accent: Accent;
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "Open Source";
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  visual: "finance" | "glass" | "invoice" | "chat" | "scan";
  /** Real product screenshot path, when available. Falls back to the abstract `visual` art otherwise. */
  screenshot?: string;
  /** width / height of the screenshot, used to size slide cards to their real shape. */
  screenshotAspect?: number;
};

export const projects: Project[] = [
  {
    id: "finpilot",
    letter: "S",
    accent: "flare",
    name: "FinPilot",
    tagline: "AI-first money clarity for India",
    description:
      "A premium personal finance agent that reads your money patterns, surfaces the right action, and keeps your budget calm — an AI financial score and assistant instead of another spreadsheet.",
    status: "Open Source",
    tech: ["TypeScript", "Next.js", "AI Assistant"],
    githubUrl: "https://github.com/praphulln19/FinPilot",
    visual: "finance",
    screenshot: "/projects/finpilot.png",
    screenshotAspect: 2.106,
  },
  {
    id: "spendly",
    letter: "H",
    accent: "volt",
    name: "Spendly",
    tagline: "Know what you can spend today",
    description:
      "Most trackers tell you what you already spent, which you can't change. Spendly divides what's left across the days that remain and gives you one number, recalculated every morning from what you actually did.",
    status: "Live",
    tech: ["TypeScript", "React", "Vercel"],
    githubUrl: "https://github.com/praphulln19/Spendly",
    liveUrl: "https://spendly-bice-iota.vercel.app/",
    visual: "finance",
    screenshot: "/projects/spendly.png",
    screenshotAspect: 1.437,
  },
  {
    id: "daybreak",
    letter: "I",
    accent: "signal",
    name: "daybreak",
    tagline: "Glassmorphic task tracker",
    description:
      "A deliberately calm, glassmorphic task tracker with smart filtering — the craft project where I slowed down and got the small interactions right.",
    status: "Open Source",
    tech: ["React", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/praphulln19/daybreak",
    visual: "glass",
  },
  {
    id: "invoice-generator",
    letter: "P",
    accent: "pulse",
    name: "Invoice Generator",
    tagline: "Browser-based billing tool",
    description:
      "A lightweight, browser-based invoice generator built for a plywood & board supplier — itemized billing with clean PDF export, no backend required.",
    status: "Live",
    tech: ["JavaScript", "CSS", "PDF Export"],
    githubUrl: "https://github.com/praphulln19/Invoice-Generator",
    liveUrl: "https://supraoninvoice.vercel.app/",
    visual: "invoice",
    screenshot: "/projects/invoice-generator.png",
    screenshotAspect: 1.481,
  },
  {
    id: "ai-chat-exporter",
    letter: "S",
    accent: "flare",
    name: "AI Chat Exporter",
    tagline: "Browser extension",
    description:
      "A browser extension that saves AI chat conversations from ChatGPT, Claude, and Outlier Playground as clean Markdown or Word documents.",
    status: "Open Source",
    tech: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/praphulln19/Ai-Chat-Exporter",
    visual: "chat",
    screenshot: "/projects/ai-chat-exporter.png",
    screenshotAspect: 0.811,
  },
  {
    id: "pneumonia-detection",
    letter: "H",
    accent: "volt",
    name: "Pneumonia Detection",
    tagline: "CNN + transfer learning",
    description:
      "A deep learning model that classifies chest X-rays using transfer learning on ResNet — built to give medical professionals a fast preliminary screening signal.",
    status: "Open Source",
    tech: ["Python", "TensorFlow", "ResNet", "CNN"],
    githubUrl: "https://github.com/praphulln19/Pneumonia_Detection",
    visual: "scan",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    accent: "flare" as Accent,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    accent: "volt" as Accent,
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "AI & ML",
    accent: "signal" as Accent,
    items: ["CNN", "ResNet", "Transfer Learning", "TensorFlow / Keras", "OpenCV", "Deep Learning"],
  },
  {
    category: "Tools & Cloud",
    accent: "pulse" as Accent,
    items: ["Node.js", "Git", "GitHub", "REST APIs", "Vercel", "Figma"],
  },
];

export const certifications = [
  {
    title: "How to Boost Your Productivity with AI Tools",
    issuer: "Online platform / Workshop",
    date: "2024",
  },
  {
    title: "Critical Thinking and Problem Solving",
    issuer: "Certification Program",
    date: "2023",
  },
];

export const education = {
  institution: "Institute of Engineering and Management, Kolkata",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  duration: "2023 – 2027 (Expected)",
};
