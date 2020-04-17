import React from 'react';

import Header from '../../components/Header';
import Repositories from '../../components/Repositories';
import { Container } from './styles';

const Main = () => (
  <Container>
    <Header />
    <Repositories />
  </Container>
);

export default Main;
