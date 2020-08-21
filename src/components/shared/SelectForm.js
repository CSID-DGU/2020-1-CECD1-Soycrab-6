import React from 'react';

function SelectForm({namespace, optionArray}) {
  return(
    <>
      <select name="" id="" className="pt-2 pb-2">
        {optionArray.map(
          (option, index) => <option value={namespace + index}>{option}</option>
        )}
      </select>
    </>
  )
}

export default React.memo(SelectForm);


