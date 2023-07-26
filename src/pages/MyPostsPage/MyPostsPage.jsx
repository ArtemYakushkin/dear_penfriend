import { useState, useEffect } from "react";
import axiosURL from "../../utils/axios";
import MyPost from "../../components/MyPost/MyPost";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { DivWrapper, NoPostText } from "./MyPostsPage.styled";

const MyPostsPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await axiosURL.get("/posts/user/me");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  if (!posts.length) {
    return (
      <ContainerContent>
        <NoPostText>
          You don't have any posts yet. Go to the "Add Post" tab and add your
          first post!
        </NoPostText>
      </ContainerContent>
    );
  }

  return (
    <ContainerContent>
      <DivWrapper>
        {posts?.map((post, idx) => (
          <MyPost post={post} key={idx} />
        ))}
      </DivWrapper>
    </ContainerContent>
  );
};

export default MyPostsPage;
