import React from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const DropdownMenu = ({ isShowDropdownMenu, handleShowDropdownMenu }) => {
  return (
    <DropdownMenuWrapper
      isShowMenu={isShowDropdownMenu}
      onMouseOver={() => handleShowDropdownMenu(false, 0)}
    >
      <CenterContainer
        isShowMenu={isShowDropdownMenu}
        onMouseOver={(e) => e.stopPropagation()}
      >
        <Center>
          {SUBMENULIST.map((item, i) => (
            <SubMenuContainer key={i}>
              <SubMenu key={i} item={item} />
            </SubMenuContainer>
          ))}
        </Center>
      </CenterContainer>
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;

const SUBMENULIST = [
  {
    main: [{ text: '영업', link: '/' }],
    sub: [
      { text: '기업영업', link: '/' },
      { text: '외부영업', link: '/' },
      { text: '영업관리자', link: '/' },
      { text: '기술영업', link: '/' },
      { text: '주요고객사 담당자', link: '/' },
      { text: '솔루션 컨설턴트', link: '/' },
      { text: '해외영업', link: '/' },
    ],
    more: '/',
  },
  {
    main: [{ text: '미디어', link: '/' }],
    sub: [
      { text: '콘텐츠 크리에이터', link: '/' },
      { text: '피디', link: '/' },
      { text: '영상편집가', link: '/' },
      { text: '에디터', link: '/' },
      { text: '비디오제작', link: '/' },
      { text: '작가', link: '/' },
      { text: '출판 기획자', link: '/' },
    ],
    more: '/',
  },
  {
    main: [{ text: '인사', link: '/' }],
    sub: [
      { text: '인사담당', link: '/' },
      { text: '리쿠루터', link: '/' },
      { text: '조직문화', link: '/' },
      { text: '평가보상', link: '/' },
      { text: '헤드헌터', link: '/' },
      { text: 'HRD', link: '/' },
      { text: 'HRBP', link: '/' },
    ],
    more: '/',
  },
  {
    main: [{ text: '게임제작', link: '/' }],
    sub: [
      { text: '게임 기획자', link: '/' },
      { text: '게임 그래픽 디자이너', link: '/' },
      { text: '모바일 게임 개발자', link: '/' },
      { text: '게임 클라이언트 개발자', link: '/' },
      { text: '게임 아티스트', link: '/' },
      { text: '유니티 개발자', link: '/' },
      { text: '게임 서버 개발자', link: '/' },
    ],
    more: '/',
  },
  {
    main: [{ text: '금융', link: '/' }],
    sub: [
      { text: '회계 담당', link: '/' },
      { text: '재무 담당자', link: '/' },
      { text: 'IR', link: '/' },
      { text: '투자증권', link: '/' },
      { text: '재무분석가', link: '/' },
      { text: '애널리스트', link: '/' },
      { text: '내부통제 담당자', link: '/' },
    ],
    more: '/',
  },
  {
    main: [
      { text: '엔지니어링 설계', link: '/' },
      { text: '물류 무역', link: '/' },
      { text: '제조 생상', link: '/' },
      { text: '의료 바이오', link: '/' },
      { text: '교육', link: '/' },
      { text: '법률 법집행기관', link: '/' },
      { text: '식 음료', link: '/' },
      { text: '건설 시설', link: '/' },
      { text: '공공 복지', link: '/' },
    ],
  },
];

const DropdownMenuWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ isShowMenu }) => (isShowMenu ? '1' : '0')};
  overflow: hidden;
  transition: 0.5s;
`;

const CenterContainer = styled.div`
  position: relative;
  height: ${({ isShowMenu }) => (isShowMenu ? '100%' : '0')};
  max-height: 370px;
  background-color: #fff;
  transition: 0.5s;
`;

const Center = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1060px;

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

const SubMenuContainer = styled.div`
  width: 16.666%;
  padding: 40px 20px 0 0;
  text-align: left;
`;
