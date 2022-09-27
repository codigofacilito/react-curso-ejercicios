import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';
function Tooltip({position,text}){
  let [calculatedPosition, setCalculatedPosition] = useState({ x: 0, y: 0 });
  let tooltipElement = useRef();

  useEffect(()=>{
    let { x, y, width, height  } = tooltipElement.current.getBoundingClientRect();
    let coords = {};

    if(position.y < height){
      coords.y = position.y + position.height;
    }else{
      coords.y = position.y - height;
    }

    coords.x  = position.x + (position.width / 2) - (width / 2);

    setCalculatedPosition(coords);


  },[position]);

  return ReactDOM.createPortal(
    <div className="tooltip" ref={tooltipElement} style={{left: calculatedPosition.x, top: calculatedPosition.y}}>
      {text}
    </div>,
    document.querySelector("body")
  )
}

export default Tooltip;