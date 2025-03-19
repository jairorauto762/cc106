let income = 0, expense = 0;

function addTransaction() {
    let name = document.getElementById('name').value.trim();
    let category = document.getElementById('category').value.trim();
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.querySelector('input[name="type"]:checked')?.value;

    if (!name || !category || isNaN(amount) || amount == 0 || !type) {
        alert("Please enter valid details.");
        return;
    }
    
    // Ensure expenses do not exceed income
    if (type == "expense" && amount > income) {
        alert("Invalid transaction");
        return;
    }
    
    
    let table = document.getElementById('transactionTable');
    let row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = category;
    row.insertCell(2).textContent = type;
    row.insertCell(3).textContent = amount.toFixed(2);

   
    type == "income" ? (income += amount) : (expense += amount);

    updateBalance();
    clearFields();
}

function updateBalance() {
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expense').textContent = expense.toFixed(2);
    document.getElementById('balance').textContent = (income - expense).toFixed(2);
}

function clearFields() {
    ['name', 'category', 'amount'].forEach(id => document.getElementById(id).value = "");
}