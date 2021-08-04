import React from "react";
import cn from "classnames";

function BarIncrease({ item, baron }) {
  return (
    <li className="skill_li skill_li-in">
      <h6 className="skill-title">{item.title}</h6>
      <div className="diagram_bar">
        <div className={cn("skill_div skill_div-style", { baron })}></div>
      </div>
      <p className={cn("skill_percent skill_div", { baron })}>{item.number}</p>
    </li>
  );
}

export default React.memo(BarIncrease);
