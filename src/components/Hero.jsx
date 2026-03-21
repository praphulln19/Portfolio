import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, tagline, summary } = portfolioData.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-red-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
              WELCOME TO MY PORTFOLIO
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              Hi, I'm <span className="text-gradient">{name}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 mb-6">
              {tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10">
              {summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center shadow-lg shadow-blue-500/30"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
