document.addEventListener("DOMContentLoaded", () => {

    function addRow() {
        var name = document.getElementById("name");
        var age = document.getElementById("age");

        var table = document.getElementById("myTable");
        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = table.rows.length - 1;
        cell1.innerHTML = name.value;
        cell2.innerHTML = age.value;

        const newBtn = document.createElement("button");
        newBtn.textContent = "Delete";
        newBtn.addEventListener("click", () => {
            deleteRow(newBtn);
        })
        newBtn.classList.add("btn");
        cell3.appendChild(newBtn);

        name.value = "";
        
    }

    function deleteRow(r) { // r is the button
        var i = r.parentNode.parentNode.rowIndex; // back to the row and get the index
        console.log(r.parentNode);          
        document.getElementById("myTable").deleteRow(i);
    }

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addRow();
    })


    // const container = document.getElementById("container")
    // const table = document.getElementById("myTable")

    // let btn = document.createElement("button", {});
    // btn.textContent = "button"
    // btn.addEventListener('click', () => {
    //     const row = table.insertRow()
    //     const col1 = row.insertCell(0)
    //     const col2 = row.insertCell(1)
    //     col1.textContent = "MyName";
    //     col2.textContent = "20";

    //     // to short
    //     table.insertRow().insertCell(0).textContent = "MyName"
    //     table.insertRow().insertCell(0).textContent = "20"
    // })
    // container.appendChild(btn)
})