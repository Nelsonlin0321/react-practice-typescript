interface expense {
  key: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: expense[];
  onDelete: (key: number) => void;
}

const ExpenseList = ({ expenseList, onDelete }: Props) => {
  if (expenseList.length === 0) return null;
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((item) => (
            <tr key={item.key}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => onDelete(item.key)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenseList
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
