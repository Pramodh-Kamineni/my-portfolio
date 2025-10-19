'use client';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      © {new Date().getFullYear()} Pramodh Kamineni
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  margin-top: 100px;
  font-size: 14px;
`;