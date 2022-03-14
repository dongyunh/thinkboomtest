import React, { useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type DropdownProps = {
  text: string;
  onClick?: () => void;
  options: string[];
};

type StyleProps = {
  isOpen?: boolean;
};

const Dropdown = ({ text, onClick, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState(options);

  const sortOptions = (item: string) => {
    const tmp = new Set(optionList);
    tmp.delete(item);
    setOptionList([item, ...tmp]);
    console.log(optionList);
  };

  const handleOnClick = (item: string) => {
    if (!onClick) return;
    sortOptions(item);
    setIsOpen(false);
    onClick();
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {optionList[0]}
      </DropDownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropDownList isOpen={isOpen}>
            {optionList.map(item => {
              return (
                <ListItem key={item} onClick={() => handleOnClick(item)}>
                  {item}
                </ListItem>
              );
            })}
          </DropDownList>
        </DropdownListContainer>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  width: 200px;
  position: relative;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 40px;
`;

const DropDownHeader = styled.div<StyleProps>`
  color: ${themedPalette.black};
  background: ${themedPalette.bg_page1};
  border: 5px solid ${themedPalette.gray};
  border-radius: 12px;
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;

  ${props => props.isOpen && `border : 5px solid ${themedPalette.black}`}
`;

const DropDownList = styled.ul<StyleProps>`
  position: absolute;
  top: -15px;
  z-index: -1;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 5px solid ${themedPalette.gray};
  border-radius: 0px 0px 12px 12px;
  width: 210px;
  box-sizing: border-box;
  color: ${themedPalette.black};
  transition: 0.3s ease-in-out;

  &:first-child {
    padding-top: 12px;
  }

  ${props => props.isOpen && `border : 5px solid ${themedPalette.black}`}
`;

const ListItem = styled.li`
  border-bottom: 1px solid ${themedPalette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 5px 0;
  cursor: pointer;

  :hover {
    background-color: ${themedPalette.gray};
  }

  &:last-child {
    border: none;
  }
`;

export { Dropdown };
