import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';
import Dark from '../../../../public/asset/dark.png';
import White from '../../../../public/asset/white.png';

const DarkModeToggle = ({}) => {
  return (
    <ToggleWrapper>
      <WhiteCircle>
        <Image src={White} width={20} height={20} />
      </WhiteCircle>
      <DarkCircle>
        <Image src={Dark} width={20} height={20} />
      </DarkCircle>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  border: 5px solid ${themedPalette.toggle_border};
  background-color: ${themedPalette.toggle_bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${themedPalette.toggle_white_circle};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${themedPalette.toggle_dark_circle};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { DarkModeToggle };
