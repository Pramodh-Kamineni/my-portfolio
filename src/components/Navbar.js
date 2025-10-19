'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Highlight active section while scrolling
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));

    // Shadow on scroll
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Header className={scrolled ? 'scrolled' : ''}>
      <Nav>
        <Logo>PK</Logo>

        {/* === Hamburger Icon (mobile) === */}
        <Hamburger onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        {/* === Navigation Links === */}
        <NavLinks className={menuOpen ? 'open' : ''}>
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === `#${item.id}` ? 'active' : ''}
                onClick={closeMenu}
              >
                <span>{`0${i + 1}.`}</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <ResumeButton
              href="https://drive.google.com/file/d/1FJRSxGSIQRiGG6GxOj6H4p7JL_9fwPM3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume
            </ResumeButton>
          </li>
        </NavLinks>
      </Nav>
    </Header>
  );
}

/* ---------- Styles ---------- */

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: box-shadow 0.3s ease, background 0.3s ease;
  &.scrolled {
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
  font-weight: bold;
  cursor: default;
`;

/* ---------- Desktop Nav ---------- */
const NavLinks = styled.ol`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
  transition: all 0.3s ease;

  li a {
    color: ${({ theme }) => theme.colors.slate};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 14px;
    transition: color 0.3s ease;
  }

  li a span {
    color: ${({ theme }) => theme.colors.green};
    margin-right: 5px;
  }

  li a:hover,
  li a.active {
    color: ${({ theme }) => theme.colors.green};
  }

  /* ---------- Mobile Dropdown ---------- */
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: rgba(10, 25, 47, 0.95);
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 25px 0;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;

    &.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const ResumeButton = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.navy};
  }
`;

/* ---------- Hamburger Icon ---------- */
const Hamburger = styled.div`
  display: none;
  width: 28px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 101;

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.green};
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 8px;
  }
  span:nth-child(3) {
    top: 16px;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 8px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;