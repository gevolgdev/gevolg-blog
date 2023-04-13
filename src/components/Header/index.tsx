import React from 'react';
import { HeaderContainer, DashboardButton, FeedButton } from './style';

interface PagesProps {
  dashboard?: boolean;
  feed?: boolean;
};

const chooseButton: React.FC<PagesProps> = ({dashboard = false, feed = false}) => {
  if (dashboard) {
    return (
      <DashboardButton to='/dashboard'>Novo Artigo</DashboardButton>
    )
  };
  if (feed) {
    return (
      <FeedButton to='/'>Ver artigos</FeedButton>
    )
  };
  return null;
};

const Header: React.FC<PagesProps> = ({dashboard = false, feed = false}) => {

  return (
    <HeaderContainer>
      <h1 className='title'>
        Gevolg<span>blog</span>
      </h1>
      {chooseButton({dashboard, feed})}
    </HeaderContainer>
  )
};

export default Header;