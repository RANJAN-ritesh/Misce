var form = document.querySelector("form").addEventListener("submit", submitForm);
var tbodi = document.getElementById("tbodi");
var filterSelect = document.querySelector("#filterSelect")
filterSelect.addEventListener("change" , filterData)
var data = [];
var originalData = []; // Keep a separate copy of the original data
var count = 0;

function submitForm(e) {
    e.preventDefault();
    var target = e.target;
    var todo = target.querySelector('input[type="text"]').value;
    var status = target.querySelector('select').value;

    data.push({
        todo,
        status,
        id: count++
    });
    
    // Also push the data to the originalData array
    originalData = data

    // Call the updateData function to refresh the table
    updateData();
}

function deleteItem(id) {
    data = data.filter(item => item.id !== id);
    originalData = originalData.filter(item => item.id !== id);
    // Call the updateData function to refresh the table
    updateData();
}

function filterData(){
    var value = filterSelect.value
    var filteredArr;
    
    if (value == "Done") {
        filteredArr = originalData.filter((ele) => ele.status == value);
    } else if (value == "Not Done") {
        filteredArr = originalData.filter((ele) => ele.status == value);
    } else if (value == "Partially Done") {
        filteredArr = originalData.filter((ele) => ele.status == value);
    } else if (value == "All") {
        filteredArr = originalData;
    }
    
    data = filteredArr;
    updateData();
}

function updateData() {
    tbodi.innerHTML = "";

    data.forEach(ele => {
        var tr = document.createElement("tr");
        tr.setAttribute("data-id", ele.id);

        var td1 = document.createElement("td");
        td1.innerText = ele.todo;

        var td2 = document.createElement("td");
        td2.innerText = ele.status;

        var td3 = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerText = "Done";
        btn.addEventListener("click", function () {
            deleteItem(ele.id);
        });

        td3.appendChild(btn);
        tr.append(td1, td2, td3);
        tbodi.append(tr);
    });
}

// let localData = {myKey : "value"};

// let set = localStorage.setItem("keyLocale" , localData)

// let get = localStorage.getItem("keyLocale")

// console.log(get)