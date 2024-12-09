'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

export default function Navbar() {
  const router = useRouter();

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <div style={styles.logo} onClick={() => router.push('/')}>AI TOOLS</div>
        <div style={styles.navLinks}>
          <span 
            style={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push('/')}
          >
            Home
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Rankings
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Recommendation
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Why US
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </span>
          <button 
            style={styles.loginButton}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            立即登录
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles: Record<string, CSSProperties> = {
  navbar: {
    padding: '1rem 2rem',
    backgroundColor: '#FFFFFF',
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#41537B',
    letterSpacing: '0.5px',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  },
  navItem: {
    color: '#8E8D9A',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  loginButton: {
    backgroundColor: '#BC9CFF',
    color: '#FFFFFF',
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(188, 156, 255, 0.2)',
  },
}; 