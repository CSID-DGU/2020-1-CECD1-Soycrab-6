import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Popup from "reactjs-popup";


const PopupBox = styled.div`
margin-bottom: -30px;
margin-left: 99px;
`;

const options = [
  { value: 'chocolate', label: '호출식' },
  { value: 'strawberry', label: '접근식' },
  { value: 'vanilla1', label: '연산식' },
  { value: 'vanilla2', label: '배열 참조' },
  { value: 'vanilla3', label: '배열 생성' },
  { value: 'vanilla4', label: '개별 이벤트 템플릿' },
]

const PopupTest = () => (
  <svg>
    
  <Popup
    trigger={() => (
      <div><IoIosAddCircleOutline/></div>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <div>
      <div className="pb-3">
        <label>추적변수 추가</label><br />
        <input type="text" placeholder="start typing ... " />
      </div>
      <div>
        <label>이벤트 추가</label><br />
        <Select options={options} />
      </div>
    </div>
  </Popup>

  </svg>
)

export default PopupTest;