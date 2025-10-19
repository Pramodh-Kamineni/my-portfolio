'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <HeroSection id="hero">
      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="big-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Pramodh Kamineni.
      </motion.h1>

      <motion.h2
        className="sub-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I build scalable, intelligent systems for the web.
      </motion.h2>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I’m a <strong>Software Engineer</strong> with over 5 years of experience
        designing, developing, and deploying high-performance applications across
        <strong> e-commerce, banking,</strong> and <strong>healthcare</strong> domains.
        I specialize in <strong>microservices architecture</strong>, building modern web
        applications with <strong>React, Node.js, Java,</strong> and <strong>Spring Boot</strong>,
        and automating deployments on <strong>AWS</strong>. Currently, I’m focused on
        engineering scalable platforms and seamless digital experiences at{' '}
        <Highlight>Dell Technologies</Highlight>.
      </motion.p>

      <ButtonWrapper>
        <MotionButton
          href="mailto:pramodhk.jobs@gmail.com"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Get In Touch
        </MotionButton>
      </ButtonWrapper>
    </HeroSection>
  );
}

/* ---------- Styled Components ---------- */
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .intro {
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    margin-bottom: 10px;
  }

  .big-heading {
    font-size: 64px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin: 0;
  }

  .sub-heading {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.slate};
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .description {
    color: ${({ theme }) => theme.colors.lightSlate};
    max-width: 600px;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  width: auto;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 600;
`;

const MotionButton = styled(motion.a)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  background: transparent;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  padding: 12px 20px;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;