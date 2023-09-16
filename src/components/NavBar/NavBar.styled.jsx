import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapp = styled.header`
  background-color: var(--color-section);
  border-bottom: 1px solid var(--color-line);
  padding: 5px 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const AuthDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AuthBtn = styled(NavLink)`
  padding: 10px 32px;
  background-color: var(--color-main);
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  color: var(--color-second-text);

  &.active {
    background-color: var(--color-section);
    border: 1px solid var(--color-main);
    color: var(--color-text);
    font-weight: var(--fw-bold);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: var(--color-section);
    color: var(--color-text);
    font-weight: var(--fw-bold);
  }
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: auto;
`;

export const LogoText = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h1);
  color: var(--color-logo);

  @media (max-width: 560px) {
    display: none;
  }
`;

export const NavItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);
  position: relative;

  &.active {
    color: var(--color-main);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--color-main);
  }
`;

export const DivRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DivPersonal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  cursor: pointer;
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const DivInitials = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--color-submain);
  border: 2px solid var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InitialText = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h2);
  color: var(--color-text);
`;

export const DivSetting = styled.div`
  position: absolute;
  bottom: 0;
  right: -7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-submain);
  border: 2px solid var(--color-main);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const DivAvatar = styled.div`
//   display: inline-block;
//   width: 42px;
//   height: 42px;
//   border-radius: 50%;
//   overflow: hidden;
// `;

// export const AvatarImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

export const UserText = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  color: var(--color-text);
  line-height: 11px;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const BtnLogOut = styled.button`
  width: 24px;
  height: 24px;
  color: var(--color-text);

  :hover {
    color: var(--color-main);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
