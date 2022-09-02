import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/page-title";
import Translate from "../../components/translate";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NonVirtualizedList from "./components/non-virtualized-list";
import VirtualizedList from "./components/virtualized-list";
import CustomList from "./components/custom-list";

const VirtualizedListPage = () => {
  const [tab, setTab] = useState('non-virtualized-list');

  return (
    <>
      <Row>
        <Col md={12}>
          <PageTitle
            title={<Translate id="Virtualized list" />}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.virtualized-lisr', path: '/virtualized-list', active: true
            }]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Tabs
            id="virtualized-list-example"
            activeKey={tab}
            defaultActiveKey="non-virtualized-list"
            onSelect={(key) => setTab(key)}
          >
            <Tab eventKey="non-virtualized-list" title="Non-virtualized" />
              {/* <NonVirtualizedList />
            </Tab> */}
            <Tab eventKey="virtualized-list" title="Virtualized" />
              {/* <VirtualizedList />
            </Tab> */}
            <Tab eventKey="custom-list" title="Custom" />
              {/* <CustomList /> */}
            {/* </Tab> */}
          </Tabs>
          {tab === 'non-virtualized-list' && <NonVirtualizedList />}
          {tab === 'virtualized-list' && <VirtualizedList />}
          {tab === 'custom-list' && <CustomList />}
        </Col>
      </Row>
    </>
  );
};

export default VirtualizedListPage;
