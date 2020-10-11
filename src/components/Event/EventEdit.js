import React from 'react';
import styled, { css } from 'styled-components';
import ToggleButton from '../shared/ToggleButton';
import SelectForm from '../shared/SelectForm';



function EventEdit({ event }) {
  const { realId, args, productPrefix, base, callTargetRepr, ret, parentId, parentType } = event;

  const leftTypeOption = ["a", "b", "c", "d", "e"];
  const rightTypeOption = ["a", "b", "c", "d", "e"];
  const accessorTypeOption = ["a", "b", "c", "d", "e"];
  const rightKindOption = ["a", "b", "c", "d", "e"];
  const accessorKindOption = ["a", "b", "c", "d", "e"];
  const baseKindOption = ["a", "b", "c", "d", "e"];

  return (
    <>
      {realId} 번째 이벤트 수정 페이지
      <h1>parentId: {parentId}</h1>
      <h1>parentType: {parentType}</h1>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Event Property
              </h5>
            </div>
            <div className="card ml-3 mr-3 mb-3">
              <div className="card-body">
                <h5 className="card-title">
                    Events List
                </h5>
              </div>
            </div>
          </div>
        </div>
        {
          (function() {
            if (productPrefix === "CallEvent") return (
              <>
                <div className="col card">
                  <h5 className="mt-3 mb-2">type</h5>
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
                        <SelectForm namespace={productPrefix} optionArray={baseKindOption} />
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
                    <ToggleButton leftLabel="Name" rightLabel="Fqn" switchId={1}/>
                  </div>  
                  <div className="row mt-3 mb-3">
                    <ToggleButton leftLabel="Plain" rightLabel="Regex" switchId={2}/>
                  </div>  
                </div>
              </>
            );
            else if (productPrefix === "assignment") return (
              <>
                <div className="col card mb-5">
                  <h5 className="mt-3 mb-2">type</h5>
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
                              <SelectForm namespace="LeftType" optionArray={leftTypeOption} />
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
                            <SelectForm namespace="RightType" optionArray={rightTypeOption} />
                          </div>
                        </div>
                        <div className="col-12">
                          <h5 className="mb-2">kind</h5>
                          <div className="card">
                            <SelectForm namespace="RightKind" optionArray={rightKindOption} />
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
                            <SelectForm namespace="AccessorType" optionArray={accessorTypeOption} />
                          </div>
                        </div>
                        <div className="col-12">
                          <h5 className="mb-2">kind</h5>
                          <div className="card">
                            <SelectForm namespace="AccessorKind" optionArray={accessorKindOption} />
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
                        <SelectForm namespace="BaseKind" optionArray={baseKindOption} />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 mb-4">
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
                    <ToggleButton leftLabel="Name" rightLabel="Fqn" switchId={1}/>
                  </div>  
                  <div className="row mt-3 mb-3">
                    <ToggleButton leftLabel="Plain" rightLabel="Regex" switchId={2}/>
                  </div> 
                </div>
              </>
            );
          })()
        }
      </div>
    </>
  )
};

export default EventEdit;