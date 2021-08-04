import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterNumber({ stateCount }) {
  return (
    <div className="counter-wrapper">
      <div className="counter-content">
        <div className="stat-count-wrapper">
          {stateCount.imgUrl && (
            <figure className="stat-count-icon">
              <img src={stateCount.imgUrl} />
            </figure>
          )}
          <p
            className="stat-count stat-count__dec"
            data-count={stateCount.datacount}
          >
            <CountUp end={stateCount.datacount} redraw={false}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </p>
          <p className="counter-title">{stateCount.title}</p>
        </div>
        <div className="stat-temp"></div>
      </div>
    </div>
  );
}

export default React.memo(CounterNumber);
