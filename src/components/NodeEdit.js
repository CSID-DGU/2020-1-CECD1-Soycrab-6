import React from 'react';
import Event from './Event';
import { HeaderMain } from '../components/airframe/HeaderMain';
import { Card } from '../components/airframe/Card/Card';
import { Row, Col, CardTitle, CardBody, ListGroup, ListGroupItem, Media } from 'reactstrap';
import { TasksMedia } from './airframe/TasksMedia';

function NodeEdit({ node }) {
  const eventArray = ['호출식', '접근식', '연산식', '배열 참조', '배열 생성', '개별 이벤트 템플릿'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

  return (
    <>
      <h6 className="d-flex">Breadcrumb 들어갈 자리</h6>
      <HeaderMain
        title={name + " (노드이름)"}
      />
      <span className="mr-0">
        <i className="fa fa-fw fa-pencil mr-2"></i>✏️
      </span>
      <Row>
        <Col lg="6">
          <Card className="mb-3Card">
            <CardBody>
              <CardTitle className="mb-0 bb-0">
                {alias.name} (Alias 이름)
              </CardTitle>
            </CardBody>
            <Card className="ml-3 mr-3 mb-3 mb-3Card">
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
                event => <ListGroupItem action><TasksMedia type={event} /></ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default NodeEdit;