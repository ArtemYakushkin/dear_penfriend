import styled from "styled-components";

export const DivWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DivLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
