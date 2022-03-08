import React from 'react';

type pageType = { component: React.ReactNode }[];

type InteractivePage = {
  currentPage: number;
  pages: pageType;
};

const InteractivePage = ({ currentPage, pages }: InteractivePage) => {
  const getCurrentPage = (): React.ReactNode => {
    return pages.map((item, idx) => {
      if (idx === currentPage) return item.component;
    });
  };

  return <>{getCurrentPage()}</>;
};

export { InteractivePage };
