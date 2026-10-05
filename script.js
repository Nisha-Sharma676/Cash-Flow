let salary = 0;
let expenses = [];
let expenseChart;

const salaryForm = document.getElementById("salary-form");
const salaryInput = document.getElementById("salary");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");

const salaryDisplay = document.getElementById("salary-display");
const expenseDisplay = document.getElementById("expense-display");
const balanceDisplay = document.getElementById("balance-display");
const expenseList = document.getElementById("expense-list");

const balanceAlert = document.getElementById("balance-alert");

// Load saved data
const savedSalary = localStorage.getItem("salary");
const savedExpenses = localStorage.getItem("expenses");

if (savedSalary) {
    salary = Number(savedSalary);
}

if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
}

renderExpenses();
updateSummary();


// Set Salary
salaryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const salaryValue = Number(salaryInput.value);

    if (!salaryInput.value || salaryValue < 0) {
        alert("Please enter a valid salary.");
        return;
    }

    salary = salaryValue;
    saveData();
    updateSummary();

    salaryForm.reset();
});

// Add Expense
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);

    if (!name || !expenseAmountInput.value || amount < 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    saveData();
    renderExpenses();
    updateSummary();

    expenseForm.reset();
});

// Save data in localStorage
function saveData() {
    localStorage.setItem("salary", JSON.stringify(salary));
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Display expenses
function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function (expense, index) {
        const li = document.createElement("li");

        li.innerHTML = `
            ${expense.name} - ₹${expense.amount}
            <button onclick="deleteExpense(${index})">Delete</button>
        `;

        expenseList.appendChild(li);
    });
}

// Delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);

    saveData();
    renderExpenses();
    updateSummary();
}

// Calculate total expenses
function calculateTotalExpenses() {
    return expenses.reduce(function (total, expense) {
        return total + expense.amount;
    }, 0);
}

// Update summary
function updateSummary() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = salary - totalExpenses;

    salaryDisplay.textContent = salary;
    expenseDisplay.textContent = totalExpenses;
    balanceDisplay.textContent = remainingBalance;

    if (salary > 0 && remainingBalance < salary * 0.10) {
        balanceDisplay.style.color = "red";
        balanceAlert.textContent = "⚠️ Warning: Your remaining balance is below 10% of your salary.";
    } else {
        balanceDisplay.style.color = "";
        balanceAlert.textContent = "";
    }

    updateChart();
}

function updateChart() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = Math.max(salary - totalExpenses, 0);

    if (expenseChart) {
        expenseChart.destroy();
    }

    expenseChart = new Chart(document.getElementById("expense-chart"), {
        type: "pie",
        data: {
            labels: ["Remaining Balance", "Total Expenses"],
            datasets: [{
                data: [remainingBalance, totalExpenses]
            }]
        }
    });
}