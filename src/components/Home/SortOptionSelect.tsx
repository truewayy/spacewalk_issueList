import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import checkBold from '../../assets/check-bold.svg';
import { SortOption } from '../../interfaces/issue';
import Arrow from '../Arrow';
import Modal from '../Modal';

const options: {
  state: SortOption;
  label: string;
}[] = [
  {
    state: 'created',
    label: '작성일 순',
  },
  {
    state: 'updated',
    label: '수정일 순',
  },
  {
    state: 'comments',
    label: '코멘트 순',
  },
];

// 정렬 옵션 선택 컴포넌트 (모달 포함)
const SortOptionSelect = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') as SortOption;

  const currentLabel =
    options.find((option) => option.state === sort)?.label ?? '작성일 순';

  const handleConfirm = (option: SortOption) => {
    searchParams.set('sort', option);
    setSearchParams(searchParams);
    setModalOpen(false);
  };

  return (
    <>
      <FlexBox onClick={() => setModalOpen(true)}>
        <FilterText id='sort'>{currentLabel}</FilterText>
        <Arrow isOpen={modalOpen} />
      </FlexBox>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <ModalTitle>정렬</ModalTitle>
          <RadioGroup>
            {options.map((option) => (
              <OptionButton
                key={option.state}
                onClick={() => handleConfirm(option.state)}>
                <span>{option.label}</span>
                {currentLabel === option.label && (
                  <img src={checkBold} alt='check' width='16px' height='16px' />
                )}
              </OptionButton>
            ))}
          </RadioGroup>
        </ModalBox>
      </Modal>
    </>
  );
};

export default SortOptionSelect;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
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
`;

const ModalBox = styled.div`
  width: 400px;
  padding: 20px;
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
  flex-direction: column;
`;

const OptionButton = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
`;
