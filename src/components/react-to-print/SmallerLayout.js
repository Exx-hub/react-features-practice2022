import React, { Component } from "react";
import dltb from "../../images/dltb.png";
import "./SmallerLayout.css";
import { NewTable } from "./NewTable";

const records = [
  {
    qty: 1,
    // description: "4 SAKO BAG, 3 BUNDLE BO, 1 BOX  OFFICE SUPPLIES, CARPET,HANDLES,CURTAINS",
    // description: "2 pax-2 box-1 sack -1 sack bag-2 maleta-1 bundle biscuit -1 bundle bag",
    // description: "1 BUNDLE STORAGE BOX ASSORTED ITEM ASSEMBLE TREY",
    description:
      "1 WASHING MACHINE 1 FOAM 1 MALETA 1 SACK BAG / 1 PAX 1 WASHING MACHINE 1 FOAM 1 MALETA 1 SACK BAG / 1 PAX 1 WASHING MACHINE 1 FOAM 1 MALETA 1 SACK BAG / 1 PAX 1 WASHING MACHINE 1 FOAM 1 MALETA 1 SACK BAG / 1 PAX",
    // description: "1 PAX-1 BIKE MOUNTAIN BIKE, 2 SAKO BAG, 1 BOX, 1 ECO BAG",
    declaredValue: "1000",
    weight: "30kg",
    amount: 365.78,
    key: 0,
  },
];

class SmallerLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-div">
          <div className="top-logo">
            <img
              alt="dltb logo"
              src={dltb}
              style={{ filter: "grayscale(1)" }}
            />
          </div>
          <div className="top-mid" style={{ marginLeft: 20 }}>
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
          <div className="copy-div">
            <p>{this.props.copy} Copy</p>
            <p>
              BL#: <span className="bl-value">470861</span>
            </p>
            <p>
              Bus No: <span>DLTB123</span>
            </p>
            <p>
              Date: <span>June 16, 2022</span>
            </p>
          </div>
        </div>

        <div className="body">
          <div className="sender-receiver-div">
            <div>
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

          <div className="table-container">
            <NewTable records={records} />
          </div>

          <div className="signatures-section">
            <div>
              <h4>Alvin Flores Acosta</h4>
              <p>Shipper/Sender</p>
            </div>
            <div>
              <h4>Alvin Flores Acosta</h4>
              <p>Cashier/Teller</p>
            </div>
          </div>
          <div className="dashed-line" />
          <div className="acknowledgement-div">
            <h4>ACKNOWLEDGEMENT</h4>
            <p>
              By signing in the space provided below, Shipper fully understands
              and agrees to the Terms and Conditions indicated at the reverse
              side of this Bill of Lading.
            </p>

            <div className="shipper-signature">
              <h4>Alvin Flores Acosta</h4>
              <p>Shipper/Sender</p>
            </div>
          </div>

          <div className="acknowledgement">
            I acknowledged receipt in good condition of the above consigned
            goods or parcel without any complain. If with
            complain________________________________________
          </div>
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

class SmallComponentsToPrint extends Component {
  render() {
    return (
      <>
        <SmallerLayout copy="Customer's" />
        <SmallerLayout copy="Accounting's" />
        <SmallerLayout copy="Merchant's" />
      </>
    );
  }
}

export default SmallComponentsToPrint;
