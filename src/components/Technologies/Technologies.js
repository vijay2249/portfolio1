import React from 'react';
import { DiCode, DiCodepen, DiDjango, DiLinux} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider /><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> Worked over Frontend tech like React, Bootstrap, Html, Css</SectionText>
    <List>
      <ListItem>
        <DiCodepen size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React js<br/>React Bootstrap<br/>Html<br/>Sass<br/>Babel<br/>Css</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDjango size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Node js(overview)<br/>Django(Overview)</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="5rem" />
        <ListContainer>
          <ListTitle>CyberSecurity</ListTitle>
          <ListParagraph>Basic Networking<br/>Linux</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="5rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C++<br/>
            Python<br/>
            Babel<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
