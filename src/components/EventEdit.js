import React from 'react';
import styled, { css } from 'styled-components';
import ToggleButton from './shared/ToggleButton';

function EventEdit({ event }) {
  const { realId, args, productPrefix, base, callTargetRepr, ret, parentId, parentType } = event;

  return (
    <>
      {
        (function() {
          if (productPrefix === "CallEvent") return (
            <div>
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
                        {productPrefix}
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <h2 className="mb-4">target</h2>
                      <h5 className="mb-2">type</h5>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                              {base.productPrefix}
                          </h5>
                        </div>
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
                              {callTargetRepr.repr.text}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      name
                    </div>
                    <div className="col">
                      <ToggleButton switchId={1}/>
                    </div>
                    <div className="col">
                      fqn
                    </div>
                  </div>  
                  <div className="row mt-3 mb-3">
                    <div className="col">
                      name
                    </div>
                    <div className="col">
                      <ToggleButton switchId={2}/>
                    </div>
                    <div className="col">
                      fqn
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          );
          else if (productPrefix === "assignment") return (
            <div>
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
                        {productPrefix}
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <h2 className="mb-4">left</h2>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="mb-2">type</h5>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                {ret.productPrefix}
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <h5 className="mb-2">name</h5>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                  {callTargetRepr.repr.text}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <h2 className="mb-4">right</h2>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="mb-2">type</h5>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                  {args.productPrefix}
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
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
                    </div>
                    <div className="col">
                      <h2 className="mb-4">accessor</h2>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="mb-2">type</h5>
                          <div className="card">
                            <select name="" id="" className="pt-2 pb-2">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
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
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <h2 className="mb-4">Base</h2>
                      <h5 className="mb-2">type</h5>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                              {base.productPrefix}
                          </h5>
                        </div>
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
                      name
                    </div>
                    <div className="col">
                      <ToggleButton switchId={3}/>
                    </div>
                    <div className="col">
                      fqn
                    </div>
                  </div>  
                  <div className="row">
                    <div className="col">
                      name
                    </div>
                    <div className="col">
                      <ToggleButton switchId={4}/>
                    </div>
                    <div className="col">
                      fqn
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          );
        })()
      }

    </>
  )
};

export default EventEdit;