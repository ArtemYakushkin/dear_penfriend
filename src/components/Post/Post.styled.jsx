import styled from "styled-components";

export const DivWrapper = styled.div`
  background-color: var(--color-section);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const DivLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DivDate = styled.div`
  padding: 15px 30px 0 30px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);

  @media (max-width: 560px) {
    padding: 8px 15px 0 15px;
    margin-bottom: 4px;
  }
`;

export const DivUser = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin: 10px 0;

  @media (max-width: 560px) {
    padding: 0 15px;
    margin: 4px 0;
    align-items: flex-end;
  }
`;

export const UserImgBox = styled.div`
  display: inline-block;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 560px) {
    width: 32px;
    height: 32px;
  }
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h4);
  line-height: 13px;
  color: var(--color-text);
`;

export const UserOccupation = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-text);
`;

export const TitleBox = styled.div`
  padding: 0 30px;
  margin: 10px 0;

  @media (max-width: 560px) {
    padding: 0 15px;
    margin: 4px 0;
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

export const TextBox = styled.div`
  padding: 0 30px;
  margin-bottom: 10px;

  @media (max-width: 560px) {
    padding: 0 15px;
    margin-bottom: 4px;
  }
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

export const ImgBox = styled.div`
  padding: 0 30px;
  margin-bottom: 10px;

  @media (max-width: 560px) {
    padding: 0 15px;
    margin-bottom: 4px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const DivPromotion = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 30px 10px 30px;
  border-right: 1px solid var(--color-line);

  @media (max-width: 560px) {
    padding: 4px 15px 4px 15px;
    align-items: flex-end;
  }
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

  @media (max-width: 560px) {
    font-weight: var(--fw-regular);
    font-size: var(--fs-h6);
  }
`;
