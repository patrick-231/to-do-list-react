import React from "react";

const Counter = ({ itemCount, uncheckedCount }) => (
  <div className="flex p-4">
    <span className="flex-1 text-center text-white text-xl">
      Item count: <span id="item-count">{itemCount}</span>
    </span>
    <span className="flex-1 text-center text-white text-xl">
      Unchecked count: <span id="unchecked-count">{uncheckedCount}</span>
    </span>
  </div>
);

export default Counter;
