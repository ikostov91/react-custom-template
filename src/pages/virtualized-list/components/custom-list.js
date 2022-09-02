import React, { useEffect } from "react";
import { createListUser } from "../../../helpers/faker-utils";
import User from "./user";

const CustomList = () => {
  const rowHeight = 100;
  const data = [...Array(100)].map((_, index) => ({ ...createListUser(), top: index * rowHeight }));

  return (
    <div className="virtualized-list">
      {data.map(user => (
        <div className="user-div">
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default CustomList;
