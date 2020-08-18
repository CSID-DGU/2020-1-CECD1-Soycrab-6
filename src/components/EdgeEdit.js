import React from 'react';
import Filter from './Filter';
import Propagator from '../components/Propagator';

function EdgeEdit({ edge }) {
  const { filter, filterId, propagators, source, target } = edge;

  return (
    <>
      <h6 className="d-flex">Edge 수정페이지</h6>
      <h2>Node#{source} => Node#{target}</h2>

      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Propagator List
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {propagators.map(
                propagator => <li className="list-group-item" key={propagator.realId}>
                                <Propagator propagator={propagator} />
                              </li>)}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Propagator 추가
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeEdit;