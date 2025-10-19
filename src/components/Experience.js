'use client';
import { useState } from 'react';
import styled from 'styled-components';

const jobs = [
  {
    company: 'Dell Technologies',
    role: 'Software Engineer',
    date: 'Jan 2024 – Present',
    description: [
      'Architected a cloud-native e-commerce platform with React, Node.js, Spring Boot, and Kubernetes, reducing release cycles by 45%.',
      'Engineered performant front-end experiences using React and Next.js, accelerating load speed by 35% and increasing customer engagement by 25%.',
      'Automated CI/CD pipelines using GitHub Actions, Docker, and AWS EKS, reducing deployment time to 15 minutes.',
      'Established observability with Prometheus, Grafana, and ELK Stack, cutting MTTD by 50% and MTTR by 30%.',
    ],
  },
  {
    company: 'Wipro',
    role: 'Java Developer',
    date: 'Jan 2021 – Dec 2022',
    description: [
      'Developed high-performance RESTful APIs using Java, Spring Boot, and Hibernate, increasing throughput by 45%.',
      'Refactored monolithic applications into microservices with Spring Boot and Docker, tripling release frequency.',
      'Implemented event-driven architecture with Apache Kafka, enabling 1M+ daily transaction processing.',
      'Elevated code quality via JUnit and Mockito, achieving 85% test coverage and cutting regression defects by 40%.',
    ],
  },
  {
    company: 'Hexaware Technologies',
    role: 'Java Developer',
    date: 'Jun 2019 – Dec 2020',
    description: [
      'Developed claims processing microservices with Java & Spring Boot, increasing throughput by 50%.',
      'Enabled real-time claim validation using Apache Kafka, supporting 500K+ daily claims with improved responsiveness.',
      'Containerized legacy components with Spring Boot and Docker, cutting deployment time from 2.5 hours to 15 minutes.',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeJob = jobs[activeTab];

  return (
    <ExperienceSection id="experience">
      <SectionHeading>Where I’ve Worked</SectionHeading>
      <TabsContainer>
        <TabList>
          {jobs.map((job, index) => (
            <TabButton
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </TabButton>
          ))}
        </TabList>
        <TabContent>
          <h3>
            {activeJob.role} <span className="company">@ {activeJob.company}</span>
          </h3>
          <p className="date">{activeJob.date}</p>
          <ul>
            {activeJob.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </TabContent>
      </TabsContainer>
    </ExperienceSection>
  );
}

/* ---------- Styled Components ---------- */
const ExperienceSection = styled.section`
  max-width: 700px;
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 40px;
  width: 100%;

  &::before {
    content: '02.';
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 20px;
    margin-right: 10px;
    font-weight: 400;
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    margin-left: 20px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.green : theme.colors.slate)};
  padding: 10px 20px;
  text-align: left;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    color: ${({ theme }) => theme.colors.green};
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-left: 2px solid ${theme.colors.green};
    background-color: ${theme.colors.lightestNavy};
  `}
`;

const TabContent = styled.div`
  color: ${({ theme }) => theme.colors.lightSlate};

  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
    color: ${({ theme }) => theme.colors.lightestSlate};
    .company {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  .date {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 14px;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.lightSlate};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 18px;
    line-height: 1.5;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.slate};

      &::before {
        content: '▹';
        position: absolute;
        left: 0px;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;