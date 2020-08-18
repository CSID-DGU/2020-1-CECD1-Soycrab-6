import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goToHome } from '../modules/datas';
import { reducerUtils } from '../lib/asyncUtils';
import EdgeEdit from '../components/EdgeEdit';
import { getEdge, clearEdge } from '../modules/edges';
import StateRender from '../components/shared/StateRender';

function EdgeEditContainer({ fromId, toId }) {
  const { data, loading, error } = useSelector(
    state =>  state.edges.edge || reducerUtils.initial()
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEdge({
      fromId: fromId,
      toId: toId
    }));
    return () => {
      dispatch(clearEdge());
    };
  }, [dispatch, fromId, toId]);

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return (
      <div>
        <EdgeEdit edge={data} />
      </div>
    )
  };
};

export default EdgeEditContainer;