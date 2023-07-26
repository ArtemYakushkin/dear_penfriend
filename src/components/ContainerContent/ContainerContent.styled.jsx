import styled from "styled-components";

export const ContainerContent = styled.div`
  max-width: 1440px;
  padding: 40px 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 40px 30px;
  }

  @media (max-width: 560px) {
    padding: 20px 10px;
  }
`;
