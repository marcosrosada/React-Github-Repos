import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .page-item.active .page-link {
    background-color: #4980bc;
    border-color: #4980bc;
  }

  .page-link {
    color: #4980bc;
  }
`;
