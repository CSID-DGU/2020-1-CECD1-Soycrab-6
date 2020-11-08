import React from 'react';
import styled from 'styled-components';

const BreadCrumbItem = styled.div`
  background-color: #f8f9fa;
  breadcrumb-divider: quote(">");
`;

function Breadcrumb() {
  var pageHistory = JSON.parse(localStorage.getItem('pageHistory'));
  var historyLength = pageHistory.length;
  
  return (
    <>
      <BreadCrumbItem className="breadcrumb">
        {pageHistory.map(
          (page, index) => {
            var splittedPage = page.split('http://localhost:3000/'); // TODO: url 바꿔야함
            if (historyLength - 1 != index) return <li className="breadcrumb-item"><a href={page}>{splittedPage}</a></li>
          }
        )}
      </BreadCrumbItem>
    </>
  );
}

export default Breadcrumb;