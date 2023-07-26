import styled from "styled-components";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const StyledBurger = styled.div`
  display: none;

  @media (max-width: 1000px) {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    width: 24px;
    height: 24px;
    z-index: 20;

    div {
      width: 24px;
      height: 2px;
      border-radius: 20px;
      background-color: ${({ open }) =>
        open ? "var(--color-main)" : "var(--color-text)"};
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const BurgerIcon = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((open) => !open);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </>
  );
};

export default BurgerIcon;
