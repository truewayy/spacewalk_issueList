import arrowDown from '../assets/arrow-down.svg';

const Arrow = ({ isOpen }: { isOpen: boolean }) => (
  <img
    src={arrowDown}
    alt='arrow_down'
    width='15px'
    height='15px'
    style={{
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
    }}
  />
);

export default Arrow;
