import React from 'react';
import CustomColumn from '../../components/custom-column';
import CustomRow from '../../components/custom-row';
import PageTitle from '../../components/page-title';
import Translate from '../../components/translate';
import Nav from 'react-bootstrap/Nav';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import PrivateRoute from '../../routing/private-route';
import history from '../../history';
import FirstTab from './sub-pages/first-tab';
import SecondTab from './sub-pages/second-tab';
import ThirdTab from './sub-pages/third-tab';

const TabsExample = () => {
  let location = useLocation();
  if (location.pathname === '/tabs') {
    return <Navigate to="/tabs/first-tab" replace />
  }

  const tabs = [{
    id: 'first-tab',
    name: 'pages.tabs.first.tab.title',
    component: <FirstTab />
  },
  {
    id: 'second-tab',
    name: 'pages.tabs.second.tab.title',
    component: <SecondTab />
  }, {
    id: 'third-tab',
    name: 'pages.tabs.third.tab.title',
    component: <ThirdTab />
  }];

  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={<Translate id="pages.tabs.example.title.text" />}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.tabs', path: '/tabs', active: true
            }]}
          />
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <Nav variant="tabs">
            {tabs.map(tab => (
              <Nav.Item key={tab.id}>
                <Nav.Link
                  className={classnames(location.pathname.endsWith(tab.id) && 'active', 'cursor-pointer')}
                  onClick={() => history.push(`${tab.id}`)}
                >
                    <Translate id={tab.name} />
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <Routes>
            {tabs.map(tab => (
              <Route
                key={tab.id}
                path={`${tab.id}`}
                element={
                  <PrivateRoute>
                    {tab.component}
                  </PrivateRoute>
                }
              />
            ))}
          </Routes>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default TabsExample;
