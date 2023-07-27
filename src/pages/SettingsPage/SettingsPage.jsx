import { useState, useCallback, useEffect } from "react";
import {
  DivWrapper,
  DivLeft,
  UserImgBox,
  UserImg,
  DivRight,
  Label,
  Form,
  Line,
  Input,
  Btn,
} from "./SettingsPage.styled";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import { useNavigate, useParams } from "react-router-dom";
import axiosURL from "../../utils/axios";
import { IoPersonAdd } from "react-icons/io5";

const SettingsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    const { data } = await axiosURL.get(`/user/${params.id}`);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
    setLocation(data.location);
    setOccupation(data.occupation);
    setOldImage(data.picturePath);
  }, [params.id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const submitHandler = async () => {
    try {
      const updatedUser = new FormData();
      updatedUser.append("firstName", firstName);
      updatedUser.append("lastName", lastName);
      updatedUser.append("age", age);
      updatedUser.append("location", location);
      updatedUser.append("occupation", occupation);
      updatedUser.append("id", params.id);
      updatedUser.append("image", newImage);

      await axiosURL.put(`/user/${params.id}`, updatedUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerContent>
      <DivWrapper>
        <DivLeft>
          <UserImgBox>
            {oldImage && (
              <UserImg
                src={`https://dear-penfriend.onrender.com/${oldImage}`}
                alt=""
              />
            )}
            {newImage && <UserImg src={URL.createObjectURL(newImage)} alt="" />}
          </UserImgBox>
        </DivLeft>
        <DivRight>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="fileInput">
              <IoPersonAdd size={45} />
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
            <Line />
            <Input
              placeholder="FirstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Line />
            <Input
              placeholder="LastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Line />
            <Input
              placeholder="Age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Line />
            <Input
              placeholder="Occupation"
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
            <Line />
            <Input
              placeholder="Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Line />
            <Btn type="submit" onClick={submitHandler}>
              Refresh
            </Btn>
          </Form>
        </DivRight>
      </DivWrapper>
    </ContainerContent>
  );
};

export default SettingsPage;
