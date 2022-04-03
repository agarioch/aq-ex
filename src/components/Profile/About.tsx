import React from 'react';
import styled from '@emotion/styled';

type AboutProps = {
  description: string;
};

const About = ({ description }: AboutProps) => {
  return <AboutParagraph>{description}</AboutParagraph>;
};

const AboutParagraph = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  max-width: 100ch;
  overflow: hidden;
  white-space: pre-line;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

export default About;
