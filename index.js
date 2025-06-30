const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', function (e) {
    const value = e.target.id;
    if (value === "=") {
        equalFunction();
    } else if (value === 'C') {
        clearFunction();
        // console.log("clear button fired")
    } else {
        sendToScreen(value);
    }
})

console.log(screen.value)

function sendToScreen(value) {
    let onScreen = screen.value;
    onScreen = onScreen + value
    screen.value = onScreen
}

function equalFunction() {
    try {
    screen.value = eval(screen.value)
    } catch {
        screen.value = "Error";
    }
}

function clearFunction() {
    screen.value = ' ';
}