var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Product"] = document.getElementById("Product").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["Variety"] = document.getElementById("Variety").value;
    formData["Tax"] = document.getElementById("Tax").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Rating"] = document.getElementById("Rating").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Product;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Variety;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Tax;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Price;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Brand;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Rating;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Product").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Variety").value = "";
    document.getElementById("Tax").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Brand").value = "";
    document.getElementById("Rating").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Product").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Variety").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Tax").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Brand").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Rating").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Product;
    selectedRow.cells[1].innerHTML = formData.Description;
    selectedRow.cells[2].innerHTML = formData.Variety;
    selectedRow.cells[3].innerHTML = formData.Tax;
    selectedRow.cells[4].innerHTML = formData.Price;
    selectedRow.cells[5].innerHTML = formData.Brand;
    selectedRow.cells[6].innerHTML = formData.Rating;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("Product").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}