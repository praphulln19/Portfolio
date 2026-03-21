import { motion } from 'framer-motion';
import { Award, Brain, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Award': return <Award className="w-8 h-8 text-blue-500" />;
    case 'Brain': return <Brain className="w-8 h-8 text-purple-500" />;
    case 'Activity': return <Activity className="w-8 h-8 text-green-500" />;
    default: return <Award className="w-8 h-8 text-blue-500" />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <Activity className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Activities</h2>
            </div>
            
            <div className="space-y-6">
              {portfolioData.activities.map((activity, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-slate-800 rounded-xl">
                    {getIconComponent(activity.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{activity.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {getIconComponent(cert.icon)}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
