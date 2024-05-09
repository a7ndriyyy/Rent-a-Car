import { useEffect, useRef, useState } from 'react';
import { Wrapper, Item, ListWrapper, List, Button } from './Dropdown.styled';

import dropdownIcon from '../../images/dropdown-icon.svg';

const ListDropdown = ({ items, onSelect, onClose }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    const handleClose = event => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClose);
    };
  }, [onClose]);

  return (
    <ListWrapper ref={listRef}>
      <List>
        {items.map(item => {
          return (
            <Item key={item} onClick={() => onSelect(item)}>
              {item}
            </Item>
          );
        })}
      </List>
    </ListWrapper>
  );
};

const Dropdown = ({ items = [], defaultSelect, onSelect }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [selectText, setSelectText] = useState(defaultSelect);

  const handleSelect = item => {
    onSelect(item);
    setSelectText(item);
    setIsOpenList(false);
  };

  return (
    <Wrapper>
      <Button onClick={() => setIsOpenList(!isOpenList)}>
        {selectText}
        <img src={dropdownIcon} alt="dropdown" />
      </Button>
      {isOpenList && (
        <ListDropdown
          items={items}
          onSelect={handleSelect}
          onClose={() => setIsOpenList(false)}
        />
      )}
    </Wrapper>
  );
};

export default Dropdown;
