import React from 'react';
import { HeaderContainer } from './style';
import { Link } from 'react-router-dom';

interface PagesProps {
  dashboard?: boolean;
  feed?: boolean;
};

const chooseButton: React.FC<PagesProps> = ({dashboard = false, feed = false}) => {
  if (dashboard) {
    return (
      <Link to='/dashboard'>Novo Artigo</Link>
    )
  };
  if (feed) {
    return (
      <Link to='/'>Ver artigos</Link>
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