import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DivUser = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 560px) {
    display: block;
  }
`;

export const UserName = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h4);
  line-height: 13px;
  color: var(--color-text);

  @media (max-width: 560px) {
    font-weight: var(--fw-regular);
    font-size: var(--fs-h5);
  }
`;

export const DivDate = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);
`;

export const Text = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  line-height: 150%;
  color: var(--color-text);

  @media (max-width: 560px) {
    font-weight: var(--fw-regular);
    font-size: var(--fs-h6);
  }
`;
