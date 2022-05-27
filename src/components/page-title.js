import React from 'react';

const PageTitle = ({ title, breadcrumbs = [] }) => {
  return (
    <div className='page-title'>
      <h2>{title}</h2>
      <span className='breadcrumbs-span'>
        {breadcrumbs.join(" / ")}
      </span>
    </div>
  )
};

export default PageTitle;
