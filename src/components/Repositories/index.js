import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Button from '../../styles/components/Button';
import { Container, Form, Pagination } from './styles';

class Repositories extends Component {
  state = {
    user: '',
    currentPage: 1,
  };

  handleSubmit = (e) => {
    const { currentPage } = this.state;

    e.preventDefault();

    this.loadRepositories(currentPage);
  };

  handleInputSearchChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleClear = () => {
    this.setState({ user: '' });
  };

  loadRepositories(currentPage) {
    const { user } = this.state;
    const { getReposRequest } = this.props;
    if (user) {
      getReposRequest(user, currentPage);
    }
  }

  prevPage = () => {
    let { currentPage } = this.state;

    if (currentPage === 1) return;

    this.setState({ currentPage: (currentPage -= 1) });
    this.loadRepositories(currentPage);
  };

  nextPage = () => {
    let { currentPage } = this.state;
    const { repositories } = this.props;

    if (currentPage === repositories.data.total_count) return;
    this.setState({ currentPage: (currentPage += 1) });
    this.loadRepositories(currentPage);
  };

  renderPageNumber(index, currentPage) {
    return (
      <li
        key={index}
        className={`page-item ${currentPage === index ? 'active' : ''}`}
      >
        <button
          className="page-link"
          onClick={() => this.loadRepositories(index)}
        >
          {index}
        </button>
      </li>
    );
  }

  render() {
    const { user, currentPage } = this.state;
    const { repositories } = this.props;
    const pages = [];

    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }

    return (
      <Container>
        <h1>Search GitHub Repos</h1>
        <p>Search for GitHub repos using the following form</p>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={user}
            placeholder="Github users"
            onChange={this.handleInputSearchChange}
          />

          <Button type="submit">Search</Button>
          <Button color="gray" onClick={this.handleClear}>
            Clear
          </Button>
        </Form>

        {repositories.data.items && (
          <div className="album py-5">
            <div className="container">
              <div id="repos-list" className="row">
                {repositories.data.items.map((repository) => (
                  <div key={repository.id} className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100">
                      <img
                        src={repository.owner.avatar_url}
                        alt={repository.name}
                        title={repository.name}
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <h5 className="card-title" title={repository.name}>
                          {repository.name}
                        </h5>
                        <p className="card-text" title={repository.description}>
                          {repository.description}
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
                ))}
              </div>
            </div>

            {repositories.data.items.length === 0 && (
              <div className="alert alert-danger" role="alert">
                Ops! No results, try again!
              </div>
            )}

            <Pagination>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                >
                  <button className="page-link" onClick={this.prevPage}>
                    Previous
                  </button>
                </li>

                {pages.map((index) =>
                  this.renderPageNumber(index, currentPage)
                )}

                <li
                  className={`page-item ${
                    currentPage === repositories.data.total_count
                      ? 'disabled'
                      : ''
                  }`}
                >
                  <button className="page-link" onClick={this.nextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </Pagination>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
