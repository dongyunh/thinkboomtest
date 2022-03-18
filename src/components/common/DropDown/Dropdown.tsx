import React, { useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  arrow: {
    color: '#EEEEEE',
  },
});

type OptionType = {
  type: 'number' | 'timer';
  data: number[];
};

type DropdownProps = {
  onClick?: (arg: any) => void;
  options: OptionType;
};

type StyleProps = {
  isOpen?: boolean;
};

const Dropdown = ({ onClick, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState(options.data);
  const classes = useStyles();

  const sortOptions = (item: number) => {
    const tmp = new Set(optionList);
    tmp.delete(item);
    setOptionList([item, ...tmp]);
  };

  const handleOnClick = (item: number) => {
    if (!onClick) return;
    sortOptions(item);
    setIsOpen(false);
    onClick(item);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {options.type == 'number' ? `${optionList[0]}명` : `${optionList[0]}분`}
        {isOpen ? (
          <ArrowDropUpIcon fontSize="large" />
        ) : (
          <ArrowDropDownIcon fontSize="large" className={classes.arrow} />
        )}
      </DropDownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropDownList isOpen={isOpen}>
            {optionList.map(item => {
              return (
                <ListItem key={item} onClick={() => handleOnClick(item)}>
                  {options.type == 'number' ? `${item}명` : `${item}분`}
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
  width: 100%;
  position: relative;
  z-index: 99;
  margin: 0;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 40px;
  margin: 0;
`;

const DropDownHeader = styled.div<StyleProps>`
  color: ${themedPalette.main_text1};
  background-color: ${themedPalette.bg_page3};
  border: 5px solid ${themedPalette.input_normal};
  border-radius: 12px;
  width: 210px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin: 0;
  cursor: pointer;
  padding: 0 30px;

  ${props => props.isOpen && `border : 5px solid ${themedPalette.input_focus}`}
`;

const DropDownList = styled.ul<StyleProps>`
  position: absolute;
  top: -15px;
  z-index: -1;
  padding: 0;
  margin: 0;
  background-color: ${themedPalette.bg_page3};
  border: 5px solid ${themedPalette.input_normal};
  border-radius: 0px 0px 12px 12px;
  width: 210px;
  box-sizing: border-box;
  color: ${themedPalette.main_text1};
  &:first-child {
    padding-top: 16px;
  }
  ${props => props.isOpen && `border : 5px solid ${themedPalette.input_focus}`}
`;

const ListItem = styled.li`
  border-bottom: 1px solid ${themedPalette.input_focus};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 5px 0;
  margin: 0;
  cursor: pointer;
  :hover {
    background-color: ${themedPalette.dropdown_list_hover};
  }
  &:last-child {
    border: none;
  }
`;

export { Dropdown };

/*
TODO : 1. 드롭다운 리스트 정렬하는 로직 손보기 
*/
