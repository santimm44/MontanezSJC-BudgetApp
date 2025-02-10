import { displayExpenses, expenseTotal, currentBudget, remainingBudgetMethod } from "./dom.js";

import { getLocalStorage, saveToStorage, removeFromFavorites, getBudgetLocalStorage, budgetToStorage } from "./storage.js";

const userBudget = document.getElementById("userBudget");
const budgetBtn = document.getElementById("budgetBtn");
const initialBudget = document.getElementById("initialBudget");
const userExpense = document.getElementById("userExpense");
const expenseBtn = document.getElementById("expenseBtn");


displayExpenses()
expenseTotal();
currentBudget()
remainingBudgetMethod()

let budget = 0;

// Add budget
budgetBtn.addEventListener("click", () => {
    if (userBudget.value != null) {
        budget = userBudget.value;
        initialBudget.innerText = `$${budget}`
        userBudget.value =""

        budgetToStorage(budget)

        remainingBudgetMethod()
    }
})


// Add Expense to storage
expenseBtn.addEventListener("click", () => {
    if (userExpense.value != null) {
        saveToStorage();
        

        displayExpenses()

        userExpense.value=""

        expenseTotal();
        remainingBudgetMethod()
    }
})




