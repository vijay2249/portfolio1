import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle center>
        I'm<br/>Vijay CN
      </SectionTitle>
      <SectionText>
        I am enthusiastic web development learner and also Cyber Security Enthusist, Along with some extra curricular activities..
      </SectionText>
      <Button onClick={() => window.location="https://github.com/vijay2249"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;