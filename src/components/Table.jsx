import { useState } from "react";

const data = [
  { id: "#281209", status: "Successful", trx: "TRX123456", date: "Today, 8:45 PM", amount: 1125 },
  { id: "#281210", status: "Processing", trx: "TRX789012", date: "Tomorrow, 10:00 AM", amount: 950.5 },
  { id: "#281211", status: "Successful", trx: "TRX345678", date: "Yesterday, 3:30 PM", amount: 750 },
  { id: "#281212", status: "Successful", trx: "TRX901234", date: "Today, 11:20 AM", amount: 3000 },
  { id: "#281209", status: "Successful", trx: "TRX123456", date: "Today, 8:45 PM", amount: 1125 },
  { id: "#281210", status: "Processing", trx: "TRX789012", date: "Tomorrow, 10:00 AM", amount: 950.5 },
  { id: "#281211", status: "Successful", trx: "TRX345678", date: "Yesterday, 3:30 PM", amount: 750 },
  { id: "#281212", status: "Successful", trx: "TRX901234", date: "Today, 11:20 AM", amount: 3000 },
];

export default function DataTable() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = data
    .filter(
      (row) =>
        row.id.toLowerCase().includes(search.toLowerCase()) ||
        row.trx.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortAsc ? a.amount - b.amount : b.amount - a.amount));

  return (
    <div className="p-4 pt-1">
      {/* Search + Sort bar */}
      <div className="flex justify-between items-center mb-3">
        <input
          type="text"
          placeholder="Search Order ID or Transaction ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-white text-black rounded-md border-2 border-gray-300"
        >
          Sort {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Transaction ID</th>
              <th className="px-4 py-2 text-left">Refund Date</th>
              <th className="px-4 py-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-flex items-center ${
                      row.status === "Successful"
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full mr-2 ${
                        row.status === "Successful"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2">{row.trx}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2 font-medium">₹{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
