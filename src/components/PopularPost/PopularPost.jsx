import {
  DivWrapper,
  Line,
  DivBoxImg,
  Img,
  DivBoxInfo,
  DivBoxTop,
  UserName,
  Date,
  DivBoxCenter,
  Title,
  Text,
  DivBoxBottom,
  Item,
  IconBox,
  Number,
} from "./PopularPost.styled";
import noPhoto from "../../image/no-photo.png";
import { BsEyeFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { mainURL } from "../../utils/services";

const PopularPost = ({ post }) => {
  const fullName = `${post.firstName} ${post.lastName}`;

  return (
    <Link to={`/${post._id}`}>
      <DivWrapper>
        <DivBoxImg>
          {post.imgUrl ? (
            <Img src={mainURL + `/${post.imgUrl}`} alt="" />
          ) : (
            <Img src={noPhoto} alt="" />
          )}
        </DivBoxImg>
        <DivBoxInfo>
          <DivBoxTop>
            <UserName>{fullName}</UserName>
            <Date>
              <Moment date={post.createdAt} format="LLL" />
            </Date>
          </DivBoxTop>

          <Line></Line>

          <DivBoxCenter>
            <Title>{post.title}</Title>
            <Text>{post.text}</Text>
          </DivBoxCenter>

          <Line></Line>

          <DivBoxBottom>
            <Item>
              <IconBox>
                <FaComment size={16} />
              </IconBox>
              <Number>{post.comments?.length || 0}</Number>
            </Item>
            <Item>
              <IconBox>
                <BsEyeFill size={16} />
              </IconBox>
              <Number>{post.views}</Number>
            </Item>
          </DivBoxBottom>
        </DivBoxInfo>
      </DivWrapper>
    </Link>
  );
};

export default PopularPost;
