import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
