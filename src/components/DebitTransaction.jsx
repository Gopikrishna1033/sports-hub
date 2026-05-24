// import { useState } from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";

const DebitTransaction = ({ rows, setRows }) => {
  // const [rows, setRows] = useState([
  //   {
  //     expense: "Facility Rent",
  //     description: "",
  //     amount: 0,
  //   },
  // ]);
  const totalDebitAmount = rows.reduce(
    (sum, row) => sum + Number(row.amount || 0),
    0,
  );
  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };
  const addRow = () => {
    setRows([...rows, { expense: "", description: "", amount: 0 }]);
  };
  const deleteRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };
  return (
    <div className="mt-6 bg-white border border-slate-200 rounded-xl  shadow-sm">
      <h1 className="text-xl font-semibold text-slate-800 bg-red-100 p-3 rounded-tl-xl rounded-tr-xl">
        Debit Transactions (Revenue Inflow)
      </h1>
      <div className="p-3">
        {/* Total */}
        <div className="mt-2 mb-4 flex justify-between">
          <h2 className="text-lg font-semibold text-red-600">
            Total Debit Amount: ₹&nbsp;{totalDebitAmount}
          </h2>
          <p className="text-sm text-slate-500">Auto-calculates</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="text-left p-3">Expense Category</th>
                <th className="text-left p-3">Description</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-slate-200">
                  <td className="p-3">
                    <input
                      type="text"
                      value={row.expense}
                      onChange={(e) =>
                        handleChange(index, "expense", e.target.value)
                      }
                      className="w-full border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </td>

                  <td className="p-3">
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) =>
                        handleChange(index, "description", e.target.value)
                      }
                      className="w-full border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </td>

                  <td className="p-3">
                    <input
                      type="number"
                      value={row.amount}
                      onChange={(e) =>
                        handleChange(index, "amount", e.target.value)
                      }
                      className="w-full border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </td>

                  <td className="p-3">
                    <button onClick={() => deleteRow(index)}>
                      <LuTrash2 className="text-red-500 hover:text-red-700 cursor-pointer w-10 text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addRow}
          className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 cursor-pointer mt-1"
        >
          <LuPlus />
          Add Expense Row
        </button>
      </div>
    </div>
  );
};

export default DebitTransaction;
