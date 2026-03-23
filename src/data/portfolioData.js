export const portfolioData = {
  hero: {
    name: "Praphull Kumar",
    tagline: "AI/ML Developer | B.Tech CSE Student",
    summary: "Passionate about building intelligent systems and creating clean, modern web experiences. Specializing in deep learning, computer vision, and full-stack integration.",
    resumeLink: "#", // Add resume PDF path
  },
  about: {
    biography: "I am a driven Bachelor of Technology student majoring in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. With an insatiable curiosity for solving complex problems, I craft modern applications that leverage machine learning algorithms to make an impact. My journey is characterized by continuous learning and pushing technical boundaries.",
    education: [
      {
        institution: "Institute of Engineering and Management, Kolkata",
        degree: "B.Tech in Computer Science Engineering (AI & ML)",
        duration: "2023 - 2027 (Expected)"
      }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "SQL"]
    },
    {
      category: "Web Technologies",
      items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Node.js"]
    },
    {
      category: "AI & Machine Learning",
      items: ["CNN", "Deep Learning", "Image Processing", "Transfer Learning", "ResNet", "TensorFlow/Keras"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "REST APIs"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Pneumonia Detection using CNN and ResNet",
      description: "A deep learning application utilizing transfer learning techniques to accurately classify chest X-rays. Designed to aid medical professionals with rapid preliminary screening.",
      technologies: ["Python", "TensorFlow", "Keras", "ResNet", "CNN"],
      githubUrl: "https://github.com/praphulln19/Pneumonia_Detection",
      liveUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Brain Tumor Detection using CNN",
      description: "Developed a convolutional neural network with advanced preprocessing and data augmentation to classify MRI scans seamlessly and reliably.",
      technologies: ["Python", "Deep Learning", "OpenCV", "CNN"],
      githubUrl: "https://github.com/praphulln19/Pneumonia_Detection",
      liveUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Agentic Web Portfolio",
      description: "A highly dynamic, fully responsive personal portfolio designed with React and Tailwind CSS, featuring glassmorphism elements and smooth framing animations.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/praphulln19/Portfolio",
      liveUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    }
  ],
  activities: [
    {
      title: "Member of Inter-College Kabaddi Team",
      description: "Represented the college at various sports meets, exhibiting teamwork, strategic thinking, and dedication.",
      icon: "Activity" // Lucide icon name
    }
  ],
  certifications: [
    {
      title: "How to Boost Your Productivity with AI Tools",
      issuer: "Online platform / Workshop",
      date: "2024",
      icon: "Award"
    },
    {
      title: "Critical Thinking and Problem Solving",
      issuer: "Certification Program",
      date: "2023",
      icon: "Brain"
    }
  ],
  contact: {
    email: "praphulln21@gmail.com",
    phone: "+91 9876543210",
    linkedin: "https://www.linkedin.com/in/praphulln21/",
    github: "https://github.com/praphulln19",
    location: "Kolkata, India"
  }
};
