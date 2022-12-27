import React from "react";
import NewComponentExpenses from "./components/Expenses/NewComponentExpenses";
import { expenses } from "./expenses";
function App() {


  return (
    <div>

      <NewComponentExpenses expenses={expenses} />
    </div>
  );
}

export default App;
