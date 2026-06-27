let names = [];

function displayNames() {
    let output = document.getElementById("result");
    output.innerHTML = "";

    for (let i = 0; i < names.length; i++) {
        output.innerHTML += `
        <div>
            <span>${names[i]}</span>
            <button onclick="deleteName(${i})">Delete</button>
            <button onclick="editName(${i})">Edit</button>
        </div>`;
    }
}

function addName() {
    let input = document.getElementById("inputName");
    let name = input.value.trim();

    if (name === "") {
        return;
    }

    names.push(name);
    input.value = "";

    displayNames();
}

function deleteName(index) {
    names.splice(index, 1);
    displayNames();
}

function editName(index) {
    let newName = prompt("Enter your new name:");

    if (newName === null || newName.trim() === "") {
        return;
    }

    names[index] = newName.trim();

    displayNames();
}
