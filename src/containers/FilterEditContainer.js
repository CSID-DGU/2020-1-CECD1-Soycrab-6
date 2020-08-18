import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, clearFilter } from '../modules/filters';
import { reducerUtils } from '../lib/asyncUtils';
import FilterEdit from '../components/FilterEdit';
import StateRender from '../components/shared/StateRender';

function FilterEditContainer({ realId, edgeId }) {
  const { data, loading, error } = useSelector(
    state => state.filters.filter ||reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilter({
      realId: realId,
      edgeId: edgeId
    }));
    return () => {
      dispatch(clearFilter());
    };
  }, [dispatch, edgeId, realId]);

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return <FilterEdit filter={data} />;
  };
}

export default FilterEditContainer;