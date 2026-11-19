let utilityButton = document.querySelectorAll(".utility-button");
let numberButton = document.querySelectorAll(".number-button");
let signButton = document.querySelectorAll(".sign-button");
let screen = document.getElementById("screen");
let equalSign = document.getElementById("operation-button");

numberButton.forEach(element => {
    element.addEventListener("click", function () {
        screen.textContent += element.textContent;
    });
});

signButton.forEach(element => {
    element.addEventListener("click", function () {
        screen.textContent += element.textContent;
    });
});

utilityButton.forEach(element => {
    element.addEventListener("click", function () {
        (element.textContent === "C")
            ? screen.textContent = ""
            : screen.textContent = screen.textContent.slice(0, -1);
    });
});

function factorial(number) {
    if (!Number.isInteger(number) || number < 0 || number > 18) {
        throw new Error("Factorial is only supported for whole numbers from 0 to 18.");
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

equalSign.addEventListener("click", function () {
    try {
        const expression = screen.textContent.replace(/(\d+(?:\.\d+)?)!/g, function (match, number) {
            return factorial(Number(number));
        });

        screen.textContent = eval(expression);
    } catch (error) {
        alert(error.message || "Sorry command cannot be executed 😞");
    }
});