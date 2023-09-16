import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 48px;

  @media (max-width: 560px) {
    padding: 0;
  }
`;

export const DivInitialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DivInitials = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-submain);
  border: 2px solid var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const InitialText = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h3);
  color: var(--color-text);
`;

export const DivUserBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DivUserName = styled.div`
  @media (max-width: 560px) {
    display: none;
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

export const UserOccupation = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-text);
`;

export const DivDate = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);
`;

export const Text = styled.p`
  padding-left: 52px;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h4);
  line-height: 150%;
  color: var(--color-text);

  @media (max-width: 560px) {
    font-weight: var(--fw-regular);
    font-size: var(--fs-h5);
  }
`;
