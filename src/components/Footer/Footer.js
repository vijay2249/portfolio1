import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiFillCodeSandboxSquare, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <AiOutlineMail size="3rem"/>
          <LinkTitle>Gmail</LinkTitle>
          <LinkItem href="mailto:vijaychowdary3699@gmail.com">vijaychowdary3699@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <AiOutlineMail size="3rem"/>
          <LinkTitle>Gmail</LinkTitle>
          <LinkItem href="mailto:nelaku_851983@student.nitw.ac.in">nelaku_851983@student.nitw.ac.in</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer><Slogan>Excitement is the key to get going</Slogan></CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/vijay2249"><AiFillGithub size="3rem"/></SocialIcons>
          <SocialIcons href="https://codesandbox.io/u/vijay2249"><AiFillCodeSandboxSquare size="3rem"/></SocialIcons>
          <SocialIcons href="https://linkedin.com/in/vijay-chowdary-nelakurthi"><AiFillLinkedin size="3rem"/></SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
