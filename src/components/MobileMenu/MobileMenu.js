/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Menu">
        <ChildrenWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </ChildrenWrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Content = styled(DialogContent)`
  position: relative;
  background: var(--color-white);
  width: 300px;
  height: 100%;
`;

const ChildrenWrapper = styled.div`
  padding: 16px 24px 32px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--font-normal);
`;

export default MobileMenu;
