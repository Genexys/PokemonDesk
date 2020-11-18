import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cn from 'classnames';
import s from './Search.module.scss';

import getSearch from '../../redux/search/action';

const Search = ({ valueSearch, valueQuery, searchState, dispatchSearch }) => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(searchState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    valueSearch(e.target.value);
    valueQuery((search) => ({
      ...search,
      name: e.target.value,
    }));

    dispatchSearch(e.target.value);
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  return (
    <div className={cn(s.Search)}>
      <input className={cn(s.InputSearch)} type="text" onChange={changeValue} value={value} ref={inputEl} />
    </div>
  );
};

const mapStateToProps = ({ search }) => {
  return {
    searchState: search.search,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      dispatchSearch: getSearch,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
