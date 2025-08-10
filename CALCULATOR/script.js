let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function deleteChar() {
    result = result.slice(0, -1);
    document.getElementById("result").value = result;
}

function evaluateResult() {
    try {
        result = eval(result).toString();
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid expression");
        clearResult();
    }
}