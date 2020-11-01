import React from 'react';
import styled, { css } from 'styled-components';
import ToggleButton from '../shared/ToggleButton';
import SelectForm from '../shared/SelectForm';
import Lhs from './Partial/Lhs';
import Rhs from './Partial/Rhs';
import Base from './Partial/Base';
import Target from './Partial/Target';
import CallEvent from './EventType/CallEvent';
import AssignmentEvent from './EventType/AssignmentEvent';
import arrayCreateEvent from './EventType/arrayCreateEvent';
import anyArrayAccessEvent from './EventType/anyArrayAccessEvent';
import unaryOperationEvent from './EventType/unaryOperationEvent';
import binaryOperationEvent from './EventType/binaryOperationEvent';
import predefEventAlias from './EventType/predefEventAlias';




function EventEdit({ event }) {
  const { realId, args, productPrefix, base, callTargetRepr, ret, parentId, parentType } = event;

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
              <CallEvent event={event} />
            );
            else if (productPrefix === "assignment") return (
              <AssignmentEvent event={event} />
            );
            else if (productPrefix === "anyArrayAccessEvent") return (
              <anyArrayAccessEvent event={event} />
            );
            else if (productPrefix === "arrayCreateEvent") return (
              <arrayCreateEvent event={event} />
            );
            else if (productPrefix === "unaryOperationEvent") return (
              <unaryOperationEvent event={event} />
            );
            else if (productPrefix === "binaryOperationEvent") return (
              <binaryOperationEvent event={event} />
            );
            else if (productPrefix === "predefEventAlias") return (
              <predefEventAlias event={event} />
            );

          })()
        }
      </div>
    </>
  )
};

export default EventEdit;