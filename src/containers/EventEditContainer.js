import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent, clearEvent } from '../modules/events';
import { reducerUtils } from '../lib/asyncUtils';
import EventEdit from '../components/Event/EventEdit';
import StateRender from '../components/shared/StateRender';

function EventEditContainer({ realId, parentType, parentId }) {
  const { data, loading, error } = useSelector(
    state => state.events.event || reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent({
      realId: realId,
      parentType: parentType, 
      parentId: parentId
    }));
    return () => {
      dispatch(clearEvent());
    };
  }, [dispatch, parentId, parentType, realId]);

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return <EventEdit event={data} />;
  };
};

export default EventEditContainer;