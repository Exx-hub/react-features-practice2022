import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FComponentToPrint } from "./FComponentToPrint";

function FunctionalPrint() {
  let componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>PRINT</button>}
        content={() => componentRef.current}
      />
      <FComponentToPrint ref={componentRef} />
    </div>
  );
}

export default FunctionalPrint;

// import React, { forwardRef, useRef } from "react";
// import ReactToPrint, { PrintContextConsumer } from "react-to-print";

// const ComponentToPrint = forwardRef((props, ref) => {
//   return <div ref={ref}>PRINTED RECEIPT</div>;
// });

// function FunctionalPrint() {
//   const printRef = useRef(null);

//   // console.log(printRef);
//   return (
//     <div>
//       <ComponentToPrint ref={printRef} />
//       <ReactToPrint content={() => printRef.current}>
//         <PrintContextConsumer>
//           {({ handlePrint }) => (
//             <button onClick={handlePrint}>Print this out!</button>
//           )}
//         </PrintContextConsumer>
//       </ReactToPrint>
//     </div>
//   );
// }

// export default FunctionalPrint;
