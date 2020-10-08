import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  margin-top: 32px;
  border-radius: 10px;
  border: solid #1da1f2 1px;
`;

export const TopBar = styled.div`
  div {
    display: flex;
    h3 {
      margin-left: 16px;
    }
  }
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const TweetsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
