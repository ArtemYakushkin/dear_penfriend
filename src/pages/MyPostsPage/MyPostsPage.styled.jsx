import styled from "styled-components";

export const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const NoPostText = styled.p`
  text-align: center;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-submain);
`;
