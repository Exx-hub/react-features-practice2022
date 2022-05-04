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
          BILL OF LADING No.: <span>470861</span>
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

        <div className="prepared-by-section">
          <div>
            <p className="prepared-by">Prepared By:</p>
            <hr />
            <p>Freight In Charge</p>
          </div>
          <div>
            <p className="prepared-by">Payment Remitted to:</p>
            <hr />
            <p>Teller</p>
          </div>
        </div>

        <div className="dashed-line" />

        <div className="acknowledgement-section">
          <div>Acknowledgement</div>
          <p>
            By signing in the space provided below, Shipper fully understands
            and agrees to the Terms and Conditions indicated at the reverse side
            of this Bill of Lading.
          </p>
          <h5>Shipper/Sender</h5>
          <p>
            I acknowledged receipt in good condition of the above consigned
            goods or parcel without any complain. If with complain
            _______________________________________________
          </p>
          <p>
            _____________________________________________________________________________________.
          </p>
        </div>

        <div className="original-senders-copy-section">
          <div>
            <div className="original">original sender's copy</div>
            <div className="printer-details">
              <p>
                21 Falcon St, 09164209977, BIR Authority to Print No. 1234567
              </p>
              <p>Date of ATP 03-23-2022 Expiry Date: 03-22-2027</p>
              <p>
                <span>WILLING PRINTING PRESS</span> - VAT REG. TIN: 456-000-987
              </p>
              <p>Accreditation No. 567 - Date of Accreditation: 01/23/2019</p>
            </div>
          </div>

          <div className="consignee-section">
            <h3>Consignee or Authorized Reps</h3>
            <p>
              <span>Address:</span>__________________________________
            </p>
            <p>
              <span>Valid ID: </span>__________________________________
            </p>
          </div>
        </div>

        <div className="first-line">
          "THIS BILL OF LADING SHALL BE VALID FOR FIVE (5) YEARS FROM THE DATE
          OF ATP"
        </div>
        <div className="second-line">
          "THIS DOCUMENT IS NOT VALID FOR CLAIMING INPUT TAXES"
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
