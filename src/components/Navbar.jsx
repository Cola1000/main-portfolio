import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [barPosition, setBarPosition] = useState(0);
  const isScrollingRef = useRef(false);
  const navItemRefs = useRef([]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const wrapper = document.querySelector(".wrapper");

    if (!element) return;

    // Disable observer updates during programmatic scroll
    isScrollingRef.current = true;

    if (wrapper) {
      const top =
        element.getBoundingClientRect().top +
        wrapper.scrollTop -
        wrapper.getBoundingClientRect().top;

      // Custom smooth scroll with easing
      const startPosition = wrapper.scrollTop;
      const distance = top - startPosition;
      const duration = 1000; // 1 second
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        wrapper.scrollTop = startPosition + distance * ease;

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // Re-enable observer updates after scroll completes
          isScrollingRef.current = false;
        }
      };

      requestAnimationFrame(animation);
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Re-enable after estimated scroll time
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const wrapper = document.querySelector(".wrapper");
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update active if not programmatically scrolling
        if (isScrollingRef.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: wrapper,
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Update bar position when active changes
  useEffect(() => {
    const activeIndex = navLinks.findIndex(nav => nav.id === active);
    if (activeIndex >= 0 && navItemRefs.current[activeIndex]) {
      const item = navItemRefs.current[activeIndex];
      setBarPosition(item.offsetTop);
    }
  }, [active]);

  return (
    <nav
      className={`w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none transition-opacity duration-500 ${
        active === "hero" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className='flex items-start'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex'>
            RB
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-col gap-5 relative'>
          {/* Sliding highlight bar */}
          <div 
            className="absolute right-[-30px] w-2 h-6 lg:h-8 bg-white transition-all duration-500 ease-in-out"
            style={{
              top: `${barPosition}px`,
            }}
          />
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              ref={el => navItemRefs.current[index] = el}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer transition-colors duration-300`}
            >
              <a 
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.id);
                  scrollToSection(nav.id);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                >
                  <a 
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle(!toggle);
                      setActive(nav.id);
                      scrollToSection(nav.id);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
