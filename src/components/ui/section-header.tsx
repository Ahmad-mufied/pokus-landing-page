import React from 'react';
import BlurText from './blur-text';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center mb-16 ${className || ''}`}>
      <BlurText
        text={title}
        className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
        startAnimation={true}
        delay={0}
      />
      <BlurText
        text={subtitle}
        className="text-xl text-slate-300 max-w-2xl mx-auto"
        startAnimation={true}
        delay={0.2}
      />
    </div>
  );
};

export default SectionHeader; 