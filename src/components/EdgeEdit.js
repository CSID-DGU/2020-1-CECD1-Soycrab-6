import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import Propagator from '../components/Propagator';
import Nothing from './shared/Nothing';

const CardContent = styled.div`
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(115, 202, 37, 0.2);
  }
`;

function EdgeEdit({ edge }) {
  const { filter, propagators, source, target } = edge;
  const history = useHistory();

  const goToNodeEdit = nodeId => {
    history.push(`/nodes/edit/${nodeId}`);
  };

  const marginBottom = {
    marginBottom: '20px'
  };

  return (
    <>
      <h6 className="d-flex" style={marginBottom}>Edge 수정페이지</h6>
      <div className="row row-cols-2">
        <div className="col" style={marginBottom}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                From Node (#{source})
              </h5>
            </div>
            <div className="list-group list-group-flush">
              <CardContent onClick={() => goToNodeEdit(source)} className="list-group-item list-group-item-action">바로가기</CardContent>
            </div>
          </div>
        </div>

        <div className="col" style={marginBottom}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                To Node (#{target})
              </h5>
            </div>
            <div className="list-group list-group-flush">
              <CardContent onClick={() => goToNodeEdit(target)} className="list-group-item list-group-item-action">바로가기</CardContent>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Propagator List
              </h5>
            </div>
            <div className="list-group list-group-flush">
              {propagators.length > 0
                ? propagators.map(
                    propagator => <Propagator key={propagator.realId} propagator={propagator} />)
                : <Nothing />}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Filter
              </h5>
            </div>
            <div className="list-group list-group-flush">
              {filter 
                ? <Filter filter={filter} /> 
                : <Nothing />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeEdit;