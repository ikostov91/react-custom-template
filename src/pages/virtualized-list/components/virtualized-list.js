import React from "react";
import { FixedSizeList } from 'react-window';
import { createListUser } from "../../../helpers/faker-utils";
import User from "./user";

const VirtualizedList = () => {
  const data = [...Array(50)].map(x => createListUser());

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ minHeight: '100px' }}}>
      <User user={data[index]} />
    </div>
  );

  return (
    <div className="virtualized-list">
      <FixedSizeList
        height={500}
        width="100%"
        itemCount={data.length}
        itemSize={100}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
};

export default VirtualizedList;
