import React from "react";
import BarIncrease from "../../components/common/BarIncrease";

function SkillBar({ baron }) {
  const bars = [
    { title: "심리학", number: "92%" },
    { title: "신경학", number: "70%" },
    { title: "사회적기술", number: "80%" },
  ];
  return (
    <ul className="skills_list process-skills-list">
      {bars.map((bar, i) => (
        <BarIncrease item={bar} baron={baron} key={`bar${i}`} />
      ))}
    </ul>
  );
}

export default React.memo(SkillBar);
