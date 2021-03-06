import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 1030;
  padding: 20px;
  background: #202225;
  color: #b9bbbe;
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
