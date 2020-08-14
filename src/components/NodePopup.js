import React from 'react';
import Popup from "reactjs-popup";
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-svg-tooltip';
import { IoIosAddCircleOutline } from 'react-icons/io';



function NodePopup() {
  const addPopup = () => (
    <Popup trigger={() => (<div><IoIosAddCircleOutline/></div>)} position="bottom right" closeOnDocumentClick>
      <div>
        <div className="pb-3">
          <label>추적변수 추가</label><br />
          <input type="text" placeholder="추적변수 입력" />
        </div>
        <div>
          <a className="mb-2 w-100 btn btn-danger">추적변수 삭제</a>
        </div>
      </div>
    </Popup>
  );

  const popOver = (
    <Popover id="popover-basic">
        <Popover.Content>
          <div>
            <div className="pb-3">
              <label>추적변수 추가</label><br />
              <input type="text" placeholder="추적변수 입력" />
            </div>
            <div>
              <a className="mb-2 w-100 btn btn-danger">추적변수 삭제</a>
            </div>
          </div>
        </Popover.Content>
      </Popover>
  )
  
  return(
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popOver}>
        <IoIosAddCircleOutline/>
      </OverlayTrigger>

      {/* <Popup trigger={() => (
        <div><IoIosAddCircleOutline/></div>
      )} position="bottom right" closeOnDocumentClick>
        <div>
          <div className="pb-3">
            <label>추적변수 추가</label><br />
            <input type="text" placeholder="추적변수 입력" />
          </div>
          <div>
            <a className="mb-2 w-100 btn btn-danger">추적변수 삭제</a>
          </div>
        </div>
      </Popup> */}
        
    </>
  )
}


export default NodePopup;