import styled from "styled-components";

export const DivWrapper = styled.div`
  background-color: var(--color-section);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 780px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const DivLeft = styled.div`
  width: 50%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const UserImgBox = styled.div`
  background-size: cover;
  border-radius: 20px;
  width: 100%;
  height: 450px;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 350px;
  }

  @media (max-width: 560px) {
    height: 250px;
  }
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivRight = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const DivLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const H1 = styled.h1`
  font-size: var(--fs-h1);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    margin-bottom: 16px;
  }
`;

export const Ul = styled.ul`
  margin: 20px 0;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1000px) {
    width: 100%;
    gap: 4px;
    margin: 8px 0;
    padding: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &::before {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: var(--color-line);
    margin-left: 12px;
    margin-right: 12px;
  }

  @media (max-width: 1000px) {
    display: block;

    &::before {
      content: "";
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  line-height: 2.14;
  letter-spacing: 0.02em;
  color: var(--color-text);
  order: -1;
`;

export const Text = styled.span`
  font-weight: var(--fw-light);
  font-size: var(--fs-h4);
  line-height: 2.14;
  letter-spacing: 0.02em;
  color: var(--color-text);

  @media (max-width: 1000px) {
    /* padding-left: 16px; */
    display: flex;
    align-items: center;

    &::before {
      content: "";
      height: 1px;
      flex-grow: 1;
      /* width: 50px; */
      background-color: var(--color-line);
      /* margin-left: 12px; */
      margin-right: 12px;
    }
  }
`;

export const NoPostText = styled.p`
  text-align: center;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-submain);
`;
