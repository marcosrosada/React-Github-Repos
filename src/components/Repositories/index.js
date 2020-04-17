import React, { Component } from 'react';

import Button from '../../styles/components/Button';
import { Container, Form } from './styles';

export default class Repositories extends Component {
  state = {
    search: '',
  };
  render() {
    const { search } = this.state;

    return (
      <Container>
        <Form>
          <input
            type="search"
            name="search"
            value={search}
            placeholder="Github users"
          />

          <Button type="submit">Search</Button>
          <Button color="gray">Clear</Button>
        </Form>

        <ul>
          <li>Repositories List</li>
          <li>Repositories List</li>
          <li>Repositories List</li>
          <li>Repositories List</li>
        </ul>
      </Container>
    );
  }
}
