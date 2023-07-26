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

export const BtnLogin = styled.button`
  width: 100%;
  padding: 10px 32px;
  background-color: var(--color-main);
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h3);
  color: var(--color-second-text);
  margin: 20px 0;

  &:hover {
    background-color: var(--color-section);
    color: var(--color-text);
    /* border: 1px solid var(--color-main); */
  }
`;

export const DivSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 15px;
`;

export const BtnSwitch = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  line-height: 17px;
  color: var(--color-submain);

  &:hover {
    border-bottom: 1px solid var(--color-submain);
    /* border-bottom: 1px solid var(--color-main); */
    /* color: var(--color-main); */
  }
`;

export const Span = styled.span`
  font-weight: var(--fw-bold);
`;
