'use client';
import styled from 'styled-components';

export default function Projects() {
  return (
    <Section id="projects">
      <Header>
        <span>03.</span> Some Things I’ve Built
      </Header>

      <ProjectItem>
        <h4>🍔 Food Delivery Web App</h4>
        <p>
          Built a full-stack microservice-based food delivery platform using React, Node.js,
          Express, and MongoDB. Integrated Stripe payments and optimized database queries for
          faster transaction handling.
        </p>
      </ProjectItem>

      <ProjectItem>
        <h4>👨‍⚕️ Doctor’s Appointment Booking</h4>
        <p>
          Developed a real-time scheduling web app using React and Vite. Implemented WebSocket
          connections for live updates and secure API layers for appointment management.
        </p>
      </ProjectItem>

      <ProjectItem>
        <h4>💻 Personal Portfolio Website (This Site)</h4>
        <p>
          Designed and developed a fully responsive portfolio site with React, Next.js, and
          styled-components. Includes scroll animations, mobile navigation, and dark mode aesthetics.
        </p>
      </ProjectItem>
    </Section>
  );
}

/* ---------- Styles ---------- */

const Section = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 120px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.lightSlate};
`;

const Header = styled.h2`
  font-size: 28px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 40px;

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.green};
    font-size: 18px;
    margin-right: 10px;
  }

  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightNavy};
    margin-left: 15px;
  }
`;

const ProjectItem = styled.div`
  margin-bottom: 40px;

  h4 {
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors.lightSlate};
    line-height: 1.6;
  }
`;