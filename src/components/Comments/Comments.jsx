import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DivWrapper,
  Form,
  Input,
  Line,
  Btn,
  DivComWrapp,
  NoCommentText,
} from "./Comments.styled";
import { useParams } from "react-router-dom";
import {
  createComment,
  getPostComments,
} from "../../redux/features/comment/commentSlice";
import CommentDetails from "../CommentDetails/CommentDetails";
import { checkIsAuth } from "../../redux/features/auth/authSlice";

const Comments = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const { comments } = useSelector((state) => state.comment);
  const isAuth = useSelector(checkIsAuth);

  const handleSubmit = () => {
    try {
      const postId = params.id;
      dispatch(createComment({ postId, comment }));
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getPostComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <DivWrapper>
      {isAuth ? (
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Add your comment!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Btn type="submit" onClick={handleSubmit}>
            Push
          </Btn>
        </Form>
      ) : (
        <NoCommentText>
          You can add a comment to a post if you register!
        </NoCommentText>
      )}
      <Line />
      <DivComWrapp>
        {comments?.map((cmt) => (
          <CommentDetails key={cmt._id} cmt={cmt} />
        ))}
      </DivComWrapp>
    </DivWrapper>
  );
};

export default Comments;
