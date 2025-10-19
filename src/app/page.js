'use client';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </MainWrapper>
    </>
  );
}

/* ---------- Styles ---------- */
const MainWrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 80px; /* top = navbar height + spacing */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 95%;
    padding: 100px 20px 70px;
  }

  @media (max-width: 1024px) {
    max-width: 92%;
    padding: 90px 18px 60px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 85px 16px 50px;
  }

  @media (max-width: 480px) {
    padding: 80px 12px 40px;
  }
`;