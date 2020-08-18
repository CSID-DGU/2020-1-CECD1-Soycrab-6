import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { goToHome } from '../../modules/datas';

const logoStyle = {
  width: 100,
  marginRight: 10,
  paddingBottom: 5,
  cursor: 'pointer'
};

function HeadNavbar() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={ require('../../images/sparrow_logo.png') }
          style={logoStyle} onClick={() => dispatch(goToHome())}
          alt="sparrow logo"
        />
        <a className="navbar-brand" href="/">소스코드 결함탐지</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav mr-auto"></ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="검색어 입력..." aria-label="검색" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">검색</button>
        </form>
      </nav>
    </>
  )
}

export default React.memo(HeadNavbar);
