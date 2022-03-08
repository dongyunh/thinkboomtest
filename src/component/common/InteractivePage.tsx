import React from 'react';

type pageType = { component: React.ReactNode }[];

type InteractivePage = {
  currentPage: number;
  pages: pageType;
};

const InteractivePage = ({ currentPage, pages }: InteractivePage) => {
  return pages.map((item, idx) => {
    if (idx === currentPage) return <div key={idx}>{item.component}</div>;
  });
};

export { InteractivePage };
