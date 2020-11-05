import React from 'react';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import Propagator from '../components/Propagator';
import Nothing from './shared/Nothing';
import LinkButton from './shared/LinkButton';
import Breadcrumb from './shared/Breadcrumb';

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
      <Breadcrumb />
      <h2>{source + " - " + target + " (Edge이름)"}</h2>
      <div className="row row-cols-2">
        <div className="col" style={marginBottom}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                From Node (#{source})
              </h5>
            </div>
            <div className="list-group list-group-flush">
              <LinkButton onClick={() => goToNodeEdit(source)} className="list-group-item list-group-item-action">바로가기</LinkButton>
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
              <LinkButton onClick={() => goToNodeEdit(target)} className="list-group-item list-group-item-action">바로가기</LinkButton>
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