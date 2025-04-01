'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from "./Navbar.module.css";
import Button from "@/components/Button";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [stickyActive, setStickyActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      var stickyBreakpoint = 300;
      if (window.scrollY >= stickyBreakpoint && stickyActive !== true){ // Set navbar to sticky after reaching breakpoint
        setStickyActive(true);
      } else if (window.scrollY < stickyBreakpoint && stickyActive === true) {
        setStickyActive(false);
      }
    }

    // Clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [stickyActive]);


  return (
    <header>
      <nav className={`${styles.navbar} ${stickyActive == true ? styles.stickyNavbar : ''}`}>
        <div className="container">
          <div><Link href="/" aria-label="Go to home"><Image src={`${process.env.BASE_PATH}/img/wot-logo-2.png`} width={230} height={100} alt="Wide Open Throttle"/></Link></div>
          <ul className={mobileActive === true ? styles.mobileMenuActive : styles.mobileMenuClosed}>
            <li className={styles.navClose}><button onClick={() => { setMobileActive(false); }}><Image src={`${process.env.BASE_PATH}/img/icons/close-x.svg`} width={30} height={30} alt="Close" aria-label="Close navbar" /></button></li>
            <li><Link href="/#film-services" onClick={() => { setMobileActive(false); }}>Auto Services</Link></li>
            <li><Link href="/#gallery" onClick={() => { setMobileActive(false); }}>Gallery</Link></li>
            <li><Link href="/#reviews" onClick={() => { setMobileActive(false); }}>Reviews</Link></li>
            <li><Button text="Get a Quote" color='inverted' aria-label="Contact us to get a quote" href="/contact" onClick={() => { setMobileActive(false); }} /></li>
          </ul>
          <div className={styles.mobileIconWrapper}>
            <button onClick={() => { setMobileActive(true); }}>
              <Image
                src={`${process.env.BASE_PATH}/img/icons/hamburger-icon.svg`}
                alt="View menu"
                aria-label="View menu"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Navbar;