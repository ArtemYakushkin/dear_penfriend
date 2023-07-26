import styled from "styled-components";

export const DivWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50%;
  border-radius: 4px;
  background-color: var(--color-section);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 65%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const Title = styled.p`
  padding: 0 0 20px 0;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h2);
  color: var(--color-text);
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  color: var(--color-text);
  margin: 5px 0;
  background-color: transparent;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }

  &::placeholder {
    font-weight: var(--fw-light);
    font-size: var(--fs-h4);
    color: var(--color-subtext);
  }
`;

export const DivWrappAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 5px;
  }
`;

export const DivBoxAvatar = styled.div`
  position: relative;
`;

export const DivBoxInput = styled.div`
  width: 100%;
`;

export const DivAvatar = styled.div`
  border: 2px solid var(--color-subtext);
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: transparent;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-subtext);
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--color-section);
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const BtnLogin = styled.button`
  width: 100%;
  padding: 10px 32px;
  background-color: var(--color-main);
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h3);
  color: var(--color-second-text);
  margin-top: 20px;

  &:hover {
    background-color: var(--color-section);
    color: var(--color-text);
  }
`;
