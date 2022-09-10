import React, { Component } from "react";
import dltb from "../../images/dltb.png";
import "./ClassNewLayout.css";
import { NewTable } from "./NewTable";

const records = [
  {
    qty: 1,
    description: "Box",
    declaredValue: "",
    amount: 365.78,
    key: 0,
  },
  //   {
  //     qty: "",
  //     description: "",

  //     declaredValue: "",
  //     amount: "",
  //     key: 1,
  //   },
  //   {
  //     qty: "",
  //     description: "",

  //     declaredValue: "",
  //     amount: "",
  //     key: 2,
  //   },
  //   {
  //     qty: "",
  //     description: "",
  //     declaredValue: "",
  //     amount: "",
  //     key: 3,
  //   },
  //   {
  //     qty: "",
  //     packType: "",
  //     description: "",
  //     declaredValue: "",
  //     amount: "",
  //     key: 4,
  //   },
];

class ClassNewLayoutPrint extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-div">
          <div className="top-mid">
            <div className="bus-company-name">
              DEL MONTE LAND TRANSPORT BUS COMPANY, INC.
            </div>
            <div className="company-address">
              National Highway, Brgy Turbina, Calamba City, Laguna 4027
            </div>
            <div>
              <div className="branch-numbers">
                <p>Pasay: 0916-420-9977</p>
                <p>GMA: 0999-456-7890</p>
                <p>Buendia: 0918-567-1234</p>
                <p>Turbina: 0927-143-7908</p>
                <p>Naga: 0916-420-9977</p>
                <p>Legazpi: 0927-143-7908</p>
                <p>Albay: 0916-420-9977</p>
                <p>Calbayog: 0916-420-9977</p>
                <p>Tacloban: 0916-420-9977</p>
                <p>Cagayan: 0916-420-9977</p>
                <p>Ormoc: 0916-420-9977</p>
                <p>Masbate: 0916-420-9977</p>
              </div>
              <div className="email">Email: DelMontePh@gmail.com</div>
            </div>
          </div>
          <div className="top-right">
            <img
              alt="dltb logo"
              src={dltb}
              style={{ filter: "grayscale(1)" }}
            />
          </div>
        </div>

        <div className="body">
          <div className="bl-busno-date-div">
            <div className="blNo">
              BILL OF LADING NO.: <span className="bl-value">470861</span>
            </div>
            <div className="busno-date">
              <p>
                Bus Number: <span>DLTB123</span>
              </p>
              <p>
                Date: <span>June 16, 2022</span>
              </p>
            </div>
          </div>
          <div className="sender-receiver-div">
            <div className="text-container-div">
              <TextContainer title="Sender name" value="Alvin Flores Acosta" />
              <TextContainer title="Mobile No" value="0916-4209977" />
              <TextContainer title="Origin" value="EDSA Cubao" />
            </div>
            <div>
              <TextContainer
                title="Receiver name"
                value="Alvin Flores Acosta"
              />
              <TextContainer title="Mobile No" value="0916-4209977" />
              <TextContainer title="Destination" value="Legazpi" />
            </div>
          </div>

          <NewTable records={records} />

          <div className="signatures-section">
            <p>Shipper/Sender</p>

            <p>Cashier/Teller</p>
          </div>
          <div className="dashed-line" />
          <div className="acknowledgement-div">
            <h3>ACKNOWLEDGEMENT</h3>
            <p>
              By signing in the space provided below, Shipper fully understands
              and agrees to the Terms and Conditions indicated at the reverse
              side of this Bill of Lading.
            </p>
            <h5>Shipper/Sender</h5>
          </div>
          <div className="acknowledgement">
            I acknowledged receipt in good condition of the above consigned
            goods or parcel without any complain. If with
            complain________________________________________
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          Customer's Copy
        </div>
      </div>
    );
  }
}

const TextContainer = (props) => {
  return (
    <div
      style={{
        marginBottom: ".4rem",
        display: "flex",
      }}
    >
      <div style={{ width: "150px", textAlign: "left" }}>
        <span className="details-title-text">{props.title}</span>
      </div>
      <div style={{ width: "200px", textAlign: "left" }}>
        <span className="details-value-text">{props.value}</span>
      </div>
    </div>
  );
};

// export default ClassNewLayoutPrint;

class ComponentsToPrint extends Component {
  render() {
    return (
      <>
        <ClassNewLayoutPrint />
        <ClassNewLayoutPrint />
        <ClassNewLayoutPrint />
      </>
    );
  }
}

export default ComponentsToPrint;
