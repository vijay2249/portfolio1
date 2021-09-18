import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodeSandboxSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" >
        <a style={{marginBottom:"20px" ,display:"flex", alignItems:"center", color:"white"}}>
          <DiCssdeck size="3rem" /><Span><i>Vijay CN</i></Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li><Link href="#projects"><NavLink>Projects</NavLink></Link></li>
      <li><Link href="#tech"><NavLink>Technologies</NavLink></Link></li>
      <li><Link href="#study"><NavLink>Study</NavLink></Link></li>
      <li><Link href="#achieved"><NavLink>Achievements</NavLink></Link></li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vijay2249"><AiFillGithub size="3rem"/></SocialIcons>
      <SocialIcons href="https://codesandbox.io/u/vijay2249"><AiFillCodeSandboxSquare size="3rem"/></SocialIcons>
      <SocialIcons href="https://linkedin.com/in/vijay-chowdary-nelakurthi"><AiFillLinkedin size="3rem"/></SocialIcons>
    </Div3>
  </Container>
);

export default Header;
