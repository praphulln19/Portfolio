import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-gradient block mb-2">
              Praphull Kumar
            </span>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
              Building intelligent systems and clean web experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {portfolioData.hero.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
