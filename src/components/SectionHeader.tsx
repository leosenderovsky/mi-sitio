import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  theme?: 'light' | 'dark';
}

export function SectionHeader({ title, subtitle, theme = 'light' }: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div className="mb-12">
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-[1.3em] md:text-[1.4em] tracking-[3px] uppercase mb-2 ${isDark ? 'text-site-muted' : 'text-site-text'}`}
      >
        {subtitle}
      </motion.h3>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-[3.5em] md:text-[4em] font-heading uppercase leading-none ${isDark ? 'text-white' : 'text-site-dark'}`}
      >
        {title}
      </motion.h1>
    </div>
  );
}
