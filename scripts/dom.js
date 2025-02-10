import { getLocalStorage, removeFromFavorites, getBudgetLocalStorage, budgetToStorage } from "./storage.js";

const expenseReport = document.getElementById("expenseReport")
const displayExpenseTotal = document.getElementById("displayExpenseTotal")
const initialBudget = document.getElementById("initialBudget");
const remainingBudget = document.getElementById("remainingBudget")

let displayExpenses = () => {

    let expenseList = getLocalStorage();

    expenseReport.innerHTML = ""
    expenseList.forEach((element, index) => {
        let counter = index + 1;
        let grandfatherDiv = document.createElement("div")

        expenseReport.appendChild(grandfatherDiv)

        let parentDiv = document.createElement("div")
        parentDiv.id = index + "ParentDiv" + element.expense
        parentDiv.className = "flex mt-8 place-items-baseline justify-between "
        grandfatherDiv.appendChild(parentDiv)

        let expenseHeader = document.createElement("h2")
        expenseHeader.className = "bg-green-200 rounded-2xl border-1 p-2"
        expenseHeader.innerText = "#" + counter + ") Expense: $" + Math.round(element.expense*100)/100
        parentDiv.appendChild(expenseHeader)

        let childDiv1 = document.createElement("div")
        parentDiv.appendChild(childDiv1)

        // let updateButton = document.createElement("button")
        // updateButton.type = "button"
        // updateButton.id = "update" + index
        // updateButton.className = "ms-2 p-2 border-1 rounded-lg bg-yellow-200 hover:bg-yellow-500"
        // updateButton.innerText = "Update"

        let deleteButton = document.createElement("button")
        deleteButton.type = "button"
        deleteButton.id = "delete" + index
        deleteButton.className = "ms-2 p-2 border-1 rounded-lg bg-red-200 hover:bg-red-500"
        deleteButton.innerText = "Delete"

        // childDiv1.appendChild(updateButton)
        childDiv1.appendChild(deleteButton)

        // updateButton.addEventListener("click", () => {

        //     let parentDiv2 = document.createElement("div")
        //     parentDiv2.className = "flex mt-8 ms-4 place-items-baseline"
        //     grandfatherDiv.appendChild(parentDiv2)

        //     let updateHeader = document.createElement("h2")
        //     updateHeader.className = "ps-8"
        //     updateHeader.innerText = "Update Amount: "
        //     parentDiv2.appendChild(updateHeader)

        //     let inputUpdate = document.createElement("input")
        //     inputUpdate.className = "ms-2 ps-4 border-1 rounded-lg"
        //     inputUpdate.type = "number"
        //     inputUpdate.placeholder = "$000,000.00"
        //     parentDiv2.appendChild(inputUpdate)

        //     let cancelButton = document.createElement("button")
        //     cancelButton.type = "button"
        //     cancelButton.id = "cancel" + index
        //     cancelButton.className = "ms-2 p-2 border-1 rounded-lg bg-blue-200 hover:bg-blue-500"
        //     cancelButton.innerText = "Cancel"
        //     parentDiv2.appendChild(cancelButton)

        //     let trueUpdateButton = document.createElement("button")
        //     trueUpdateButton.type = "button"
        //     trueUpdateButton.id = "trueUpdate" + index
        //     trueUpdateButton.className = "ms-2 p-2 border-1 rounded-lg bg-yellow-200 hover:bg-yellow-500"
        //     trueUpdateButton.innerText = "Update"
        //     parentDiv2.appendChild(trueUpdateButton)

        //     cancelButton.addEventListener("click", () => {
        //         grandfatherDiv.removeChild(parentDiv2)
        //     })

        // })

        deleteButton.addEventListener("click", () => {
            removeFromFavorites(index);

            displayExpenses()

            displayExpenseTotal.innerText=""
            expenseTotal();
            remainingBudgetMethod()
        })

    });
}

let expenseTotalNumber = 0;

let expenseTotal = () => {
    expenseTotalNumber=0

    let expenseList = getLocalStorage();
    expenseList.forEach(element => {
        let num = parseFloat(element.expense)

        expenseTotalNumber += Math.round(num*100) /100;


        console.log(num)
        console.log(element)

    });
    console.log(expenseTotalNumber)
    displayExpenseTotal.innerText = "$" + expenseTotalNumber;
}

let currentBudgetNumber = 0;

let currentBudget = () => {
    let budgetList = getBudgetLocalStorage();

    currentBudgetNumber = budgetList[budgetList.length - 1]
    initialBudget.innerText = currentBudgetNumber
}

let remainingBudgetMethod = () => {
    remainingBudget.innerText = currentBudgetNumber - expenseTotalNumber
}


export { displayExpenses, expenseTotal, currentBudget, remainingBudgetMethod }