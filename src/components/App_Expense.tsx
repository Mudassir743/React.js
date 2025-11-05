import ExpenseList from "../Expense_tracker/component/ExpenseList";

const App_Expense = () => {
  const expenses = [
    { id: 1, describtion: "aaa", amount: 10, catagory: "utilities" },
    { id: 2, describtion: "bbb", amount: 20, catagory: "utilities" },
    { id: 3, describtion: "ccc", amount: 30, catagory: "utilities" },
    { id: 4, describtion: "ddd", amount: 40, catagory: "utilities" },
  ];
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
};

export default App_Expense;
