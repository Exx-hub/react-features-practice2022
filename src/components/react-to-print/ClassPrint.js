import React from "react";
import ReactToPrint from "react-to-print";
import ClassComponentToPrint from "./ClassComponentToPrint";
import ComponentsToPrint from "./ClassNewLayoutPrint";
import ClassNewLayoutPrint from "./ClassNewLayoutPrint";
import SmallComponentsToPrint from "./SmallerLayout";

class ClassPrint extends React.Component {
  render() {
    return (
      <div>
        {/* <div style={{ display: "none" }}> */}
        {/* <ClassComponentToPrint
          ref={(el) => (this.componentRef = el)}
          busCompany="DEL MONTE LAND TRANSPORT BUS COMPANY, INC."
          blNumber="470861"
        /> */}
        {/* </div> */}

        {/* <ClassNewLayoutPrint ref={(el) => (this.componentRef = el)} /> */}
        {/* <div style={{ display: "none" }}>
          <div ref={(el) => (this.componentRef = el)}>
            <ComponentsToPrint />
          </div>
        </div> */}
        <div style={{ display: "" }}>
          <div ref={(el) => (this.componentRef = el)}>
            <SmallComponentsToPrint />
          </div>
        </div>
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
