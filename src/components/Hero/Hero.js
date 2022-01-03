import React from 'react';
import Link from 'next/link';
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
      <SectionText>
        Upcoming SDE Summer-Intern at <Link href='https://www.deere.com/en/our-company/'><a target='_blank'>John-Deere</a></Link>
      </SectionText>
      <div style={buttonsStylingDisplay}>
        <Button onClick={()=>window.open("https://drive.google.com/file/d/18sJnROMiNr-_zv7TIstCnr5_jy8p93jN/view?usp=sharing", "_blank")}>Resume</Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;
