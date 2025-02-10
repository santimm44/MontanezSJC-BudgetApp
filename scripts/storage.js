class budgetClass {
    constructor(expense) {
        
        this.expense = expense;
    }
}

const saveToStorage = () => {
    let expenseList = getLocalStorage();

    let newExpenseLine = new budgetClass(userExpense.value)

    expenseList.push(newExpenseLine);

    localStorage.setItem("budgetExpense", JSON.stringify(expenseList))
}
const removeFromFavorites = (indexLocation) => {
    let expenseList = getLocalStorage();
    let nameIndex = expenseList.find(budgetLine => budgetLine.id == indexLocation)

    expenseList.splice(nameIndex, 1)
    localStorage.setItem("budgetExpense", JSON.stringify(expenseList))
}
const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("budgetExpense");

    if (localStorageData == null) {
        return []
    }
    return JSON.parse(localStorageData);
}

const budgetToStorage = (budget) => {
    let budgetList = getBudgetLocalStorage();

    budgetList.push(budget);

    localStorage.setItem("budgetList", JSON.stringify(budgetList))
}

const getBudgetLocalStorage = () => {
    let localStorageData = localStorage.getItem("budgetList");

    if (localStorageData == null) {
        return []
    }
    return JSON.parse(localStorageData);
}

export {saveToStorage, removeFromFavorites, getLocalStorage, getBudgetLocalStorage, budgetToStorage}