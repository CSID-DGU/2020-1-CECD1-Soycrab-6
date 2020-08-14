import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goToHome } from '../modules/datas';
import Spinner from '../components/shared/Spinner';
import { reducerUtils } from '../lib/asyncUtils';
import EdgeEdit from '../components/EdgeEdit';
import { getEdge } from '../modules/edges';

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
  }, [dispatch, fromId, toId]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <div>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <EdgeEdit edge={data} />
    </div>
  )
};

export default EdgeEditContainer;