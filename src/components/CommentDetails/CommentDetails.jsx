import { useState } from "react";
import Moment from "react-moment";
import {
  DivWrapper,
  DivInitialBox,
  Line,
  DivInitials,
  InitialText,
  DivUserBox,
  DivUserName,
  UserName,
  UserOccupation,
  DivDate,
  Text,
} from "./CommentDetails.styled";
import Modal from "../Modal/Modal";

const CommentDetails = ({ cmt }) => {
  const fullname = `${cmt.firstName} ${cmt.lastName}`;
  const [open, setOpen] = useState(false);

  return (
    <>
      <DivWrapper>
        <DivUserBox>
          <DivInitialBox>
            <DivInitials
              onClick={() => {
                setOpen(true);
              }}
            >
              <InitialText>
                {cmt.firstName.trim().toUpperCase().split("").slice(0, 1)}
                {cmt.lastName.trim().toUpperCase().split("").slice(0, 1)}
              </InitialText>
            </DivInitials>
            <DivUserName>
              <UserName>{fullname}</UserName>
              <UserOccupation>{cmt.occupation}</UserOccupation>
            </DivUserName>
          </DivInitialBox>
          <DivDate>
            <Moment className="commentDate" date={cmt.createdAt} format="LLL" />
          </DivDate>
        </DivUserBox>
        <Text>{cmt.comment}</Text>
      </DivWrapper>
      <Line />
      {open && <Modal cmt={cmt} closeModal={setOpen} open={open} />}
    </>
  );
};

export default CommentDetails;
