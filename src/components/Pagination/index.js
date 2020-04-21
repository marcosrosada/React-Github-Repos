import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReposActions from '../../store/ducks/repositories';

import { Container } from './styles';

const Pagination = ({ repositories, getReposRequest, user }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pages = [];

  useEffect(() => {
    // setLimit(Math.ceil(repositories.data.total_count / 6));
  }, []);

  getPagingRange(currentPage, {
    total: Math.ceil(repositories.data.total_count / 6),
  });

  function getPagingRange(current, { min = 1, total = 10, length = 10 }) {
    if (length > total) length = total;

    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);

    return Array.from({ length: length }, (el, i) => pages.push(start + i));
  }

  const prevPage = () => {
    if (currentPage === 1) return;

    setCurrentPage((currentPage) => currentPage - 1);
    getReposRequest(user, currentPage - 1);
  };

  const numberPage = (page) => {
    setCurrentPage(page);
    getReposRequest(user, page);
  };

  const nextPage = () => {
    if (currentPage === repositories.data.total_count) return;

    setCurrentPage((currentPage) => currentPage + 1);
    getReposRequest(user, currentPage + 1);
  };

  const renderPageNumber = (index, currentPage) => {
    return (
      <li
        key={index}
        className={`page-item ${currentPage === index ? 'active' : ''}`}
      >
        <button className="page-link" onClick={() => numberPage(index)}>
          {index}
        </button>
      </li>
    );
  };

  return (
    <Container>
      {/* <Select
                isMulti
                options={[5, 10, 15]}
                value={rolesId}
                getOptionLabel={(role) => role.name}
                getOptionValue={(role) => role.id}
                onChange={(value) => this.handleRolesChange(member.id, value)}
              /> */}

      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={prevPage}>
            Previous
          </button>
        </li>
        {pages.map((index) => renderPageNumber(index, currentPage))}
        <li
          className={`page-item ${
            currentPage === pages.length ? 'disabled' : ''
          }`}
        >
          <button className="page-link" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
