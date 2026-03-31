function appendValue(val) {
    document.getElementById("result").value += val;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let res = document.getElementById("result").value;
    document.getElementById("result").value = eval(res);
}
function toggleDark() {
    document.body.classList.toggle("dark");
}