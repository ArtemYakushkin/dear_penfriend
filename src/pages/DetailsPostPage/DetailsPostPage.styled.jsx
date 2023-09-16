import styled from "styled-components";

export const DivLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivWrapper = styled.div`
  width: 100%;
  background-color: var(--color-section);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media (max-width: 560px) {
    padding-bottom: 8px;
  }
`;

export const DivLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 30px 10px 30px;
  border-right: 1px solid var(--color-line);
  cursor: pointer;

  @media (max-width: 560px) {
    padding: 4px 15px 4px 15px;
    gap: 0;
  }
`;

export const BtnRight = styled.div`
  display: flex;
  align-items: center;
`;

export const CorrectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 30px 10px 30px;
  border-left: 1px solid var(--color-line);
  cursor: pointer;

  @media (max-width: 560px) {
    padding: 4px 15px 4px 15px;
    gap: 0;
  }
`;

export const IconBox = styled.div`
  width: 16px;
  height: 16px;
  color: var(--color-logo);
`;

export const BtnText = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);

  :hover {
    color: var(--color-logo);
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 30px 10px 30px;
  border-left: 1px solid var(--color-line);
  cursor: pointer;

  @media (max-width: 560px) {
    padding: 4px 15px 4px 15px;
    gap: 0;
  }
`;

export const IconBoxDelete = styled.div`
  width: 16px;
  height: 16px;
  color: var(--color-submain);
`;

export const BtnTextDelete = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);

  :hover {
    color: var(--color-submain);
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;

  @media (max-width: 560px) {
    padding: 4px 15px;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
`;

export const UserLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  @media (max-width: 560px) {
    gap: 8px;
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

export const UserRight = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-h6);
  line-height: 150%;
  color: var(--color-logo);
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  width: 50%;
  padding: 10px 30px;

  @media (max-width: 560px) {
    width: 100%;
    padding: 4px 15px;
  }
`;

export const ImgBox = styled.div`
  padding-bottom: 10px;

  @media (max-width: 560px) {
    padding-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ContentRight = styled.div`
  width: 50%;
  padding: 10px 30px;

  @media (max-width: 560px) {
    width: 100%;
    padding: 4px 15px;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 10px;

  @media (max-width: 560px) {
    margin-bottom: 4px;
  }
`;

export const Title = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  line-height: 150%;
  color: var(--color-text);
`;

export const TextBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-line);

  @media (max-width: 560px) {
    border-bottom: none;
    padding-bottom: 4px;
  }
`;

export const Text = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-h4);
  line-height: 150%;
  color: var(--color-text);
`;

export const PromotionBox = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 560px) {
    padding-top: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Number = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  line-height: 11px;
  color: var(--color-text);
`;

export const CommentsBox = styled.div`
  padding: 20px 30px;

  @media (max-width: 560px) {
    padding: 8px 15px;
  }
`;
