import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  background: #202225;
  color: #b9bbbe;
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #ccc;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding-left: 10px;
    font-size: 15px;
  }
`;
