import { Collapse } from "antd";
const { Panel } = Collapse;

function Accordion({ textList }) {
  return (
    <Collapse defaultActiveKey={["0"]}>
      {textList.map((el, i) => (
        <Panel header={el.title} key={i}>
          {el.text}
        </Panel>
      ))}
    </Collapse>
  );
}

export default Accordion;
