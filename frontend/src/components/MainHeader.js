import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">로그인페이지</NavLink>
          </li>
          <li>
            <NavLink to="/profile">프로필페이지</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
