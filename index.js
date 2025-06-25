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

equalSign.addEventListener("click",function(){
  /* let result = document.getElementById("result");
   let answer;
   let len = screen.textContent.length;
   let signPosition=screen.textContent.indexOf(sign)
   let leftNumber = screen.textContent.slice(0,signPosition)
   let rightNumber = screen.textContent.slice(signPosition+1,len)
   if(rightNumber == ""|| leftNumber == "" || signPosition == -1){ 
        alert("Sorry computation cannot take place 😔");
    } 
    leftNumber = Number(leftNumber)
    rightNumber = Number(rightNumber)
    switch (sign) {
        case '+':
            answer = String(leftNumber + rightNumber);
            screen.textContent = answer;
            break;
        case '-':
            answer = String(leftNumber - rightNumber);
            screen.textContent= answer
            break;
        case '/':
             if(leftNumber == 0 ){
                alert("❌ Sorry divison by zero is not allowed ❌")
             }
             answer = String(leftNumber/rightNumber);
             screen.textContent = answer;
             break;
        case '*':
            answer = String(leftNumber * rightNumber)
             screen.textContent=answer;
             break;         
    } */
    screen.textContent = eval(screen.textContent);
})

