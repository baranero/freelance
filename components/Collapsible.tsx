import React, { ReactNode, useRef, useState } from "react";
import PropTypes from "prop-types";

interface CollapsibleProps {
    title: string;
    children: ReactNode;
}

const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [
    isExpanded,
    setIsExpanded
  ] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number | undefined>(undefined);
  console.log(ref);
  console.log(height);
  console.log(isExpanded);
  
  
  
  

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current?.clientHeight);
  };

  const classes = `list-group-item ${
    isExpanded ? "is-expanded" : null
  }`;
  const currentHeight = isExpanded ? height : 0;

  console.log(currentHeight);
  return (
    <div
      className={classes}
      onClick={handleToggle}
    >
      <div className="hover:cursor-pointer hover:text-white transition-all duration-200 ease-in">
        <h2 className="">{title}</h2>
      </div>
      <div
        className={`${isExpanded ? 'block' : 'hidden'} h-[${currentHeight + "px"}]`}
      >
        <div className="" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string
};

export default Collapsible;
