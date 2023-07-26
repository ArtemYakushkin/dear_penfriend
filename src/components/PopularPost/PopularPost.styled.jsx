import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--color-section);
  border-radius: 4px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DivBoxImg = styled.div`
  flex: 4;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const DivBoxInfo = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DivBoxTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserName = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h4);
  line-height: 13px;
  color: var(--color-text);

  @media (max-width: 480px) {
    font-weight: var(--fw-regular);
    font-size: var(--fs-h5);
  }
`;

export const Date = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);
`;

export const DivBoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 10px 0;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const Title = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  line-height: 150%;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;

export const Text = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-h5);
  line-height: 150%;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;

export const DivBoxBottom = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const IconBox = styled.div`
  width: 16px;
  height: 16px;
  color: var(--color-logo);
`;

export const Number = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);
`;
