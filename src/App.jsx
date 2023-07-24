import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseTransaction from "./components/ExpenseTransaction";
import IncomeTransaction from "./components/IncomeTransaction";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseTransaction />}></Route>
        <Route path="/income" element={<ExpenseTransaction />}></Route>
        <Route path="/expenses" element={<IncomeTransaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
