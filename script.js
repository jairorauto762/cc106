let income = 0, expense = 0;

function addTransaction() {
    let name = document.getElementById('name').value.trim();
    let category = document.getElementById('category').value.trim();
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.querySelector('input[name="type"]:checked');

    if (name === "" || category === "" || isNaN(amount) || amount <= 0 || !type) {
        alert("Please enter valid details.");
        return;
    }

    type = type.value;
    let table = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = category;
    row.insertCell(2).textContent = type;
    row.insertCell(3).textContent = amount.toFixed(2);

    if (type === "income") {
        income += amount;
    } else {
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
    document.getElementById('name').value = "";
    document.getElementById('category').value = "";
    document.getElementById('amount').value = "";
    document.querySelectorAll('input[name="type"]').forEach(radio => radio.checked = false);
}
