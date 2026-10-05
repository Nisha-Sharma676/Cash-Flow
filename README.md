# Cash-Flow – Salary & Expense Tracker

Cash-Flow is a simple salary and expense tracking dashboard built using HTML, CSS, and Vanilla JavaScript.

## Features

- Set total salary
- Add and display expenses dynamically
- Calculate total expenses
- Calculate remaining balance
- Delete expenses
- Save data using localStorage
- Restore data after page refresh
- Dynamic Chart.js pie chart
- Low balance warning when balance falls below 10% of salary
- Input validation
- Responsive dashboard

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chart.js
- Browser localStorage

## Project Structure

```text
cash-flow/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── Prompts.md
```

## How It Works

The user enters their total salary and adds expenses with an expense name and amount.

JavaScript stores the expenses in an array and dynamically displays them on the page.

The total expenses are calculated automatically, and the remaining balance is calculated using:

```text
Remaining Balance = Total Salary - Total Expenses
```
The salary and expenses are stored in browser localStorage, so the data remains available after refreshing the page.

Users can also delete individual expenses, and the total expenses, remaining balance, localStorage, and chart are updated automatically.

## Validation

The application validates the entered data before processing it.

- Salary cannot be empty.
- Salary cannot be negative.
- Expense name cannot be empty.
- Expense amount cannot be empty.
- Expense amount cannot be negative.
- Low Balance Alert

The application checks whether the remaining balance is below 10% of the total salary.

When the balance falls below this limit, the remaining balance is displayed in red and a warning message is shown.

## Chart

Chart.js is used to create a dynamic pie chart that displays:

- Remaining Balance
- Total Expenses

The chart updates automatically when expenses are added or deleted.

## Testing

The following features were tested successfully:

- Salary submission
- Expense addition
- Dynamic expense rendering
- Total expense calculation
- Remaining balance calculation
- Expense deletion
- localStorage persistence
- Data restoration after page refresh
- Chart updates
- Low balance warning
- Input validation

## Live Demo

https://cash-flow-beta-ten.vercel.app/
