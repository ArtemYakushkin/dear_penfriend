import { useState } from "react";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import {
  DivWrapper,
  Form,
  Line,
  Title,
  Input,
  DivWrappAvatar,
  DivBoxAvatar,
  DivBoxInput,
  DivAvatar,
  AvatarImg,
  Label,
  BtnLogin,
} from "./RegisterPage.styled";
import { IoAddCircleOutline } from "react-icons/io5";
import noPhoto from "../../image/no-photo.png";
import axios from "axios";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picturePath, setPicturePath] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("occupation", occupation);
    formData.append("location", location);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", picturePath);

    await axios
      .post("https://dear-penfriend.onrender.com/auth/register", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
    window.location.replace("/login");
  };

  return (
    <ContainerContent>
      <DivWrapper>
        <Form onSubmit={onSubmit}>
          <Title>Registration</Title>
          <Line />
          <Input
            placeholder="First name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstname"
          />
          <Line />
          <Input
            placeholder="Last name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastname"
          />
          <Line />
          <DivWrappAvatar>
            <DivBoxAvatar>
              {picturePath ? (
                <DivAvatar>
                  <AvatarImg src={URL.createObjectURL(picturePath)} alt="" />
                </DivAvatar>
              ) : (
                <DivAvatar>
                  <AvatarImg src={noPhoto} alt="" />
                </DivAvatar>
              )}
              <Label htmlFor="fileInput">
                <IoAddCircleOutline size={35} />
              </Label>
              <input
                id="fileInput"
                type="file"
                accept="image/*, .png, .jpg, .gif, .web"
                style={{ display: "none" }}
                onChange={(e) => setPicturePath(e.target.files[0])}
              />
            </DivBoxAvatar>
            <DivBoxInput>
              <Input
                placeholder="Age"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                name="age"
              />
              <Line />
              <Input
                placeholder="Occupation"
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                name="occupation"
              />
              <Line />
              <Input
                placeholder="Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                name="location"
              />
            </DivBoxInput>
          </DivWrappAvatar>
          <Line />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Line />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <Line />
          <BtnLogin type="submit">SIGN UP</BtnLogin>
        </Form>
      </DivWrapper>
    </ContainerContent>
  );
};

export default RegisterPage;
