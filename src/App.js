import NewComponentExpenses from "./components/NewComponentExpenses";
function App() {

  const expenses = [
    { title: 'Car Insurance', amount: 293.55, date: new Date(2021, 4, 28) },
    { title: 'Flight Tickets', amount: 355.55, date: new Date(2021, 6, 11) },
    { title: 'Sunglass', amount: 144.50, date: new Date(2021, 8, 2) }
  ]
  return (
    <div>

      <NewComponentExpenses expenses={expenses} />
    </div>
  );
}

export default App;
