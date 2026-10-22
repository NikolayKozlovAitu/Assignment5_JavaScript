// Task 2
let p = document.getElementById("myParagraph");
let textBtn = document.getElementById("changeTextBtn");

textBtn.onclick = function() {
    p.textContent = "New text changed by JavaScript!";
};

// Task 3
let block = document.getElementById("myBlock");
let colorBtn = document.getElementById("changeColorBtn");
let fontBtn = document.getElementById("changeFontBtn");

colorBtn.onclick = function() {
    block.style.backgroundColor = "lightgreen";
};

fontBtn.onclick = function() {
    block.style.fontSize = "24px";
};

// Task 4
let list = document.getElementById("myList");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.onclick = function() {
    let li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
};

removeBtn.onclick = function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
};