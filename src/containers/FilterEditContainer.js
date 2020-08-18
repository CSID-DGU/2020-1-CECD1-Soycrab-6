import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, cleartFilter } from '../modules/filters';
import { goToHome } from '../modules/datas';
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
      dispatch(cleartFilter());
    };
  }, [dispatch, edgeId, realId]);

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return (
      <div>
        <FilterEdit filter={data} />
      </div>
    )
  };
}

export default FilterEditContainer;