import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  theme?: "light" | "dark";
}

export function SectionHeader({
  title,
  subtitle,
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className="mb-12">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-[1.3em] md:text-[1.4em] tracking-[3px] uppercase mb-2 text-center ${isDark ? "text-[#d9faff]" : "text-[#1B1440]"}`}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-[3.5em] md:text-[4em] font-heading uppercase leading-none text-center ${isDark ? "text-white" : "text-[#1B1440]"}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
