import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Button from '../../styles/components/Button';
import Loading from '../../components/Loading';
import RepositoryItem from '../../components/RepositoryItem';
import { Container, Form, Pagination } from './styles';

class Repositories extends Component {
  state = {
    user: '',
    currentPage: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.loadRepositories();
  };

  handleInputSearchChange = (e) => {
    this.setState({ user: e.target.value });
  };

  loadRepositories = (currentPage) => {
    const { user } = this.state;
    const { getReposRequest } = this.props;

    if (user) {
      getReposRequest(user, currentPage);
    }
  };
  handleClear = () => {
    const { getReposSuccess } = this.props;
    this.setState({ user: '' });
    getReposSuccess({});
  };

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

  renderPageNumber = (index, currentPage) => {
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
  };

  render() {
    const { user, currentPage } = this.state;
    const { loading, repositories } = this.props;
    const pages = [];

    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }

    return (
      <Container>
        {loading.loadingOpen && <Loading />}

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
          <div>
            <RepositoryItem />

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
  loading: state.loading,
  repositories: state.repositories,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
