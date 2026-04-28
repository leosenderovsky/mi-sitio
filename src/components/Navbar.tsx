import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const [openMobileSubSubmenu, setOpenMobileSubSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest("nav")) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ pathname: "/", hash });
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
            { label: "PORTFOLIO VIDEOS", path: "/audiovisual/edicion/portfolio/videos" },
            { label: "PORTFOLIO REELS", path: "/audiovisual/edicion/portfolio/reels" },
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
            {
              label: "ENCUENTROS DE CINE",
              path: "/audiovisual/docencia/encuentros-de-cine",
            },
            { label: "EXPERIENCIA", path: "/audiovisual/docencia/experiencia" },
            { label: "ENTREVISTAS", path: "/audiovisual/docencia/entrevistas" },
          ],
        },
        {
          label: "CRÍTICA",
          path: "/audiovisual/critica",
          submenu: [
            { label: "SERVICIOS", path: "/audiovisual/critica/servicios" },
            { label: "EXPERIENCIA", path: "/audiovisual/critica/experiencia" },
          ],
        },
      ],
    },
    {
      label: "WEB",
      path: "/web",
      submenu: [
        { label: "SERVICIOS", path: "/web/servicios" },
        { label: "EXPERIENCIA", path: "/web/experiencia" },
      ],
    },
    {
      label: "IA",
      path: "/ia",
      submenu: [
        { label: "SENDER.IA", path: "/ia/servicios" },
        { label: "PORTFOLIO", path: "/ia/portfolio" },
      ],
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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg py-2" : "py-4"}`}
      style={{
        background: "linear-gradient(to right, #19D3FF, #1A74A0, #1B1440)",
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-50" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/assets/img/logo.webp"
            alt="Leo Senderovsky"
            width="200"
            height="56"
            className={`transition-all duration-300 object-contain object-left ${isScrolled ? "h-12 max-h-[75px]" : "h-16 max-h-[75px]"}`}
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
                  style={{ color: "#FFFFFF" }}
                >
                  {item.label} <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
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
                                    subsubitem.hash ? (
                                      <a
                                        key={subsubidx}
                                        href={subsubitem.hash}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setIsOpen(false);
                                          // If we're already on the page, scroll; else navigate to path with hash
                                          const target = document.querySelector(subsubitem.hash!);
                                          if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                          } else {
                                            navigate({ pathname: subsubitem.path!, hash: subsubitem.hash });
                                          }
                                        }}
                                        className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                                      >
                                        {subsubitem.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={subsubidx}
                                        to={subsubitem.path!}
                                        className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                                      >
                                        {subsubitem.label}
                                      </Link>
                                    )
                                  ))}
                            </div>
                          </div>
                        ) : (
                          subitem.hash ? (
                            <a
                              key={subidx}
                              href={subitem.hash}
                              onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector(subitem.hash!);
                                if (target) {
                                  target.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                  navigate({ pathname: subitem.path!, hash: subitem.hash });
                                }
                                setOpenSubmenu(null);
                              }}
                              className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                            >
                              {subitem.label}
                            </a>
                          ) : (
                            <Link
                              key={subidx}
                              to={subitem.path!}
                              className="block px-4 py-2 text-white hover:bg-white/30 font-heading uppercase text-[20px]"
                            >
                              {subitem.label}
                            </Link>
                          )
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
                style={{ color: "#FFFFFF" }}
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
                style={{ color: "#FFFFFF" }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={idx}
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash!)}
                className="font-heading uppercase text-lg tracking-wider hover:text-white transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} aria-hidden="true" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-site-blue shadow-xl py-6 flex flex-col items-start space-y-4 lg:hidden px-6"
            >
              {menuItems.map((item, idx) =>
                item.submenu ? (
                  <div key={idx} className="w-full">
                    <button
                      onClick={() => {
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                        setOpenMobileSubSubmenu(null);
                      }}
                      aria-expanded={openSubmenu === item.label}
                      className="font-heading text-white text-xl uppercase tracking-wider flex items-center justify-start w-full"
                    >
                      {item.label}{" "}
                      <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform duration-300 ${openSubmenu === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 space-y-2 overflow-hidden"
                        >
                          {item.submenu.map((subitem, subidx) =>
                            subitem.submenu ? (
                              <div key={subidx} className="w-full">
                                <button
                                  onClick={() => setOpenMobileSubSubmenu(openMobileSubSubmenu === subitem.label ? null : subitem.label)}
                                  aria-expanded={openMobileSubSubmenu === subitem.label}
                                  className="font-heading text-white text-lg uppercase tracking-wider flex items-center justify-start w-full py-1 pl-4"
                                >
                                  {subitem.label}
                                  <FontAwesomeIcon icon={faChevronDown} className={`ml-2 text-sm transition-transform duration-300 ${openMobileSubSubmenu === subitem.label ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                  {openMobileSubSubmenu === subitem.label && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="ml-0 space-y-1 bg-white/5 py-2 overflow-hidden"
                                    >
                                      {subitem.submenu.map(
                                        (subsubitem, subsubidx) => (
                                          subsubitem.hash ? (
                                            <a
                                              key={subsubidx}
                                              href={subsubitem.hash}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(false);
                                                setOpenSubmenu(null);
                                                setOpenMobileSubSubmenu(null);
                                                const target = document.querySelector(subsubitem.hash!);
                                                if (target) {
                                                  target.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                  navigate({ pathname: subsubitem.path!, hash: subsubitem.hash });
                                                }
                                              }}
                                              className="block font-heading text-white/80 text-base uppercase tracking-wider py-1 hover:text-white pl-8"
                                            >
                                              {subsubitem.label}
                                            </a>
                                          ) : (
                                            <Link
                                              key={subsubidx}
                                              to={subsubitem.path!}
                                              onClick={() => {
                                                setIsOpen(false);
                                                setOpenSubmenu(null);
                                                setOpenMobileSubSubmenu(null);
                                              }}
                                              className="block font-heading text-white/80 text-base uppercase tracking-wider py-1 hover:text-white pl-8"
                                            >
                                              {subsubitem.label}
                                            </Link>
                                          )
                                        ),
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                key={subidx}
                                to={subitem.path!}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                  setOpenMobileSubSubmenu(null);
                                }}
                                className="block font-heading text-white text-lg uppercase tracking-wider py-1 pl-4"
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
                    onClick={() => {
                      setIsOpen(false);
                      setOpenSubmenu(null);
                      setOpenMobileSubSubmenu(null);
                    }}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#FFFFFF" }}
                  >
                    {item.label}
                  </Link>
                ) : item.external ? (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      setIsOpen(false);
                      setOpenSubmenu(null);
                      setOpenMobileSubSubmenu(null);
                    }}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#FFFFFF" }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={idx}
                    href={item.hash}
                    onClick={(e) => {
                      handleNavClick(e, item.hash!);
                      setOpenSubmenu(null);
                      setOpenMobileSubSubmenu(null);
                    }}
                    className="font-heading text-xl uppercase tracking-wider"
                    style={{ color: "#FFFFFF" }}
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
