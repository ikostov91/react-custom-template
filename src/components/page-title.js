import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import history from '../history';

const PageTitle = ({ title, breadcrumbs = [] }) => {
  return (
    <div className='page-title'>
      <h2>{title}</h2>
      <span className='breadcrumbs-span'>
        <Breadcrumb>
          {breadcrumbs.map(item => (
            <Breadcrumb.Item
              onClick={() => history.push(item.path)}
              {...(item.active ? { active: true } : {})}
            >
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </span>
    </div>
  );
};

export default PageTitle;
