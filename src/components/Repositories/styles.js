import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 60px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 5px 0 10px;
    color: #b9bbbe;
  }

  .card-title {
    color: #36393f;
    width: 100%;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-text {
    width: 100%;
    height: 50px;
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;

  input {
    margin: 0;
  }

  Button {
    margin: 0 0 0 10px;
  }
`;
