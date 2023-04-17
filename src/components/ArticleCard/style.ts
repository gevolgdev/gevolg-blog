import styled from 'styled-components';

interface StyleProps extends React.HTMLAttributes<HTMLButtonElement> {
  image: string;
}

export const ArticleContainer = styled.div<StyleProps>`
  width: 100%;
  background: white;
  padding: 40px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.02));

  .content {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 25px;

    .image{
      display: flex;
      flex-shrink: 0;
      width: 240px;
      height: 280px;
      background: ${props => props.image ? `url(${props.image}) no-repeat` : 'transparent'};
      background-size: cover;
      background-position: center;
      
      @media (max-width: 800px) {
        width: 100%;
        height: 200px;
      }
    }
    .infos {
      width: auto;
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 2rem;
      }
      p {
        width: 90%;
        margin-top: 15px;
        line-height: 1.6rem;

        @media (max-width: 800px) {
          width: 100%;
        }
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

`