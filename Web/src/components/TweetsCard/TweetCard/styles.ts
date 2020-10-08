import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  background-color: #f9f9f9;
  min-height: 70px;
  border-radius: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: solid #1da1f2 1px;
  padding: 16px;
`;

export const User = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-width: 150px;
  max-width: 150px;
  border: none;
  border-right: solid #1da1f2 1px;
  background-color: transparent;
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  p {
    margin-top: 8px;
  }
`;

export const Tweet = styled.div`
  padding: 16px;
  p {
    font-size: 18px;
  }
  img {
    width: 200px;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
