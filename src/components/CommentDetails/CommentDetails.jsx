import {
  DivWrapper,
  Line,
  DivUser,
  UserName,
  DivDate,
  Text,
} from "./CommentDetails.styled";
import Moment from "react-moment";

const CommentDetails = ({ cmt }) => {
  const fullname = `${cmt.firstName} ${cmt.lastName}`;

  return (
    <DivWrapper>
      <DivUser>
        <UserName>{fullname}</UserName>
        <DivDate>
          <Moment className="commentDate" date={cmt.createdAt} format="LLL" />
        </DivDate>
      </DivUser>
      <div>
        <Text>{cmt.comment}</Text>
      </div>
      <Line />
    </DivWrapper>
  );
};

export default CommentDetails;
