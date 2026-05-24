import { useEffect, useState } from "react";
import CreditTransaction from "../components/CreditTransaction";
import DebitTransaction from "../components/DebitTransaction";

const Ledger = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [employee, setEmployee] = useState("");
  const [creditRows, setCreditRows] = useState([
    { source: "Bank Transfer", reference: "", amount: 0 },
  ]);
  const [debitRows, setDebitRows] = useState([
    { expense: "Facility Rent", description: "", amount: 0 },
  ]);

  const totalCredit = creditRows.reduce(
    (sum, r) => sum + Number(r.amount || 0),
    0,
  );

  const totalDebit = debitRows.reduce(
    (sum, r) => sum + Number(r.amount || 0),
    0,
  );

  const netFlow = totalCredit - totalDebit;

  const staffMembers = [
    { id: 1, name: "Raj" },
    { id: 2, name: "Shekar" },
    { id: 3, name: "Amit" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    const totalCredit = creditRows.reduce(
      (sum, r) => sum + Number(r.amount || 0),
      0,
    );

    const totalDebit = debitRows.reduce(
      (sum, r) => sum + Number(r.amount || 0),
      0,
    );

    const payload = {
      date,
      employee,
      creditRows,
      debitRows,
      totalCredit,
      totalDebit,
      netFlow: totalCredit - totalDebit,
    };

    //api call

    console.log("Submitting Ledger:", payload);
  };

  const handleClear = () => {
    setDate(new Date().toISOString().split("T")[0]);
    setEmployee("");

    setCreditRows([{ source: "Bank Transfer", reference: "", amount: 0 }]);

    setDebitRows([{ expense: "Facility Rent", description: "", amount: 0 }]);
  };

  return (
    <div>
      {/* Header */}
      <h2 className="font-semibold text-4xl text-slate-900">
        Input Daily Transaction Data
      </h2>

      <p className="text-slate-500 mt-1">
        Current date/time -{" "}
        {currentDateTime.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "2-digit",
        })}
        ,{" "}
        {currentDateTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>

      {/* Card */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Shared Entry Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date of Entry
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-11 border border-slate-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Employee */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Responsible Employee
            </label>

            <select
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="">Select Staff On Duty</option>
              {staffMembers.map((staff) => (
                <option key={staff.id} value={staff.name}>
                  {staff.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <CreditTransaction rows={creditRows} setRows={setCreditRows} />
        <DebitTransaction rows={debitRows} setRows={setDebitRows} />
      </div>
      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-slate-800 mb-4">Summary</h1>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-slate-700">
            Daily Net Flow : ₹&nbsp;{netFlow}
          </h2>
          <div className="flex gap-2">
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-400 cursor-pointer "
              onClick={handleSubmit}
            >
              Submit Daily Entry
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 cursor-pointer"
              onClick={handleClear}
            >
              Clear Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ledger;
