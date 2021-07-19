import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '../SvgImages/search.svg';
import { ReactComponent as BellSVG } from '../SvgImages/bell.svg';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isShowDropdownMenu, setIsShowDropdownMenu] = useState(false);

  const handleShowDropdownMenu = (bool, i) => {
    if (i === 0) setIsShowDropdownMenu(bool);
    else setIsShowDropdownMenu(false);
  };

  return (
    <NavContainer>
      <Nav>
        <Logo>
          <LogoLink to="/">wanted</LogoLink>
        </Logo>

        <MenuList>
          {MENULIST.map((menu, i) => (
            <MenuItem
              key={menu.id}
              onMouseEnter={() => handleShowDropdownMenu(true, i)}
            >
              <Link to="/">{menu.title}</Link>
            </MenuItem>
          ))}
        </MenuList>

        <AsideList>
          <ul>
            <AsideLi>
              <button type="button">
                <SearchSVG />
              </button>
            </AsideLi>
            <AsideLi>
              <button type="button">
                <BellSVG />
              </button>
            </AsideLi>
            <AsideLi>
              <AvatarBtn type="button">
                <div>
                  <Avatar src="images/profile_default.png" alt="avatar" />
                </div>
              </AvatarBtn>
            </AsideLi>
            <AsideLi>
              <DashBoardLink to="/">기업 서비스</DashBoardLink>
            </AsideLi>
          </ul>
        </AsideList>
      </Nav>
      <DropdownMenu
        isShowDropdownMenu={isShowDropdownMenu}
        handleShowDropdownMenu={handleShowDropdownMenu}
      />
    </NavContainer>
  );
};

export default Navbar;

const MENULIST = [
  { id: 1, title: '탐색' },
  { id: 2, title: '커리어 성장' },
  { id: 3, title: '직군별 연봉' },
  { id: 4, title: '이력서' },
  { id: 5, title: '매치업' },
  { id: 6, title: '프리랜서' },
];

// 반응형 Nav 적용하기
// @media (min-width: 1200px)
// Nav {
//     margin: 0 auto;
//     height: 50px;
// }

// @media (min-width: 1200px)
// Nav {
//     width: 87.72%;
// }

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

const Nav = styled.nav`
  position: relative;
  ${({ theme }) => theme.FlexSet('space-between', 'center')}
  max-width: 1060px;
  height: 50px;
  margin: 0 auto;
  /* background-color: yellow; */
`;

const Logo = styled.div`
  ${({ theme }) => theme.FlexSet('', 'center')}
`;

const LogoLink = styled(Link)`
  font-size: 22px;
  font-weight: 600;
`;

const MenuList = styled.ul`
  ${({ theme }) => theme.FlexSet('', 'center')}
`;

const MenuItem = styled.li`
  display: flex;
  height: 50px;

  &:hover {
    border-bottom: 2px solid #ddd;
  }

  a {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
  }
`;

const AsideList = styled.ul`
  height: 100;
`;

const AsideLi = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  cursor: pointer;

  button {
    position: relative;
    margin-top: 5px;
    padding: 0 8px;
    background-color: inherit;
    border: none;
  }

  &:last-child::before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

const AvatarBtn = styled.button`
  margin-right: 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DashBoardLink = styled(Link)`
  font-size: 13px;
  color: #666;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 6px 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
`;
