import React from 'react';
import styled from 'styled-components';

function EventEdit({ event }) {
  const { realId, args, base, callTargetRepr, parentId, parentType } = event;

  const ToggleButton = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  
  `;
  const InputTag = styled.input`
  &:checked + .slider {
    background-color: #2196F3;
  }
  
  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  `;

  const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

  &.round {
    border-radius: 34px;
  }
  
  &.round:before {
    border-radius: 50%;
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  `;

  return (
    <>
    
      {realId} 번째 이벤트 수정 페이지
      <h1>parentId: {parentId}</h1>
      <h1>parentType: {parentType}</h1>
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Event Property
              </h5>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                    Events List
                </h5>
              </div>
              <ul className="list-group list-group-flush">
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col border border-dart">
          <h5 className="mt-4 mb-2">type</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Event 추가
              </h5>
            </div>
          </div>
          <h5 className="mt-4 mb-2">name</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Event 추가
              </h5>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h2 className="mb-4">left</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="col">
              <h2 className="mb-4">right</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="col">
              <h2 className="mb-4">accessor</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="mb-2">name</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="mb-2">kind</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>            
            </div>
            <div className="col">
              <h5 className="mb-2">kind</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h2 className="mb-4">Base</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="mb-2">kind</h5>
              <div className="card">
                <select name="" id="" className="pt-2 pb-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="mb-2">str</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ToggleButton className="switch">
                <input type="checkbox" />
                <Slider className="slider round" />
              </ToggleButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EventEdit;