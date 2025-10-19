'use client';
import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactSection id="contact">
      <SectionHeading>What's Next?</SectionHeading>
      <Title>Get In Touch</Title>
      <Description>
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have any question or just want to say hi, I’ll get back to you!
      </Description>
      <EmailLink href="mailto:kamineni.jobs@gmail.com">Say Hello</EmailLink>
    </ContactSection>
  );
}

/* ---------- Styled Components ---------- */
const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeading = styled.h2`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.green};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;

  &::before {
    content: '04. ';
    bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin: 0 0 20px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.slate};
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 50px;
`;

const EmailLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  background: transparent;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  padding: 20px 28px;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;
