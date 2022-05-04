import React from "react";
import "./Table.css";

export const Table = ({ records }) => {
  const amount = records.reduce((acc, cv) => {
    return acc + cv.amount;
  }, 0);
  return (
    <div>
      <div className="table-description">DESCRIPTION</div>
      <table>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Packaging Type</th>
            <th>Item</th>
            <th>Weight (kg)</th>
            <th>Dimension (LxWxH)</th>
            <th>Declared Value</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr key={item.key}>
              <td>{item.qty}</td>
              <td>{item.packType}</td>
              <td>{item.item}</td>
              <td>{item.weight}</td>
              <td>{item.dimension}</td>
              <td>{item.declaredValue}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-amount">
        TOTAL AMOUNT P<span>{amount.toFixed(2)}</span>
      </div>
    </div>
  );
};
