import React from 'react';
import Event from './Event';
import { HeaderMain } from '../components/airframe/HeaderMain';
import { Card } from '../components/airframe/Card/Card';
import { Row, Col, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { TasksMedia } from './airframe/TasksMedia';

function NodeEdit({ node }) {
  const eventArray = ['호출식', '접근식', '연산식', '배열 참조', '배열 생성', '개별 이벤트 템플릿'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

  return (
    <>
      <HeaderMain
        title={name}
      />
      <Row>
        <Col lg="6">
          <Card className="mb-3Card">
            <CardBody>
              <CardTitle className="mb-0 bb-0">
                  Events List
              </CardTitle>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem action>
                {alias.events.map(
                  event => <Event 
                            key={event.realId}
                            realId={event.realId}
                            parentType='node'
                            parentId={realId} />
                )}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg="6">
        <Card className="mb-3Card">
            <CardBody>
              <CardTitle className="mb-0 bb-0">
                  Event 추가
              </CardTitle>
            </CardBody>
            <ListGroup flush>
              {eventArray.map(
                (event, index) => <ListGroupItem key={index}><TasksMedia type={event} /></ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default NodeEdit;