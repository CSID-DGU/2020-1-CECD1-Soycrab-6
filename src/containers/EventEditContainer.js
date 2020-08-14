import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent } from '../modules/events';
import { goToHome } from '../modules/datas';
import Spinner from '../components/shared/Spinner';
import { reducerUtils } from '../lib/asyncUtils';
import EventEdit from '../components/EventEdit';

function EventEditContainer({ realId, parentType, parentId }) {
  const { data, loading, error } = useSelector(
    state => state.events.event[realId] || reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent({
      realId: realId,
      parentType: parentType, 
      parentId: parentId
    }));
  }, [dispatch, parentId, parentType, realId]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <div>
      <EventEdit event={data} />
    </div>
  )
};

export default EventEditContainer;