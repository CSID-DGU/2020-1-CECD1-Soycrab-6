import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${fadeOut};
  `}
`;

const DialogBlock = styled.div`
  width: 80%;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  overflow-y: scroll;
  max-height: 80%;
  white-space: pre;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${slideDown};
  `}
`;

const ButtonGroud = styled.div`
  position: sticky;
  bottom: 0px;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  bottom: -1.5rem;
  padding: 10px;
  background: white;
`;

const ContentBox = styled.div`
  font-size: 13px;
  font-weight: bold;
  background: #cef5ce;
  padding: 10px;
  border-radius: 5px;
`;

function ExportModal({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true -> false
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible])

  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3><br />
        <ContentBox>{children}</ContentBox>
        <ButtonGroud>
          <button className="btn btn-outline btn-lg btn-success" onClick={onConfirm}>{confirmText}</button>
          <button className="btn btn-outline btn-lg btn-secondary" onClick={onCancel}>{cancelText}</button>
        </ButtonGroud>
      </DialogBlock>
    </DarkBackground>
  );
};

ExportModal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default ExportModal;