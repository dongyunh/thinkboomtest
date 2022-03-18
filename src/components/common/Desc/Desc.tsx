import React from 'react';
import styled from 'styled-components';

type DescProps = {
  text: string;
};

const Desc = ({ text }: DescProps) => {
  return <P>{text}</P>;
};

const P = styled.p``;

export { Desc };
