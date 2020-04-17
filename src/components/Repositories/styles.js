import styled from 'styled-components';

export const Container = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 700px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    color: #ccc;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  p {
    margin: 10px 0 20px;
    color: #b9bbbe;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    margin-top: 0;
    width: 300px;
  }
`;
