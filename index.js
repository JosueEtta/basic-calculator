let utilityButton = document.querySelectorAll(".utility-button");
let numberButton = document.querySelectorAll(".number-button");
let signButton = document.querySelectorAll(".sign-button");
let screen = document.getElementById("screen");
let equalSign = document.getElementById("operation-button");
let sign;
numberButton.forEach(element => {
    element.addEventListener("click",function(){
         screen.textContent +=  element.textContent;
    })
});

signButton.forEach(element => {
    element.addEventListener("click",function(){
        sign = element.textContent;
         screen.textContent +=  element.textContent;
        
    })
});

utilityButton.forEach(element => {
    element.addEventListener("click",function(){
        (element.textContent == 'C') ? screen.textContent = "" : screen.textContent=screen.textContent.slice(0,-1);
    })
});

equalSign.addEventListener("click", function () {
    try {
        screen.textContent = eval(screen.textContent);
    } catch (error) {
        alert("Sorry command cannot be executed 😞");
    }
});

