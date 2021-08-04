import React, { useState } from "react";

function Tabs({ item }) {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs tabs-horizontal-01">
      <ul className="tabs__caption">
        {item.map((item, i) => (
          <li
            onClick={() => setActive(i)}
            key={i}
            className={active === i ? "active" : ""}
          >
            {item.menuTab}
          </li>
        ))}
      </ul>
      {item.map((item, i) => (
        <div
          className={"tabs__content" + (active === i ? "active" : "")}
          key={i}
        >
          {item.menuCont}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
