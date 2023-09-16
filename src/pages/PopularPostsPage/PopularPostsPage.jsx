import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DivWrapper, DivLoader } from "./PopularPostsPage.styled";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { Loader } from "../../components/Loader/Loader.styled";
import PopularPost from "../../components/PopularPost/PopularPost";
import { getAllPosts } from "../../redux/features/post/postSlice";

const PopularPostsPage = () => {
  const popularPosts = useSelector((state) => state.post.popularPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!popularPosts.length) {
    return (
      <ContainerContent>
        <DivLoader>
          <Loader />
        </DivLoader>
      </ContainerContent>
    );
  }

  return (
    <ContainerContent>
      <DivWrapper>
        {popularPosts?.map((post, idx) => (
          <PopularPost key={idx} post={post} />
        ))}
      </DivWrapper>
    </ContainerContent>
  );
};

export default PopularPostsPage;
