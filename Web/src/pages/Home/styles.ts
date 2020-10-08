import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 24px;
  flex-direction: column;
  h1 {
    margin-top: 32px;
    font-size: 64px;
    color: #1da1f2;
  }
`;

export const Finder = styled.div`
  display: flex;
  margin-top: 64px;
  width: 90%;
  max-width: 800px;
  justify-content: space-between;
  input {
    width: 85%;
    height: 54px;
    border-radius: 10px;
    border: solid #1da1f2;
    font-size: 24px;
    padding-left: 16px;
  }
  button {
    width: 13%;
    height: 54px;
    border-radius: 10px;
    border: none;
    background-color: #1da1f2;
  }
`;
