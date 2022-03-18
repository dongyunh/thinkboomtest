import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <H1>{text}</H1>;
};

const H1 = styled.h1`
  color: ${themedPalette.main_text1};
`;

export { Title };
