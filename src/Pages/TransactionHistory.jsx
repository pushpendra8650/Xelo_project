import React from 'react';
import Navbar from './Navbar';

const TransactionHistory = () => {
  // Example dynamic data (you can replace this with real data)
  const transactions = [
    {
      transferDate: "May 9, 2024, 4:48 p.m.",
      advertiserId: "1102",
      invoiceDownload: "Download invoice",
      amount: "1102",
      creditMode: "1102",
      status: "pending",
      updateTime: "May 16, 2024, 3:35 p.m.",
    },
    {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
      {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
      {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
      {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
      {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
      {
        transferDate: "May 9, 2024, 4:48 p.m.",
        advertiserId: "1102",
        invoiceDownload: "Download invoice",
        amount: "1102",
        creditMode: "1102",
        status: "pending",
        updateTime: "May 16, 2024, 3:35 p.m.",
      },
    // Add more transactions as needed
  ];

  // Function to handle downloading of invoice data
  const handleDownload = (transaction) => {
    // Create a Blob with the transaction data
    const invoiceData = `
      Transfer Date: ${transaction.transferDate}
      Advertiser ID: ${transaction.advertiserId}
      Amount: ${transaction.amount}
      Credit Mode: ${transaction.creditMode}
      Status: ${transaction.status}
      Update Time: ${transaction.updateTime}
    `;

    const blob = new Blob([invoiceData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `Invoice_${transaction.advertiserId}.txt`;

    // Append link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className='flex w-full  overflow-hidden'>
        <div className='w-max'><Navbar/></div>
        
       
      <div className="w-full  ml-4 mr-4  h-max">
        <div className="text-sm font-xs text-gray-700 font-semibold mb-4 shadow border border-gray-200 p-3 rounded-lg mt-3 w-full">
          Transaction History
        </div>

       
        <div className="overflow-x-auto shadow border border-gray-200 p-5 rounded">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="text-left border-b">
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Transfer Date</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Advertiser ID</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Invoice Download</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Amount</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Credit Mode</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Status</th>
                <th className="px-4 py-3 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold">Update Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.transferDate}</td>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.advertiserId}</td>
                  <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer text-xs font-sans">
                    <button onClick={() => handleDownload(transaction)}>
                      {transaction.invoiceDownload}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.amount}</td>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.creditMode}</td>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.status}</td>
                  <td className="px-4 py-2 text-left text-xs text-gray-800 font-sans">{transaction.updateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      
    
    
    
   
  );
};

export default TransactionHistory;
