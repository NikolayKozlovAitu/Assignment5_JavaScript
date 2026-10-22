// Task 5
let hoverBox = document.getElementById("hoverBox");

hoverBox.onmouseover = function() {
    hoverBox.style.backgroundColor = "yellow";
};

hoverBox.onmouseout = function() {
    hoverBox.style.backgroundColor = "lightblue";
};

// Task 6
let input = document.getElementById("myInput");
let result = document.getElementById("inputResult");

input.onkeyup = function() {
    result.textContent = input.value;
};

// Task 7
function calc(op) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resSpan = document.getElementById("calcResult");
    let res = 0;

    if (op === '+') {
        res = n1 + n2;
    } else if (op === '-') {
        res = n1 - n2;
    } else if (op === '*') {
        res = n1 * n2;
    } else if (op === '/') {
        res = n1 / n2;
    }

    resSpan.textContent = res;
}