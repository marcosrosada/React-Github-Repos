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
        <h1>Search GitHub Repos</h1>
        <p>Search for GitHub repos using the following form</p>
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

        <div class="album py-5 bg-light">
          <div class="container">
            <div id="repos-list" class="row">
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Star
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Star
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Star
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
