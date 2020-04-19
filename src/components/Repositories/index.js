import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Button from '../../styles/components/Button';
import { Container, Form } from './styles';

class Repositories extends Component {
  static propTypes = {
    getReposRequest: PropTypes.func.isRequired,
    repositories: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })
      ),
    }),
  };

  state = {
    user: '',
    currentPage: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { getReposRequest } = this.props;

    if (user) {
      getReposRequest(user);
    }
  };

  handleInputSearchChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleClear = () => {
    this.setState({ user: '' });
  };

  renderPageNumber(index, currentPage) {
    return (
      <li
        key={index}
        className={`page-item ${currentPage === index ? 'active' : ''}`}
      >
        <button className="page-link">{index}</button>
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

            <div className="row">
              <div className="col-md-3"></div>

              <div className="col-md-4">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? 'disabled' : ''
                    }`}
                  >
                    <button className="page-link">Previous</button>
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
                    <button className="page-link">Next</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-3"></div>
            </div>
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
