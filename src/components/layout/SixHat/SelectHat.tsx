import React from 'react';

type SelectHatProps = {
  onClick?: () => void;
};

const SelectHat = ({ onClick }: SelectHatProps) => {
  const handeOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  return <h1>모자를 선택하는 방입니다.</h1>;
};

export { SelectHat };
