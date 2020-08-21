import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToHome } from '../modules/datas';

const alignStyle = {
  marginTop: '20%',
}

function ErrorPage({ code }) {
  const dispatch = useDispatch();
  var text = "";

  switch (code) {
    case "404":
      text = "페이지를 찾을 수 없습니다.";
      break;
    case "500":
      text = "에러가 발생했습니다.";
      break;
    default:
      break;
  };

  return (
    <>
      <div style={alignStyle}>
        <div className="text-center">
          <img
            src = { require('../images/sparrow_logo.png') }
            alt="sparrow logo"
            onClick={() => dispatch(goToHome())}
          />
          <h1>{"Error " + code }</h1>
          <h3>{text}</h3>
          <button
            className="btn btn-outline-success text-center"
            onClick={() => dispatch(goToHome())}
            >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;