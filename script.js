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

    // Update income or expense based on the type
    if (type == "income") {
        income += amount;
    } else if (type == "expense") {
        expense += amount;
    }

    updateBalance();
    clearFields();
}

function updateBalance() {
    document.getElementById('inncomedisplay').textContent = income.toFixed(2);
    document.getElementById('expensesdisplay').textContent = expense.toFixed(2);
    document.getElementById('totaldisplay').textContent = (income - expense).toFixed(2);
}

function clearFields() {
    // Clear form fields
    ['name', 'category', 'amount'].forEach(id => document.getElementById(id).value = "");
    // Clear the radio button selection
    document.querySelector('input[name="type"]:checked')?.checked = false;
}
