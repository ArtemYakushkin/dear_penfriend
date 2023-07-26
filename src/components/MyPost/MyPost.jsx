import {
  DivWrapper,
  DivBoxImg,
  Img,
  DivBoxTitle,
  Title,
  DivBoxBottom,
  DivBoxLeft,
  DivBoxIcon,
  DivIcon,
  IconText,
  DivDate,
} from "./MyPost.styled";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import Moment from "react-moment";
import noPhoto from "../../image/no-photo.png";

const MyPost = ({ post }) => {
  return (
    <Link to={`/${post._id}`}>
      <DivWrapper>
        <DivBoxImg>
          {post.imgUrl ? (
            <Img
              src={`http://localhost:3002/${post.imgUrl}`}
              alt="post_image"
            />
          ) : (
            <Img src={noPhoto} alt="post_image" />
          )}
        </DivBoxImg>
        <DivBoxTitle>
          <Title>{post.title}</Title>
        </DivBoxTitle>
        <DivBoxBottom>
          <DivBoxLeft>
            <DivBoxIcon>
              <DivIcon>
                <FaComment size={15} />
              </DivIcon>
              <IconText>{post.comments?.length || 0}</IconText>
            </DivBoxIcon>
            <DivBoxIcon>
              <DivIcon>
                <BsEyeFill size={15} />
              </DivIcon>
              <IconText>{post.views}</IconText>
            </DivBoxIcon>
          </DivBoxLeft>
          <DivDate>
            <Moment date={post.createdAt} format="LLL" />
          </DivDate>
        </DivBoxBottom>
      </DivWrapper>
    </Link>
  );
};

export default MyPost;
