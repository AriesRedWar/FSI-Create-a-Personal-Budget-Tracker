let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i]))
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    monthlyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]))
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    annualExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]))
}
// New Budget


