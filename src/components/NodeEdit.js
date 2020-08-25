import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MdAddCircle, MdEdit, MdDelete } from 'react-icons/md';
import Event from './Event';
import Nothing from './shared/Nothing';
import LinkButton from './shared/LinkButton';

const BreadCrumbItem = styled.div`
  background-color: #f8f9fa;
`;

function NodeEdit({ node }) {
  const eventArray = ['호출식', '접근식', '연산식', '배열 참조', '배열 생성', '개별 이벤트 템플릿'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

  const history = useHistory();
  console.log(history);

  return (
    <>
      <BreadCrumbItem className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </BreadCrumbItem>
      <div>
        <h2>{name + " (노드이름)"}</h2>
        <button type="button" className="btn btn-success float-right" data-toggle="modal" data-target="#eventModal">이벤트 추가</button>
        {/* Modal */}
        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="eventModalLabel">Event 추가</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    {eventArray.map(
                      (event, index) => <LinkButton className="list-group-item" key={index} onClick={() => console.log('click')}>{event}</LinkButton>
                    )}
                  </ul>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </div>
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">추적변수<MdAddCircle className="float-right" /></h5>
            </div>
            <ul className="list-group list-group-flush">
              <LinkButton className="list-group-item" onClick={() => console.log('click')}>음...<div className="float-right"><MdEdit /><MdDelete /></div></LinkButton>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {alias.name} (Alias 이름)
              </h5>
            </div>
            <div className="card ml-3 mr-3 mb-3">
              <div className="card-body">
                <h5 className="card-title">
                    Events List
                </h5>
              </div>
              <div className="list-group list-group-flush">
                {alias.events.length > 0 
                ? alias.events.map(
                    event => <LinkButton className="list-group-item list-group-item-action" key={event.realId}>
                                <Event 
                                  realId={event.realId}
                                  parentType='node'
                                  parentId={realId} />
                              </LinkButton>)
                : <Nothing />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeEdit;