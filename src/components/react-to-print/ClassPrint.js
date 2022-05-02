import React from "react";
import ReactToPrint from "react-to-print";
import ClassComponentToPrint from "./ClassComponentToPrint";

class ClassPrint extends React.Component {
  state = {
    receiptVisible: false,
  };

  render() {
    return (
      <div>
        {/* <div style={{ display: "none" }}> */}
        <ClassComponentToPrint ref={(el) => (this.componentRef = el)} />
        {/* </div> */}
        <br />
        <div>
          <ReactToPrint
            trigger={() => {
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
        </div>
      </div>
    );
  }
}

export default ClassPrint;
