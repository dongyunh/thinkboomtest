import React from 'react';

type pageType = { component: React.ReactNode }[];

type InteractivePage = {
  currentPage: number;
  pages: pageType;
};

const InteractivePage = ({ currentPage, pages }: InteractivePage) => {
  return (
    <div>
      {pages.map((item, idx) => {
        if (idx === currentPage) return item.component;
      })}
    </div>
  );
};

export { InteractivePage };
