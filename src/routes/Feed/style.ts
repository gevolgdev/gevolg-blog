import styled from "styled-components";

export const FeedContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
  }
`

export const FeedContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 0 auto;
  padding: 50px 0 150px;
  gap: 50px;

  .empty {
    margin: 50px auto 0;
    opacity: 60%;
  }
`