import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Contributed to Open Source Projects'},
  { number: 'ZTM', text: "Member of the organization ZTM"}
];

const Acomplishments = () => (
  <Section id="achieved">
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,i)=>(
        <Box key={i}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
