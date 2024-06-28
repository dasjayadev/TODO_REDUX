import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchingTextHandler } from '../redux/Action/todoAction';

function Search() {
  let { searchText } = useSelector((reducer) => reducer);
  let dispatch = useDispatch();

  // for searching
  function searchTextHandler(e) {
    dispatch(searchingTextHandler(e.target.value));
  }

  // Handler for search button click
  function handleSearchButtonClick() {
    dispatch(searchingTextHandler(searchText));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search todos"
        value={searchText}
        onChange={searchTextHandler}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
    </>
  );
}

export default Search;
