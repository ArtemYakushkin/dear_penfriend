import styled from "styled-components";

// export const DivWrapper = styled.div`
//   background-color: var(--color-section);
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 20px;
//   width: 100%;

//   @media (max-width: 560px) {
//     flex-direction: column;
//   }
// `;

// export const DivLeft = styled.div`
//   width: 50%;
//   height: 450px;

//   @media (max-width: 1000px) {
//     height: 350px;
//   }

//   @media (max-width: 560px) {
//     width: 100%;
//     height: 250px;
//   }
// `;

// export const UserImgBox = styled.div`
//   background-size: cover;
//   border-radius: 20px;
//   width: 100%;
//   height: 450px;
//   overflow: hidden;

//   @media (max-width: 1000px) {
//     height: 350px;
//   }

//   @media (max-width: 560px) {
//     height: 250px;
//   }
// `;

// export const UserImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// export const DivRight = styled.div`
//   width: 100%;

//   @media (max-width: 560px) {
//     width: 100%;
//   }
// `;

export const DivWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50%;
  border-radius: 4px;
  background-color: var(--color-section);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 65%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  padding: 0 0 20px 0;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h2);
  color: var(--color-text);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text);
  background-color: var(--color-submain);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  color: var(--color-text);
  margin: 5px 0;
  background-color: transparent;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }

  &::placeholder {
    font-weight: var(--fw-light);
    font-size: var(--fs-h4);
    color: var(--color-subtext);
  }
`;

export const PromptText = styled.span`
  font-weight: var(--fw-light);
  font-size: var(--fs-h5);
  color: var(--color-submain);
`;

export const Btn = styled.button`
  width: 100%;
  padding: 10px 32px;
  background-color: var(--color-main);
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h3);
  color: var(--color-second-text);
  margin-top: 36px;

  &:hover {
    background-color: var(--color-section);
    color: var(--color-text);
  }
`;
