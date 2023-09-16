import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import {
  DivLoader,
  DivWrapper,
  DivLine,
  BtnBox,
  BtnLeft,
  // BtnRight,
  IconBox,
  BtnText,
  // CorrectBox,
  // DeleteBox,
  // IconBoxDelete,
  // BtnTextDelete,
  UserBox,
  UserLeft,
  UserImgBox,
  UserImg,
  UserName,
  UserOccupation,
  UserRight,
  ContentBox,
  ContentLeft,
  ImgBox,
  Img,
  ContentRight,
  TitleBox,
  Title,
  TextBox,
  Text,
  PromotionBox,
  Item,
  Number,
  CommentsBox,
} from "./DetailsPostPage.styled";
import Comments from "../../components/Comments/Comments";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { Loader } from "../../components/Loader/Loader.styled";
import axiosURL from "../../utils/axios";
import { mainURL } from "../../utils/services";
import noAvatar from "../../image/no-avatar.png";
import noPhoto from "../../image/no-photo.png";
// import { useSelector, useDispatch } from "react-redux";
// import { removePost } from "../../redux/features/post/postSlice";
// import { toast } from "react-toastify";
// import { IoIosTrash, IoMdCreate } from "react-icons/io";

const DetailsPostPage = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const fetchPost = useCallback(async () => {
    const { data } = await axiosURL.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (!post) {
    return (
      <ContainerContent>
        <DivLoader>
          <Loader />
        </DivLoader>
      </ContainerContent>
    );
  }

  // const removePostHandler = () => {
  //   try {
  //     dispatch(removePost(params.id));
  //     toast("The post has been deleted.");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ContainerContent>
      <DivWrapper>
        <BtnBox>
          <BtnLeft preventScrollReset={true} onClick={() => navigate(-1)}>
            <IconBox>
              <IoIosArrowBack size={16} />
            </IconBox>
            <BtnText>Go Back</BtnText>
          </BtnLeft>

          {/* {user?._id === post.author && (
            <BtnRight>
              <Link to={`/${params.id}/edit`}>
                <CorrectBox>
                  <IconBox>
                    <IoMdCreate size={16} />
                  </IconBox>
                  <BtnText>Edit</BtnText>
                </CorrectBox>
              </Link>
              <DeleteBox onClick={removePostHandler}>
                <IconBoxDelete>
                  <IoIosTrash size={16} />
                </IconBoxDelete>
                <BtnTextDelete>Delete</BtnTextDelete>
              </DeleteBox>
            </BtnRight>
          )} */}
        </BtnBox>

        <DivLine></DivLine>

        <UserBox>
          <UserLeft>
            {post.picturePath ? (
              <UserImgBox>
                <UserImg src={mainURL + `/${post.picturePath}`} alt="" />
              </UserImgBox>
            ) : (
              <UserImgBox>
                <UserImg src={noAvatar} alt="" />
              </UserImgBox>
            )}
            <div>
              <Link>
                <UserName>{`${post.firstName} ${post.lastName}`}</UserName>
              </Link>
              <UserOccupation>{post.occupation}</UserOccupation>
            </div>
          </UserLeft>
          <UserRight>
            <Moment date={post.createdAt} format="LLL" />
          </UserRight>
        </UserBox>

        <DivLine></DivLine>

        <ContentBox>
          <ContentLeft>
            <ImgBox>
              {post.imgUrl ? (
                <Img src={mainURL + `/${post.imgUrl}`} alt="" />
              ) : (
                <Img src={noPhoto} alt="" />
              )}
            </ImgBox>
          </ContentLeft>
          <ContentRight>
            <TitleBox>
              <Title>{post.title}</Title>
            </TitleBox>
            <TextBox>
              <Text>{post.text}</Text>
            </TextBox>
            <PromotionBox>
              <Item>
                <IconBox>
                  <AiOutlineComment size={16} />
                </IconBox>
                <Number>{post.comments?.length}</Number>
              </Item>
            </PromotionBox>
          </ContentRight>
        </ContentBox>

        <DivLine></DivLine>

        <CommentsBox>
          <Comments />
        </CommentsBox>
      </DivWrapper>
    </ContainerContent>
  );
};

export default DetailsPostPage;
