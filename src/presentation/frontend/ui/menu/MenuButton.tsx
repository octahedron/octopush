import {hideVisually} from 'polished';
import React, {SFC} from 'react';
import {CSSTransition} from 'react-transition-group';
import styled from 'styled-components';
import Icon from '../icon/Icon';

const transitionName = 'button';

interface MenuButtonProps {
  in?: boolean;
  toggleMenu(): void;
}

const StyledMenuButton = styled.button`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  border: none;
  background-color: var(--color-red);
  color: #f9f6e5;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  overflow: hidden;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  width: 50px;
  height: 50px;
  bottom: 50px;
  left: 50px;
  top: auto;

  &.${transitionName}-exit {
    pointer-events: none;
    opacity: 0.99;
    transition: opacity 0.1s;
    z-index: 2000;
  }
  &.${transitionName}-exit-active,
  &.${transitionName}-exit-done {
    opacity: 0;
  }

  &.${transitionName}-enter {
    opacity: 0.01;
    transition: opacity 0.1s 0.4s;
  }
  &.${transitionName}-enter-active {
    opacity: 1;
  }

  & > span {
    ${hideVisually()};
  }
`;

const StyledIcon = styled(Icon)`
  stroke: #fff;
`;

const MenuButton: SFC<MenuButtonProps> = ({toggleMenu, in: transitionIn}) => {
  return (
    <CSSTransition in={transitionIn} classNames={transitionName} timeout={{enter: 500, exit: 100}}>
      <StyledMenuButton type="button" onClick={toggleMenu}>
        <StyledIcon type="settings" />
        <span>Settings Menu</span>
      </StyledMenuButton>
    </CSSTransition>
  );
};

export default MenuButton;
