import React from 'react';
import { Link } from "react-router-dom"
import GraphApp from '../containers/GraphApp';
import InfoButton from '../components/shared/InfoButton';

function GraphPage() {
  return (
    <>
      <Link to="/info">
        <InfoButton />
      </Link>
      <GraphApp />;
    </>
  )
}

export default GraphPage;