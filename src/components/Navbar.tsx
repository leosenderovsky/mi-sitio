import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  submenu?: MenuItem[];
  path?: string;
  href?: string;
  external?: boolean;
  hash?: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems: MenuItem[] = [
    {
      label: "AUDIOVISUAL",
      submenu: [
        {
          label: "EDICIÓN",
          path: "/audiovisual/edicion",
          submenu: [
            { label: "EXPERIENCIA", path: "/audiovisual/edicion/experiencia" },
            { label: "PORTFOLIO", path: "/audiovisual/edicion/portfolio" },
          ],
        },
        {
          label: "GUIÓN",
          path: "/audiovisual/guion",
          submenu: [
            { label: "EXPERIENCIA", path: "/audiovisual/guion/experiencia" },
            { label: "PORTFOLIO", path: "/audiovisual/guion/portfolio" },
            { label: "CONSULTORÍA", path: "/audiovisual/guion/consultoria" },
          ],
        },
        {
          label: "DOCENCIA",
          path: "/audiovisual/docencia",
          submenu: [
            { label: "EXPERIENCIA", path: "/audiovisual/docencia/experiencia" },
            { label: "ENTREVISTAS", path: "/audiovisual/docencia/entrevistas" },
          ],
        },
        {
          label: "CRÍTICA",
          path: "/audiovisual/critica",
          submenu: [
            { label: "EXPERIENCIA", path: "/audiovisual/critica/experiencia" },
          ],
        },
      ],
    },
    {
      label: "WEB",
      path: "/web",
      submenu: [{ label: "EXPERIENCIA", path: "/web/experiencia" }],
    },
    {
      label: "IA",
      path: "/ia",
      submenu: [{ label: "PORTFOLIO", path: "/ia/portfolio" }],
    },
    {
      label: "BLOG",
      href: "https://blog.leosenderovsky.com.ar",
      external: true,
    },
    { label: "CONTACTO", hash: "#contacto" },
  ];

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-r from-[#766dff] to-[#88f3ff] ${isScrolled ? "shadow-lg py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-50" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/assets/img/logo.png"
            alt="Leo Senderovsky"
            className={`transition-all duration-300 object-contain ${isScrolled ? "h-12 max-h-[75px]" : "h-16 max-h-[75px]"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, idx) =>
            item.submenu ? (
              <div key={idx} className="relative">
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="font-heading uppercase text-lg tracking-wider hover:text-white transition-colors"
                  style={{ color: "#000b77" }}
                >
                  {item.label} <i className="fa-solid fa-chevron-down ml-1"></i>
                </button>
                <AnimatePresence>
                  {openSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 bg-site-blue shadow-lg rounded-md py-2 min-w-48 z-50"
                    >
                      {item.submenu.map((subitem, subidx) =>
                        subitem.submenu ? (
                          <div key={subidx} className="relative group">
                            <Link
                              to={subitem.path!}
                              className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                            >
                              {subitem.label}
                            </Link>
                            <div className="absolute left-full top-0 mt-0 bg-site-blue shadow-lg rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                              {subitem.submenu.map((subsubitem, subsubidx) => (
                                <Link
                                  key={subsubidx}
                                  to={subsubitem.path!}
                                  className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                                >
                                  {subsubitem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={subidx}
                            to={subitem.path!}
                            className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                          >
                            {subitem.label}
                          </Link>
                        ),
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : item.path ? (
              <Link
                key={idx}
                to={item.path}
                className="font-heading uppercase text-lg tracking-wider hover:text-white transition-colors"
                style={{ color: "#000b77" }}
              >
                {item.label}
              </Link>
            ) : item.external ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="font-heading uppercase text-lg tracking-wider hover:text-white transition-colors"
                style={{ color: "#000b77" }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={idx}
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash!)}
                className="font-heading uppercase text-lg tracking-wider hover:text-white transition-colors"
                style={{ color: "#000b77" }}
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-site-blue text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-site-blue shadow-xl py-6 flex flex-col items-center space-y-4 lg:hidden"
            >
              {menuItems.map((item, idx) =>
                item.submenu ? (
                  <div key={idx} className="w-full text-center">
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="font-heading text-white text-xl uppercase tracking-wider"
                    >
                      {item.label}{" "}
                      <i className="fa-solid fa-chevron-down ml-1"></i>
                    </button>
                    <AnimatePresence>
                      {openSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 space-y-2"
                        >
                          {item.submenu.map((subitem, subidx) =>
                            subitem.submenu ? (
                              <div key={subidx}>
                                <Link
                                  to={subitem.path!}
                                  onClick={() => setIsOpen(false)}
                                  className="block font-heading text-white text-lg uppercase tracking-wider"
                                >
                                  {subitem.label}
                                </Link>
                                <div className="ml-4 space-y-1">
                                  {subitem.submenu.map(
                                    (subsubitem, subsubidx) => (
                                      <Link
                                        key={subsubidx}
                                        to={subsubitem.path!}
                                        onClick={() => setIsOpen(false)}
                                        className="block font-heading text-white text-base uppercase tracking-wider"
                                      >
                                        {subsubitem.label}
                                      </Link>
                                    ),
                                  )}
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={subidx}
                                to={subitem.path!}
                                onClick={() => setIsOpen(false)}
                                className="block font-heading text-white text-lg uppercase tracking-wider"
                              >
                                {subitem.label}
                              </Link>
                            ),
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.path ? (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#000b77" }}
                  >
                    {item.label}
                  </Link>
                ) : item.external ? (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#000b77" }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={idx}
                    href={item.hash}
                    onClick={(e) => handleNavClick(e, item.hash!)}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#000b77" }}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
