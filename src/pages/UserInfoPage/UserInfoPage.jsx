import {
  DivWrapper,
  DivLeft,
  DivRight,
  UserImgBox,
  UserImg,
  H1,
  DivLine,
  Ul,
  Li,
  Title,
  Text,
  NoPostText,
} from "./UserInfoPage.styled";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axiosURL from "../../utils/axios";
import noAvatar from "../../image/no-avatar-2.png";
import { checkIsAuth } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { mainURL } from "../../utils/services";

const UserInfoPage = () => {
  const [user, setUser] = useState(null);
  const params = useParams();
  const isAuth = useSelector(checkIsAuth);

  const getUser = useCallback(async () => {
    const { data } = await axiosURL.get(`/user/${params.id}`);
    setUser(data);
  }, [params.id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <ContainerContent>
      {isAuth ? (
        <DivWrapper>
          <DivLeft>
            {user.picturePath ? (
              <UserImgBox>
                <UserImg src={mainURL + `/${user.picturePath}`} alt="" />
              </UserImgBox>
            ) : (
              <UserImgBox>
                <UserImg src={noAvatar} alt="" />
              </UserImgBox>
            )}
          </DivLeft>
          <DivRight>
            <H1>
              {user.firstName} {user.lastName}
            </H1>
            <DivLine />
            <Ul>
              <Li>
                <Title>Age</Title>
                <Text>{user.age} years</Text>
              </Li>
              <Li>
                <Title>Occupation</Title>
                <Text>{user.occupation}</Text>
              </Li>
              <Li>
                <Title>Location</Title>
                <Text>{user.location}</Text>
              </Li>
              <Li>
                <Title>Email adress</Title>
                <Text>{user.email}</Text>
              </Li>
              <Li>
                <Title>Posts</Title>
                <Text>{user.posts.length}</Text>
              </Li>
            </Ul>
            <DivLine />
          </DivRight>
        </DivWrapper>
      ) : (
        <NoPostText>Please login!</NoPostText>
      )}
    </ContainerContent>
  );
};

export default UserInfoPage;
