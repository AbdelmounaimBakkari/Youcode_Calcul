

const screenElt = document.getElementById("screen");

let precedent = 0;
let affichage = "";
let operation = null;


let keys = document.querySelectorAll("button");

for (let key of keys) {
    key.addEventListener("click", manageKeys);
}

function manageKeys(){
    let key = this.innerText;
    if(parseFloat(key) >= 0 || key === "."){
        affichage = (affichage === "" ? key.toString(): affichage + key.toString() );
        screenElt.innerText = affichage;
    }else{
        switch(key){
            case "C":
                precedent = 0;
                affichage = "";
                operation = null;
                screenElt.innerText = 0;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculate(precedent, parseFloat(affichage), operation);
                screenElt.innerText = precedent;
                operation = key;
                affichage = "";
                break;
            case "=":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculate(precedent, parseFloat(affichage), operation);
                screenElt.innerText = precedent;
                operation = null;
                affichage = precedent;
                precedent = 0;
                break;
        }
    }

}
console.log(precedent);

function calculate(nb1, nb2, operation){
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
}