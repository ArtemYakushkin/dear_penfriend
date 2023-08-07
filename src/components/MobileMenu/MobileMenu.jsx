import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { IoExitOutline } from "react-icons/io5";
import { AiFillHome, AiFillFolderAdd, AiFillHeart } from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DarkModeMobile from "../DarkModeMobile/DarkModeMobile";
import noAvatar from "../../image/no-avatar.png";
import logo from "../../image/logo-light-theme.png";
import { mainURL } from "../../utils/services";

// ---------- Styled --------------------

const MobWrapper = styled.div`
  background-color: var(--color-section);
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  padding: 52px 0;
  z-index: 9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-left: 2px solid var(--color-line);

  @media (max-width: 560px) {
    width: 100%;
    border-left: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 40px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-line);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const DivPersonal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const DivUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const DivAvatar = styled.div`
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserText = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h5);
  color: var(--color-text);
  line-height: 11px;
`;

const MobNavItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin: 24px 0;
`;

export const NavItem = styled(NavLink)`
  font-weight: var(--fw-medium);
  font-size: var(--fs-h4);
  line-height: 11px;
  color: var(--color-text);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &.active {
    color: var(--color-main);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--color-main);
  }
`;

const BtnLogOut = styled.button`
  font-family: "Rubik", sans-serif;
  font-weight: var(--fw-medium);
  font-size: var(--fs-h3);
  line-height: 11px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 30px 0;
  background-color: var(--color-submain);
  border: 1px solid var(--color-main);
  border-radius: 10px;
  padding: 8px 12px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: auto;
`;

const LogoText = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-h1);
  color: var(--color-logo);
`;

// --------------------------------------------

const MobileMenu = ({ open, toggleMenu }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    navigate("/");
    toast("You are logged out");
  };

  return (
    <MobWrapper open={open}>
      {/* <Container> */}
      <Wrapper>
        <div>
          <Line />
          <Top>
            <Link to={`/settings/${user._id}`} onClick={toggleMenu}>
              <DivPersonal>
                <DivUser>
                  {user ? (
                    <DivAvatar>
                      <AvatarImg
                        src={mainURL + `/${user.picturePath}`}
                        alt=""
                      />
                    </DivAvatar>
                  ) : (
                    <DivAvatar>
                      <AvatarImg src={noAvatar} alt="" />
                    </DivAvatar>
                  )}
                  {user ? (
                    <UserText>{user.firstName}</UserText>
                  ) : (
                    <UserText>Your name</UserText>
                  )}
                </DivUser>
              </DivPersonal>
            </Link>
            <DarkModeMobile />
          </Top>
          <Line />
          <MobNavItemDiv>
            <NavItem to={"/"} onClick={toggleMenu}>
              <AiFillHome size={20} />
              Main
            </NavItem>
            <NavItem to={"/posts"} onClick={toggleMenu}>
              <BsFillPostcardFill size={20} />
              My posts
            </NavItem>
            <NavItem to={"/new"} onClick={toggleMenu}>
              <AiFillFolderAdd size={20} />
              Add post
            </NavItem>
            <NavItem to={"/popular"} onClick={toggleMenu}>
              <AiFillHeart size={20} />
              Popular posts
            </NavItem>
          </MobNavItemDiv>
          <Line />
          <BtnLogOut onClick={logoutHandler}>
            Exit
            <Icon>
              <IoExitOutline size={24} />
            </Icon>
          </BtnLogOut>
        </div>
        <LogoBox>
          <Line />
          <LogoDiv>
            <LogoImg src={logo} alt="" />
            <LogoText>Dear Penfriend</LogoText>
          </LogoDiv>
        </LogoBox>
      </Wrapper>
      {/* </Container> */}
    </MobWrapper>
  );
};

export default MobileMenu;
