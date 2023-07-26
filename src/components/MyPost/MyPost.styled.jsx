import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 4px;
  background-color: var(--color-section);
  padding: 5px;
`;

export const DivBoxImg = styled.div`
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const DivBoxTitle = styled.div`
  margin: 0 15px;
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

export const DivBoxBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
`;

export const DivBoxLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DivBoxIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DivIcon = styled.div`
  width: 15px;
  height: 15px;
  color: var(--color-logo);
`;

export const IconText = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);
`;

export const DivDate = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);
`;
