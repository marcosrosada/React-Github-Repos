import styled from 'styled-components';

export const Container = styled.div`
  /* width: 75%; */
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 10px 0;
    color: #b9bbbe;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin: 0;
  }

  Button {
    margin: 0 0 0 10px;
  }
`;
