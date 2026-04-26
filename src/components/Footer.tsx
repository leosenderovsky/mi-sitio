import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faBehance,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const socialLinks = [
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/lsender/", label: "LinkedIn" },
    {
      icon: faYoutube,
      url: "https://www.youtube.com/c/LeoAquibaSenderovsky",
      label: "YouTube"
    },
    { icon: faBehance, url: "https://www.behance.net/leosenderovsky", label: "Behance" },
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/Leo.Aquiba.Senderovsky",
      label: "Facebook"
    },
    { icon: faXTwitter, url: "https://twitter.com/leosenderovsky", label: "Twitter / X" },
    { icon: faInstagram, url: "https://www.instagram.com/leo.senderovsky/", label: "Instagram" },
    { icon: faGithub, url: "https://github.com/leosenderovsky", label: "GitHub" },
  ];

  return (
    <footer
      className="py-12 border-t border-white/10"
      style={{
        background: "#19D3FF",
      }}
    >
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
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-[#1B1440] flex items-center justify-center text-[#1B1440] hover:bg-[#1B1440] hover:border-[#1B1440] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[#1B1440] font-body">
            Copyright © {new Date().getFullYear()} Leo Aquiba Senderovsky
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
