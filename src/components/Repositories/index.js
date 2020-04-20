import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Button from '../../styles/components/Button';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import RepositoryItem from '../../components/RepositoryItem';
import { Container, Form } from './styles';

class Repositories extends Component {
  state = {
    user: '',
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
    const { getReposSuccess } = this.props;
    this.setState({ user: '' });
    getReposSuccess({});
  };

  render() {
    const { user } = this.state;
    const { loading, repositories } = this.props;

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

            <Pagination user={user} />
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
