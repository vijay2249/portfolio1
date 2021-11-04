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
        <DiCode size="5rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C++<br/>Python<br/>Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodepen size="5rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>ReactJs<br/>Bootstrap<br/>Html<br/>Css<br/>Sass</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDjango size="5rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>NodeJs<br/>EJS<br/>ExpressJs<br/>MongoDb<br/>Mongoose</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="5rem" />
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>Linux<br/>VsCode<br/>Github/Git<br/>Postman</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
