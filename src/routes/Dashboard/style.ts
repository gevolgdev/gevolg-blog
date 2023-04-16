import styled from 'styled-components';

export const DashboardContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
`

export const DashboardContent = styled.div`
  margin: 0 auto;
  padding: 30px 0 150px;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }

  .forms-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    .flex-row {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
    .input-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input {
      display: flex;
      padding: 15px 10px;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
      outline: none;
      font-family: 'Inter', sans-serif;
      &:focus {
        outline: 1px solid #4e4e4e;
      }
    }
    .button-file {
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      padding: 15px 10px;
      font-size: 1rem;
      color: #8e8e8e;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      &:focus {
        outline: 1px solid #4e4e4e;
      }
    }
    .button-file-on {
      background: #bbf7d0;
    }
    textarea {
      height: 250px;
      display: flex;
      padding: 15px 10px;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
      outline: none;
      resize: none;
      font-family: 'Inter', sans-serif;
      &:focus {
        outline: 1px solid #4e4e4e;
      }
    }
    .post {
      width: 200px;
      background: #22c55e;
      border: none;
      color: white;
      padding: 15px 0;
      margin-left: auto;
      border-radius: 7px;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`