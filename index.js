let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = weeklyExpenseQuestions.length-1; i >= 0 ; i--) {
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i]))
} //Questions in reverse order when pops up

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    monthlyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]))
} //Questions in Normal order

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    annualExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]))
} // New Budget