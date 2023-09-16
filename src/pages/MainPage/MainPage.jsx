import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import Post from "../../components/Post/Post";
import { Loader } from "../../components/Loader/Loader.styled";
import Search from "../../components/Search/Search";
import { getAllPosts } from "../../redux/features/post/postSlice";
import { DivWrapper, DivLoader } from "./MainPage.styled";

const MainPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return (
      <ContainerContent>
        <DivLoader>
          <Loader />
        </DivLoader>
      </ContainerContent>
    );
  }

  const filteredPost = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Search value={search} onChangeFilter={setSearch} />
      <ContainerContent>
        <DivWrapper>
          {filteredPost?.map((post, idx) => (
            <Post key={idx} post={post} />
          ))}
        </DivWrapper>
      </ContainerContent>
    </>
  );
};

export default MainPage;
