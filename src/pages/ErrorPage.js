import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HeaderAuth } from '../components/airframe/HeaderAuth';

const alignStyle = {
  marginTop: '20%',
}

function ErrorPage({ code }) {
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
          <Link to="/">
            <img
              src = { require('../images/sparrow_logo.png') }
              alt="sparrow logo"
            />
          </Link>
          <HeaderAuth 
            title={"Error " + code}
            text={text}
            />
          <Button
            href="/"
            outline
            color="success"
            className="text-center"
            >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;