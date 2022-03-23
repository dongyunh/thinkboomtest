import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CenterLayout } from '../../../common';
import { DevatingChatBox } from '../DevatingChatBox';

const DevatingRoom = () => {
  return (
    <CenterLayout>
      <DevatingChatBox />
    </CenterLayout>
  );
};

export { DevatingRoom };
