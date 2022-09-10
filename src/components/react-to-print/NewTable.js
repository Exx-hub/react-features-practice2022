export const NewTable = ({ records }) => {
  //   const amount = records.reduce((acc, cv) => {
  //     return acc + cv.amount;
  //   }, 0);
  return (
    <table>
      <thead>
        <tr>
          <th>Qty</th>
          <th style={{ width: "50%" }}>Description</th>
          <th>Declared Value</th>
          <th>Weight</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {records.map((item) => (
          <tr key={item.key}>
            <td>{item.qty}</td>
            <td style={{ width: "50%" }}>{item.description}</td>
            <td>{item.declaredValue}</td>
            <td>{item.weight}</td>
            <td style={{ fontWeight: "bold" }}>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    /* <div className="table-amount">
        TOTAL AMOUNT P<span>{records[0].amount.toFixed(2)}</span>
      </div> */
  );
};
