import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

type NodeInsertProps = {
  onInsert: (name: string) => void;
}

function NodeInsert({ onInsert }: NodeInsertProps) {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>노드 생성하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              노드명
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="노드 이름을 입력해주세요..." onChange={onChange} value={value} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">생성하기</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal.Dialog>
  )
}

export default NodeInsert;