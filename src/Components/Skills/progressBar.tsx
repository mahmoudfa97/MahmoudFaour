import React from "react";

interface mySpanProps {
  labelledby: string;
  valuenow: number;
}
const ProgressBar: React.FC<mySpanProps> = (props) => {
  return (
    <div className="progress"> 
      <span className="skill">
        {props.labelledby} <i className="val">{`${props.valuenow}%`}</i>
      </span>
      <div className="progress-bar-wrap">
        <div {...props}>
          <svg width={`${props.valuenow}%`} height="10">
            <rect height="10" width={`${props.valuenow}%`} stroke="#f2f3f5" fill="#0563bb" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
