import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const buttonsStylingDisplay = {
  "display": "flex",
  "flexDirection": "row",
  "height":"64px"
}

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle center>
        I'm<br/>Vijay CN
      </SectionTitle>
      <SectionText>
        I am enthusiatic web developer, worked with frameworks like ReactJs, Bootstrap, Babel along with languages like HTML, CSS, JS..
      </SectionText>
      <div style={buttonsStylingDisplay}>
        <Button onClick={() => window.location="https://github.com/vijay2249"} >Learn More</Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;