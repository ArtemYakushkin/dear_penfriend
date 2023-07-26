import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 560px) {
    gap: 8px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  width: 80%;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  color: var(--color-text);
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

  @media (max-width: 560px) {
    padding: 0 8px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const Btn = styled.button`
  align-self: center;
  width: 20%;
  padding: 10px 32px;
  background-color: var(--color-main);
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  color: var(--color-second-text);

  :hover {
    background-color: var(--color-section);
    color: var(--color-text);
    font-weight: var(--fw-bold);
  }

  @media (max-width: 560px) {
    padding: 4px 8px;
  }
`;

export const DivComWrapp = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 560px) {
    padding: 0;
    gap: 8px;
  }
`;

export const NoCommentText = styled.p`
  text-align: center;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-submain);
`;
