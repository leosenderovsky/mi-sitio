import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/lsender/' },
    { icon: 'fa-youtube', url: 'https://www.youtube.com/c/LeoAquibaSenderovsky' },
    { icon: 'fa-behance', url: 'https://www.behance.net/leosenderovsky' },
    { icon: 'fa-facebook-f', url: 'https://www.facebook.com/Leo.Aquiba.Senderovsky' },
    { icon: 'fa-x-twitter', url: 'https://twitter.com/leosenderovsky' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/leo.senderovsky/' },
    { icon: 'fa-github', url: 'https://github.com/leosenderovsky' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#766dff] to-[#88f3ff] py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ul className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#000b77] flex items-center justify-center text-[#000b77] hover:bg-[#000b77] hover:border-[#000b77] hover:text-white transition-all duration-300"
                >
                  <i className={`fa-brands ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[#000b77] font-body">Copyright © {new Date().getFullYear()} Leo Aquiba Senderovsky</p>
        </motion.div>
      </div>
    </footer>
  );
}
