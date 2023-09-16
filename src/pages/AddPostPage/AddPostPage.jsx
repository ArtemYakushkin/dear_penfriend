import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
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
  Btn,
} from "./AddPostPage.styled";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { createPost } from "../../redux/features/post/postSlice";
import noPhoto from "../../image/no-photo.png";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      dispatch(createPost(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerContent>
      <DivWrapper>
        {image ? (
          <DivImg>
            <Img src={URL.createObjectURL(image)} alt="" />
          </DivImg>
        ) : (
          <DivImg>
            <Img src={noPhoto} alt="" />
          </DivImg>
        )}
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
              onChange={(e) => setImage(e.target.files[0])}
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
          <Btn type="submit" onClick={submitHandler}>
            Publish
          </Btn>
        </Form>
      </DivWrapper>
    </ContainerContent>
  );
};

export default AddPostPage;
