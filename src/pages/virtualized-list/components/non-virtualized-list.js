import React from "react";
import User from "./user";
import { createListUser } from "../../../helpers/faker-utils";

const NonVirtualizedList = () => {
  const data = [...Array(50)].map(x => createListUser());

  return (
    <div className="virtualized-list">
      {data.map(user => (
        <User user={user} />
      ))}
    </div>
  );
};

export default NonVirtualizedList;
