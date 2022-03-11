import React from 'react';

type pageType = { component: React.ReactNode }[];

type InteractivePage = {
  currentPage: number;
  pages: pageType;
};

const InteractivePage = ({ currentPage, pages }: InteractivePage) => {
  const getCurrentPage = (): React.ReactNode => {
    return pages.map((item, idx) => {
      if (idx === currentPage) return <div key={idx}>{item.component}</div>;
    });
  };

  return <>{getCurrentPage()}</>;
};

export { InteractivePage };
