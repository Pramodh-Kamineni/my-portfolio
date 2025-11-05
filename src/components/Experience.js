'use client';
import { useState } from 'react';
import styled from 'styled-components';

const jobs = [
  {
    company: 'Bank of America',
    role: 'Software Engineer',
    date: 'Jan 2024 – Present',
    description: [
      'Engineered cloud-native microservices using Spring Boot and Azure App Services, improving system scalability and reducing response times by 35% across enterprise workflows.',
      'Automated CI/CD pipelines using Azure DevOps, cutting deployment times by 40% and ensuring zero-downtime releases for mission-critical banking operations.',
      'Implemented Azure Key Vault & JWT authentication, strengthening application security and ensuring compliance with internal audit and data protection policies.',
      'Deployed containerized applications via Docker and AKS (Azure Kubernetes Service), supporting auto-scaling and high availability for core financial services.',
      'Integrated Application Insights & Azure Monitor, enabling real-time diagnostics and proactive performance optimization across distributed systems.',
    ],
  },
  {
    company: 'Walmart',
    role: 'Software Engineer',
    date: 'Oct 2021 – Dec 2022',
    description: [
      'Developed scalable microservices using Spring Boot, Azure SQL, and GCP Cloud Run, enabling cross-cloud interoperability for high-volume retail systems.',
      'Built ETL pipelines with Azure Data Factory and GCP Dataflow to process multi-terabyte retail datasets, delivering real-time analytics and inventory insights.',
      'Orchestrated deployments via Azure DevOps and Google Cloud Build, ensuring reliable, zero-downtime CI/CD across multi-cloud environments.',
      'Implemented event-driven messaging using Kafka and Pub/Sub, improving service resiliency and reducing transaction latency by 30%.',
      'Enhanced observability with Prometheus and GCP Operations, reducing incident recovery time (MTTR) by 40% through proactive monitoring and alerts.',
    ],
  },
  {
    company: 'Pfizer',
    role: 'Software Engineer',
    date: 'Aug 2019 – Sep 2021',
    description: [
      'Developed healthcare analytics APIs using Python and Flask, powering data-driven research dashboards with secure, HIPAA-compliant access controls.',
      'Designed AWS Lambda pipelines for automated ETL, enabling seamless data flow from S3 to Redshift and cutting processing time by 50%.',
      'Automated infrastructure provisioning with CloudFormation, improving consistency and reducing manual setup errors by 80%.',
      'Integrated AWS Cognito authentication for multi-user access, enhancing security and regulatory compliance across applications.',
      'Monitored data workflows using CloudWatch, implementing custom metrics and alerts that improved operational visibility and reduced downtime.',
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
