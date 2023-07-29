import styled from "styled-components";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";

const Header = ({ handleToggleSidebar }) => {
  const user = useSelector(state => state.auth?.user);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
    localStorage.setItem('defaultKeyword', 'All');
  };

  return (
    <Nav>
      <FaBars className="_menu" size={20} onClick={() => handleToggleSidebar()} />
      <img className="_logo" src="/images/icon.png" alt="CricShot" />
      {user && (
        <LogOut className="_logout">
          <Icon>
            <img src={user?.photoURL} alt={user?.name} />
          </Icon>
          <DropDown className="_dropdown">
            <span onClick={logOutHandler}>Log Out</span>
          </DropDown>
        </LogOut>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 10%;
  width: 100%;
  padding: 0 10px;
  position: fixed;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  letter-spacing: 16px;
  z-index: 999;
`;

const DropDown = styled.div`
  position: absolute;
  top: 38px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 4px;
  font-size: 15px;
  letter-spacing: 1.5px;
  width: auto;
  opacity: 0;
`;

const LogOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      font-family: sans-serif;
      opacity: 3;
      transition-duration: 0.1s;
    }
  }
`;

const Icon = styled.div`
  flex: 0.15;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    border-radius: 50%;
    width: 37px;
    object-fit: contain;
  }
`;

export default Header;