import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: var(--color-section);
  border-radius: 4px;

  @media (max-width: 560px) {
    padding: 8px;
    flex-direction: column;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DivImg = styled.div`
  width: 40%;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-subtext);

  &:hover {
    color: var(--color-main);
  }
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

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  border: none;
  padding: 5px 20px 0 65px;
  margin: 5px 0;
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

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border: 3px solid var(--color-subtext);
  }
`;

export const DivBtnBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.button`
  align-self: center;
  width: 45%;
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
`;

export const BtnCancel = styled.button`
  align-self: center;
  width: 45%;
  padding: 10px 32px;
  background-color: var(--color-submain);
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
`;
