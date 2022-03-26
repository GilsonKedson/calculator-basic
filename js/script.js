var RESULT_PANEL = document.getElementById('result');

function getData(data) {
    setResult(data);
    return data;
}

void function setResult(data) {
    let resultValue = RESULT_PANEL.innerText;

    if (data === "clean") {
        RESULT_PANEL.innerHTML = 0;
    } else if (data === "delete") {
        RESULT_PANEL.innerHTML = RESULT_PANEL.innerText.substring(0, resultValue.length - 1)
    } else {
        if (data != '=')
            if (data == 0 && resultValue === '0') {
                RESULT_PANEL.innerHTML += '.0';
            } else {
                if (resultValue != '0') {
                    RESULT_PANEL.innerHTML += data;
                } else {
                    RESULT_PANEL.innerHTML = data;
                }
            }
    }

    if(data === '=' && (resultValue.indexOf(['+', '-', '*', '/']))){
        RESULT_PANEL.innerHTML = eval(resultValue);
    }
}