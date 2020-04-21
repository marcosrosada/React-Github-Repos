import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import Modal from '../../components/Modal';
import Button from '../../styles/components/Button';
import { Container } from './styles';

const RepositoryItem = ({ repositories, openModal, closeModal }) => {
  const [repositoryView, setRepositoryView] = useState(null);
  const [viewModal, setViewModal] = useState('');

  const handlerView = (repository, view) => {
    setRepositoryView(repository);
    setViewModal(view);
    openModal();
  };

  return (
    <Container>
      <div className="album py-4">
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
                          onClick={() => handlerView(repository, 'view')}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handlerView(repository, 'confirm')}
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

        {repositories.reposModalOpen && viewModal === 'view' && (
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
            <div className="footer-button">
              <Button
                type="button"
                onClick={closeModal}
                filled={false}
                color="gray"
              >
                Cancelar
              </Button>
            </div>
          </Modal>
        )}

        {repositories.reposModalOpen && viewModal === 'confirm' && (
          <Modal>
            <h1>Confirm</h1>

            <p>Do you confirm staring repo?</p>

            <div className="footer-button">
              <Button
                type="button"
                onClick={closeModal}
                filled={false}
                color="gray"
              >
                Cancelar
              </Button>
              <Button type="button" onClick={closeModal}>
                Confirm
              </Button>
            </div>
          </Modal>
        )}
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
