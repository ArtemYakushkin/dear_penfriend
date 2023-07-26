import styled from "styled-components";

export const SearchWrapp = styled.div`
  background-color: var(--color-section);
  border-bottom: 1px solid var(--color-line);
  width: 100%;
  position: sticky;
  top: 53px;
  left: 0;
  z-index: 8;
`;

export const Form = styled.form`
  position: relative;
`;

export const IconWrapp = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 15px;
  color: var(--color-text);
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  border: 1px solid var(--color-line);
  padding: 0 20px 0 40px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  color: var(--color-text);
  margin: 5px 0;
  background-color: var(--color-line);

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }

  &::placeholder {
    font-weight: var(--fw-light);
    font-size: var(--fs-h5);
    color: var(--color-text);
  }
`;
