import React from 'react';
import { graphConfig } from '../containers/GraphApp';
import { Graph } from 'react-d3-graph';
import { useHistory } from 'react-router-dom';

function FilterEdit({ filter }) {
  const { realId, edgeId, nodes, edges } = filter;

  console.log(nodes, edges)

  const history = useHistory();

  const onClickLink = function(source, target) {
    history.push(`/edges/edit/${source}/${target}`);
  };

  return (
    <Graph
      id="filter-graph-id"
      data={{nodes: nodes, links: edges}}
      config={graphConfig}
      onClickLink={onClickLink}
    />
  )
};

export default FilterEdit;