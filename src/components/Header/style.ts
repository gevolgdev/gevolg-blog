import { Link } from 'react-router-dom';
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    
    span {
      font-weight: normal;
      color: #3e3e3e;
    }
  }
`;

export const DashboardButton = styled(Link)`
  width: 140px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-radius: 7px;
  background: #22c55e;
  border: 2px solid #22c55e;
  color: white;
  font-size: .9rem;
`
export const FeedButton = styled(Link)`
  width: 140px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-radius: 7px;
  border: 2px solid #1e1e1e;
  color: #1e1e1e;
  font-size: .9rem;
`