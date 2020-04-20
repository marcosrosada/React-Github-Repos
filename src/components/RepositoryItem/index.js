import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Modal from '../../components/Modal';
import Button from '../../styles/components/Button';
import { Container, Pagination } from './styles';

const RepositoryItem = ({ repositories, openReposModal, closeReposModal }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [repositoryView, setRepositoryView] = useState(null);
  const pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  const handlerView = (repository) => {
    setRepositoryView(repository);
    openReposModal();
  };
  // const prevPage = () => {
  //   let { currentPage } = this.state;

  //   if (currentPage === 1) return;

  //   // this.setState({ currentPage: (currentPage -= 1) });
  //   // this.loadRepositories(currentPage);
  // };

  // const nextPage = () => {
  //   let { currentPage } = this.state;
  //   const { repositories } = this.props;

  //   if (currentPage === repositories.data.total_count) return;
  //   // this.setState({ currentPage: (currentPage += 1) });
  //   // this.loadRepositories(currentPage);
  // };

  // const renderPageNumber = (index, currentPage) => {
  //   return (
  //     <li
  //       key={index}
  //       className={`page-item ${currentPage === index ? 'active' : ''}`}
  //     >
  //       <button
  //         className="page-link"
  //         onClick={() => this.loadRepositories(index)}
  //       >
  //         {index}
  //       </button>
  //     </li>
  //   );
  // };

  return (
    <Container>
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
                          onClick={() => handlerView(repository)}
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

        {repositories.reposModalOpen && (
          <Modal>
            <h1>{repositoryView.owner.login}</h1>

            <img
              src={repositoryView.owner.avatar_url}
              alt={repositoryView.name}
              title={repositoryView.name}
              width="100%"
              height="225"
            />

            <p>{repositoryView.description}</p>

            <a
              href={repositoryView.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              GO TO REPO
            </a>

            <Button
              type="button"
              onClick={closeReposModal}
              filled={false}
              color="gray"
            >
              Cancelar
            </Button>
          </Modal>
        )}
        {repositories.data.items.length === 0 && (
          <div className="alert alert-danger" role="alert">
            Ops! No results, try again!
          </div>
        )}

        {
          // <Pagination>
          //   <ul className="pagination">
          //     <li
          //       className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          //     >
          //       <button className="page-link" onClick={this.prevPage}>
          //         Previous
          //       </button>
          //     </li>
          //     {pages.map((index) => this.renderPageNumber(index, currentPage))}
          //     <li
          //       className={`page-item ${
          //         currentPage === repositories.data.total_count
          //           ? 'disabled'
          //           : ''
          //       }`}
          //     >
          //       <button className="page-link" onClick={this.nextPage}>
          //         Next
          //       </button>
          //     </li>
          //   </ul>
          // </Pagination>
        }
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryItem);
