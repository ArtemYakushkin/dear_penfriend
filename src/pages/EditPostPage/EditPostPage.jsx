import {
  DivWrapper,
  DivImg,
  Line,
  Img,
  Form,
  DivInput,
  Label,
  Input,
  Textarea,
  DivBtnBox,
  Btn,
  BtnCancel,
} from "./EditPostPage.styled";
import { IoAddCircleOutline } from "react-icons/io5";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosURL from "../../utils/axios";
import { updatePost } from "../../redux/features/post/postSlice";

const EditPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axiosURL.get(`/posts/${params.id}`);
    setTitle(data.title);
    setText(data.text);
    setOldImage(data.imgUrl);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const submitHandler = () => {
    try {
      const updatedPost = new FormData();
      updatedPost.append("title", title);
      updatedPost.append("text", text);
      updatedPost.append("id", params.id);
      updatedPost.append("image", newImage);
      dispatch(updatePost(updatedPost));
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setTitle("");
    setText("");
  };

  return (
    <ContainerContent>
      <DivWrapper>
        <DivImg>
          {oldImage && (
            <Img
              src={`https://dear-penfriend.onrender.com/${oldImage}`}
              alt=""
            />
          )}
          {newImage && <Img src={URL.createObjectURL(newImage)} alt="" />}
        </DivImg>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Line />
          <DivInput>
            <Label htmlFor="fileInput">
              <IoAddCircleOutline size={35} />
            </Label>
            <input
              id="fileInput"
              type="file"
              accept="image/*, .png, .jpg, .gif, .web"
              style={{ display: "none" }}
              onChange={(e) => {
                setNewImage(e.target.files[0]);
                setOldImage("");
              }}
            />
            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </DivInput>
          <Line />
          <Textarea
            placeholder="Tell your story..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Line />
          <DivBtnBox>
            <Btn type="submit" onClick={submitHandler}>
              Refresh
            </Btn>
            <BtnCancel onClick={clearFormHandler}>Cancel</BtnCancel>
          </DivBtnBox>
        </Form>
      </DivWrapper>
    </ContainerContent>
  );
};

export default EditPostPage;
