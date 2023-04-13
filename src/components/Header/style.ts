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