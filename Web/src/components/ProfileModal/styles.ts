import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled(Modal)`
  display: flex;
  width: 350px;
  height: 350px;
  margin-top: 100px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: solid #1da1f2 1px;
  border-radius: 10px;
  flex-direction: column;
  svg {
    align-self: flex-end;
  }
`;

export const LoadWrapper = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfileContent = styled.section`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  h4 {
    margin-top: 8px;
  }
`;

export const StatsBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 16px;
  div {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    h3 {
      color: #1da1f2;
      margin-left: 8px;
    }
  }
`;
