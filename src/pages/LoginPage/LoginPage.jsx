import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, checkIsAuth } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import {
  DivWrapper,
  Form,
  Line,
  Title,
  Input,
  BtnLogin,
  DivSwitch,
  BtnSwitch,
  Span,
} from "./LoginPage.styled";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      navigate("/");
    }
  }, [status, isAuth, navigate]);

  return (
    <ContainerContent>
      <DivWrapper>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Title>Authorization</Title>
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
          <BtnLogin type="submit" onClick={handleSubmit}>
            SIGN IN
          </BtnLogin>
          <DivSwitch>
            <Link to={"/register"}>
              <BtnSwitch>
                Don’t have an account? <Span className="loginLog">Sign Up</Span>
              </BtnSwitch>
            </Link>
          </DivSwitch>
        </Form>
      </DivWrapper>
    </ContainerContent>
  );
};

export default LoginPage;
