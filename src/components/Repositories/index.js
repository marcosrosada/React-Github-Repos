import React, { Component } from 'react';

import Button from '../../styles/components/Button';
import { Container, Form } from './styles';

export default class Repositories extends Component {
  state = {
    search: '',
  };

  handleInputSearchChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {
    const { search } = this.state;

    return (
      <Container>
        <h1>Search GitHub Repos</h1>
        <p>Search for GitHub repos using the following form</p>

        <Form>
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Github users"
            onChange={this.handleInputSearchChange}
          />

          <Button type="submit">Search</Button>
          <Button color="gray">Clear</Button>
        </Form>

        <div className="album py-5">
          <div className="container">
            <div id="repos-list" className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Star
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Star
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://picsum.photos/300/225"
                    alt="repo owner avatar"
                    width="100%"
                    height="225"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
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
