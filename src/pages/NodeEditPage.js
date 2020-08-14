import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap'
import NodeEditContainer from '../containers/NodeEditContainer';
import {Row, Col} from 'reactstrap';
import HeadNavbar from '../components/shared/HeadNavbar';

function NodeEditPage({ match }) {
  const { id } = match.params;
  const nodeId = parseInt(id, 10);

  const Container  = styled.div`
    padding: 1.8rem;
    text-align: center;
    border: 1px solid #73ca25;
    width: 80%;
    margin-left:10%;
    margin-right: 10%;
    margin-top: 200px;
    height: auto;
  `
  const Header = styled.div`
    padding: 0.3em;
    padding-left: 0.6em;
    width: 100%;
    text-align: left;
    background-color: #73ca25;
    color: white;
    font-size: 2em;
    margin-bottom: 30px;
  `
  const VariableBox = styled.div`
    padding: 1.8rem;
    text-align: center;
    border: 1px solid #73ca25;
    height: 1em;
    width: 28vw;
  `
  return (
    <>
      <HeadNavbar />
      <Container>
        <Header>
          Alias
        </Header>
        <NodeEditContainer nodeId={nodeId} />;
        <Row>
          <Col>
            <VariableBox> 
              x=aasdsa
            </VariableBox>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default NodeEditPage;