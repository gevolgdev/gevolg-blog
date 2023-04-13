import { Link } from 'react-router-dom';
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 25px 0;

  .title {
    text-transform: uppercase;
    font-weight: 900;
    
    span {
      font-weight: normal;
      color: #3e3e3e;
    }
  }
`;

export const DashboardButton = styled(Link)`
  width: 150px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-radius: 7px;
  background: #22c55e;
  border: 2px solid #22c55e;
  color: white;
`
export const FeedButton = styled(Link)`
  width: 150px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-radius: 7px;
  border: 2px solid #1e1e1e;
  color: #1e1e1e;
`