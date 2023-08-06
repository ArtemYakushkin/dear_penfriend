import Moment from "react-moment";
import { Link } from "react-router-dom";
import { AiOutlineComment, AiOutlineEye } from "react-icons/ai";
import noAvatar from "../../image/no-avatar.png";
import {
  DivWrapper,
  DivLine,
  DivDate,
  DivUser,
  UserImgBox,
  UserImg,
  UserName,
  UserOccupation,
  TitleBox,
  Title,
  TextBox,
  Text,
  ImgBox,
  Img,
  DivPromotion,
  Item,
  IconBox,
  Number,
} from "./Post.styled";

const Post = ({ post }) => {
  const fullName = `${post.firstName} ${post.lastName}`;

  return (
    <DivWrapper>
      <DivDate>
        <Moment date={post.createdAt} format="LLL" />
      </DivDate>

      <DivLine></DivLine>

      <Link to={`user/${post.author}`}>
        <DivUser>
          {post.picturePath ? (
            <UserImgBox>
              <UserImg
                src={`https://localhost:3002/${post.picturePath}`}
                alt=""
              />
            </UserImgBox>
          ) : (
            <UserImgBox>
              <UserImg src={noAvatar} alt="" />
            </UserImgBox>
          )}
          <div>
            <UserName>{fullName}</UserName>
            <UserOccupation>{post.occupation}</UserOccupation>
          </div>
        </DivUser>
      </Link>

      <DivLine></DivLine>

      <Link to={`/${post._id}`}>
        <TitleBox>
          <Title>{post.title}</Title>
        </TitleBox>
        <TextBox>
          <Text>{post.text}</Text>
        </TextBox>
        <ImgBox>
          {post.imgUrl && (
            <Img src={`https://localhost:3002/${post.imgUrl}`} alt="" />
          )}
        </ImgBox>
      </Link>

      <DivLine></DivLine>

      <DivPromotion>
        <Item>
          <IconBox>
            <AiOutlineComment size={16} />
          </IconBox>
          <Number>{post.comments?.length}</Number>
        </Item>
        <Item>
          <IconBox>
            <AiOutlineEye size={16} />
          </IconBox>
          <Number>{post.views}</Number>
        </Item>
      </DivPromotion>
    </DivWrapper>
  );
};

export default Post;
