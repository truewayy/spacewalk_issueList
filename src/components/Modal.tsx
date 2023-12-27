import styled from '@emotion/styled';
import { PropsWithChildren, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// 모달 컴포넌트 (esc 키로 닫기 가능)
const Modal = ({
  isOpen,
  onRequestClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };
    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress);
  }, [onRequestClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer tabIndex={0} onClick={onRequestClose}>
      {children}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
