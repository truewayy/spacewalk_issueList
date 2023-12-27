import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Issue } from '../../interfaces/issue';
import Arrow from '../Arrow';
import Modal from '../Modal';

const states: {
  state: Issue['state'];
  label: string;
}[] = [
  {
    state: 'all',
    label: '전체',
  },
  {
    state: 'open',
    label: 'open',
  },
  {
    state: 'closed',
    label: 'closed',
  },
];

const IssueStateFilter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get('state') as Issue['state'];
  const currentLabel = state === 'all' || !state ? '이슈 상태' : state;
  const [currentState, setCurrentState] = useState(state ?? 'all');

  const handleConfirm = () => {
    searchParams.set('state', currentState);
    setSearchParams(searchParams);
    setModalOpen(false);
  };

  return (
    <>
      <StateFilter onClick={() => setModalOpen(true)}>
        <FilterText id={state === 'all' || !state ? '' : 'active'}>
          {currentLabel}
        </FilterText>
        <Arrow isOpen={modalOpen} />
      </StateFilter>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <ModalTitle>이슈 상태</ModalTitle>
          <RadioGroup>
            {states.map((item) => (
              <RadioButton
                key={item.label}
                id={currentState === item.state ? 'selected' : ''}
                onClick={() => setCurrentState(item.state)}>
                {item.label}
              </RadioButton>
            ))}
          </RadioGroup>
          <ConfirmButton onClick={handleConfirm}>적용</ConfirmButton>
        </ModalBox>
      </Modal>
    </>
  );
};

export default IssueStateFilter;

const StateFilter = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #dfe5eb;
  border-radius: 32px;
  cursor: pointer;
`;

const FilterText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #14171a;
  &#sort {
    color: #5a6066;
  }
  &#active {
    color: #1a8cff;
  }
`;

const ModalBox = styled.div`
  width: 390px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 16px;
  background-color: #fff;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #14171a;
`;

const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
`;

const RadioButton = styled.div`
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #363b40;
  border: 1px solid #dfe5eb;
  border-radius: 30px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &#selected {
    color: #fff;
    background-color: #1a8cff;
    border: 1px solid #1a8cff;
  }
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #1a8cff;
  cursor: pointer;
`;
