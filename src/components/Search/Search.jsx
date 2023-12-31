import PropTypes from 'prop-types';
import React from 'react';
import css from './Search.module.css';

function Search({ onChange, value }) {
  return <input className={css.searcher} value={value} onChange={onChange} />;
}

export default Search;

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};




// import PropTypes from 'prop-types';
// import css from './Search.module.css'

// const Search = ({ onChange, value }) => {
//   return <input className={css.searcher} value={value} onChange={onChange} />;
// };

// export default Search;

// Search.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };