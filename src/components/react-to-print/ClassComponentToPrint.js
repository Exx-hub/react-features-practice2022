import React from "react";
import "./ComponentToPrint.css";
import dltb from "../../images/dltb.png";
import { Table } from "./Table";

const records = [
  {
    qty: 1,
    packType: "pack type",
    item: "Box",
    weight: "11kg",
    dimension: "10x10x10",
    declaredValue: 1000,
    amount: 365.78,
    key: 0,
  },
  {
    qty: 1,
    packType: "pack type",
    item: "Box",
    weight: "11kg",
    dimension: "10x10x10",
    declaredValue: 1000,
    amount: 365.78,
    key: 1,
  },
  {
    qty: 1,
    packType: "pack type",
    item: "Box",
    weight: "11kg",
    dimension: "10x10x10",
    declaredValue: 1000,
    amount: 365.78,
    key: 2,
  },
  {
    qty: 1,
    packType: "pack type",
    item: "Box",
    weight: "11kg",
    dimension: "10x10x10",
    declaredValue: 1000,
    amount: 365.78,
    key: 3,
  },
  {
    qty: 1,
    packType: "pack type",
    item: "Box",
    weight: "11kg",
    dimension: "10x10x10",
    declaredValue: 1000,
    amount: 365.78,
    key: 4,
  },
];

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="content-to-print-container">
        <div className="top-div">
          <div className="top-div-left">
            <div className="bus-company-name">
              DEL MONTE LAND TRANSPORT BUS COMPANY, INC.
            </div>
            <div className="company-address">
              National Highway, Brgy Turbina, Calamba City, Laguna 4027
            </div>
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
            <div className="small-text">Email: alvinfloresacosta@gmail.com</div>
            <div className="small-text">TIN: 000-456-789</div>
          </div>
          <div className="top-div-right">
            <img
              alt="dltb logo"
              src={dltb}
              style={{ filter: "grayscale(1)" }}
            />
          </div>
        </div>

        <div className="bill-of-lading">
          BILL OF LADING: No. <span>470861</span>
        </div>

        <div className="shipping-details">
          <div className="shipping-from">
            <div>Shipped from</div>
            <div>Sender:</div>
            <div>Address:</div>
            <div>TIN: Bus Style:</div>
            <div>Contact No.</div>
          </div>
          <div className="shipping-to">
            <div>Shipped to</div>
            <div>Consignee:</div>
            <div style={{ borderBottom: "1px solid transparent" }}>
              Address:
            </div>
            <div className="empty-div"></div>
            <div>Contact No.: </div>
          </div>
        </div>

        <Table records={records} />

        <div>
          <div>prepared by</div>
          <div>payment remitted to</div>
        </div>

        <div>
          <div>Acknowledgement</div>
        </div>

        <div>
          <div>complain</div>
        </div>

        <hr />

        <div>original sender's copy</div>

        <div>
          <div>printer address</div>
          <div>consignee or authorized reps</div>
        </div>

        <div>This bill of lading keme keme underlined</div>
      </div>
    );
  }
}

export default ComponentToPrint;
