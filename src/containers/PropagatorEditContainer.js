import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StateRender from '../components/shared/StateRender';
import { reducerUtils } from '../lib/asyncUtils';
import { getPropagator, clearPropagator } from '../modules/propagators';
import PropagatorEdit from '../components/PropagatorEdit';

function PropagatorEditContainer({ realId, edgeId }) {
  const { data, loading, error } = useSelector(
    state => state.propagators.propagator || reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropagator({
      realId: realId,
      edgeId: edgeId
    }));
    return () => {
      dispatch(clearPropagator());
    }
  }, [dispatch, edgeId, realId]);

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return <PropagatorEdit propagator={data} />;
  };
};

export default PropagatorEditContainer;