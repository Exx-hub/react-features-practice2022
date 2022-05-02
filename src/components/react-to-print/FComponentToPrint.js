import React from "react";

export const FComponentToPrint = React.forwardRef((props, ref) => {
  return <div ref={ref}>PRINT THIS COOL CONTENT</div>;
});
