import { useState } from "react";


const IncomeTransaction = () => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Income Transaction:', { amount, description });
      setAmount('');
      setDescription('');
    };

    return (
        <div className="container mx-auto mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Income Transaction</h2>
      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block">Description:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Income
        </button>
      </form>
        </div>
    );
};

export default IncomeTransaction;