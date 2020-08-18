import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { goToHome } from '../../modules/datas';

const logoStyle = {
  width: 100,
  marginRight: 10,
  paddingBottom: 5,
  cursor: 'pointer'
}

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
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </>
  )
}

export default React.memo(HeadNavbar);
