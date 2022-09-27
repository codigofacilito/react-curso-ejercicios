import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

function TooltipText(props) {
  const spanElement = useRef();
  let [showTooltip, setShowTooltip] = useState(false);
  let [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  function handleMouseOver() {
    // get spanElement width and height, scrollWidth and scrollHeight
    let { x, y, width, height  } = spanElement.current.getBoundingClientRect();
    setTooltipPosition({ x, y, width, height });
    setShowTooltip(true);
  }

  function handleMouseOut() {
    setShowTooltip(false);
  }

  return (
    <>
      <span className="tooltip-text" ref={spanElement} onMouseOver={ev => handleMouseOver(ev) } onMouseLeave={ ev => handleMouseOut(ev)  } >
        {props.children}
      </span>
      {
        showTooltip && <Tooltip position={tooltipPosition} text={props.tooltip} />
      }
    </>
  );
}

export default TooltipText;