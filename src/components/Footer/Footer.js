import React from 'react';
import { AiFillGithub, AiOutlineYoutube, AiFillLinkedin, AiOutlineMail, AiFillCodeSandboxSquare } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem href="mailto:vijaychowdary3699@gmail.com">
            <AiOutlineMail size="3rem"/>
            <LinkTitle>Gmail</LinkTitle>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://www.youtube.com/channel/UCcLbf3YcgF6MVLXl8GudvfQ?sub_confirmation=1">
            <AiOutlineYoutube size="3rem"/>
            <LinkTitle>Youtube</LinkTitle>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://github.com/vijay2249">
            <AiFillGithub size="3rem"/>
            <LinkTitle>Github</LinkTitle>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://www.linkedin.com/in/vijay-chowdary-nelakurthi/">
            <AiFillLinkedin size="3rem"/>
            <LinkTitle>LinkedIn</LinkTitle>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://codesandbox.io/u/vijay2249">
            <AiFillCodeSandboxSquare size="3rem"/>
            <LinkTitle>CodeSandBox</LinkTitle>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer><Slogan>Excitement is the key to get going</Slogan></CompanyContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
