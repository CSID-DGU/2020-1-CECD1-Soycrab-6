import React, { useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { useSelector, useDispatch } from 'react-redux';
import Node from '../components/Node';
import { getDatas } from '../modules/datas';

const graphConfig = {
  directed: true,
  highlightOpacity: 0,
  linkHighlightBehavior: true,
  width: 1500,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 500,
    linkStrength: 0.1,
    disableLinkForce: false
  },
  node: {
    size: 1500,
    renderLabel: false,
    viewGenerator: node => {
      return (
        <Node node={node} />
      );
    }
  },
  link: {
    color: '#69db7c',
    highlightColor: '#b7dc95',
    markerWidth: 6,
    strokeWidth: 5,
    fontSize: 15,
    highlightFontSize: 17,
    highlightFontWeight: 'bold',
  }
};

function GraphApp() {
  const { data, loading, error } = useSelector(state => state.datas.datas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <Graph
      id="graph-id"
      data={data}
      config={graphConfig}
    />
  );
};

export default React.memo(GraphApp);
