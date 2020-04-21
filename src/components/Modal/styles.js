import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: ${(props) => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  .footer-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
