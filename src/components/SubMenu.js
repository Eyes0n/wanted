import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = ({ item }) => {
  const { main, sub, more } = item;

  return (
    <>
      {main?.map((main, index) => (
        <Link key={index} to={main.link}>
          <TitleText>
            <h2>{main.text}</h2>
            <ArrowIcon className="fas fa-chevron-right" />
          </TitleText>
        </Link>
      ))}
      {sub?.map((sub, index) => (
        <Link key={index} to={sub.link}>
          <SubText>{sub.text}</SubText>
        </Link>
      ))}
      {more && (
        <Link to="/">
          <More>
            <SubText>더보기</SubText>
            <ArrowIcon className="fas fa-chevron-right" />
          </More>
        </Link>
      )}
    </>
  );
};

export default SubMenu;

const TitleText = styled.div`
  ${({ theme }) => theme.FlexSet('space-between')}
  padding-bottom: 15px;

  h2 {
    width: 100%;
    color: #333;
    font-size: 17px;
    line-height: 20px;
    font-weight: 500;
    vertical-align: top;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const ArrowIcon = styled.i`
  font-size: 12px;
  color: #999;
`;

const SubText = styled.div`
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const More = styled.div`
  ${({ theme }) => theme.FlexSet('space-between')}
`;
