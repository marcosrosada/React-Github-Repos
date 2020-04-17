import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: #202225;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.form`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    color: #b9bbbe;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: #b9bbbe;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  button {
    margin: 20px 0 0;
  }
`;
