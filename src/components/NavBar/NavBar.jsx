import { Link } from "react-router-dom";
import { Container } from "../Container/Container.styled";
import logo from "../../image/logo-light-theme.png";
import noAvatar from "../../image/no-avatar.png";
import { IoExitOutline } from "react-icons/io5";
import DarkMode from "../DarkMode/DarkMode";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import {
  HeaderWrapp,
  AuthDiv,
  AuthBtn,
  NavDiv,
  LogoDiv,
  LogoImg,
  LogoText,
  NavItemDiv,
  NavItem,
  DivRight,
  DivPersonal,
  DivUser,
  DivAvatar,
  AvatarImg,
  UserText,
  BtnLogOut,
} from "./NavBar.styled";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const NavBar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    navigate("/");
    toast("You are logged out");
  };

  return (
    <HeaderWrapp>
      <Container>
        <NavDiv>
          <Link to={"/"}>
            <LogoDiv>
              <LogoImg src={logo} alt="" />
              <LogoText>Dear Penfriend</LogoText>
            </LogoDiv>
          </Link>
          {isAuth && (
            <NavItemDiv>
              <NavItem to={"/about"}>About</NavItem>
              <NavItem to={"/"}>Main</NavItem>
              <NavItem to={"/posts"}>My posts</NavItem>
              <NavItem to={"/new"}>Add post</NavItem>
              <NavItem to={"/popular"}>Popular posts</NavItem>
            </NavItemDiv>
          )}
          {isAuth ? (
            <DivRight>
              <DarkMode />
              <Link to={`/settings/${user._id}`}>
                <DivPersonal>
                  <DivUser>
                    {isAuth ? (
                      <DivAvatar>
                        <AvatarImg
                          src={`http://localhost:3002/${user.picturePath}`}
                          alt=""
                        />
                      </DivAvatar>
                    ) : (
                      <DivAvatar>
                        <AvatarImg src={noAvatar} alt="" />
                      </DivAvatar>
                    )}
                    {isAuth ? (
                      <UserText>{user.firstName}</UserText>
                    ) : (
                      <UserText>Your name</UserText>
                    )}
                  </DivUser>
                </DivPersonal>
              </Link>
              <BtnLogOut onClick={logoutHandler}>
                <IoExitOutline size={24} />
              </BtnLogOut>
            </DivRight>
          ) : (
            <AuthDiv>
              <AuthBtn to={"/login"}>Come In</AuthBtn>
            </AuthDiv>
          )}
          {isAuth && <BurgerIcon />}
        </NavDiv>
      </Container>
    </HeaderWrapp>
  );
};

export default NavBar;
