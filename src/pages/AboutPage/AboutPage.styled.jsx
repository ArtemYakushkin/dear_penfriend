import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxLeft = styled.div`
  width: 30%;
  height: 400px;
  overflow: hidden;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 4px 8px 8px 1px rgba(0, 0, 0, 0.33);

  @media (max-width: 1000px) {
    width: 50%;
    height: 500px;
  }

  @media (max-width: 560px) {
    width: 100%;
    height: 400px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 1000px) {
    height: 500px;
  }
`;

export const BoxRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-family: "Indie Flower", cursive;
  font-weight: var(--fw-regular);
  font-size: var(--fs-h2);
  color: var(--color-text);
  text-indent: 28px;

  @media (max-width: 560px) {
    font-size: var(--fs-h4);
    text-indent: 16px;
  }
`;

export const Span = styled.span`
  font-family: "Indie Flower", cursive;
  font-weight: var(--fw-bold);
  font-size: var(--fs-h2);
  color: var(--color-text2);

  @media (max-width: 560px) {
    font-size: var(--fs-h4);
  }
`;

export const TextTop = styled.p`
  font-family: "Indie Flower", cursive;
  font-weight: var(--fw-bold);
  font-size: var(--fs-h1);
  color: var(--color-text2);

  @media (max-width: 560px) {
    font-size: var(--fs-h3);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;
