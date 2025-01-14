// Variables
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal-btn");
const clearBtn = document.getElementById("clear-btn");
const removeBtn = document.getElementById("remove-btn");
let numberBtns = document.querySelectorAll(".number-btn");
let operateurBtns = document.querySelectorAll(".operator-btn");
// Initialisation
init();
// Fonctions
function init(){
    numberBtns.forEach(number => {
        btnClicked(number,number.innerHTML);
    });
    operateurBtns.forEach( operateur => {
        btnClicked(operateur,operateur.innerHTML);
    });
    clearBtn.addEventListener("click", () =>{
        clearDisplay();
    });
    equalBtn.addEventListener("click", () =>{
        calculate();
    });
    removeBtn.addEventListener("click", () =>{
        removeChar();
    });
}
function appendToDisplay(input){
    display.value += input;
}
/** Le bouton cliqué affiche la valeur dans la fenêtre de la calculatrice
 * 
 * @param {Array} button - Le bouton a cliqué
 * @param {String} textBtn - L'intitulé' du bouton
 */
function btnClicked(button, textBtn){
    button.addEventListener("click",() =>{
        appendToDisplay(textBtn);
        console.log(display.value);
        console.log( display.value.at(-1));
    });
}
function clearDisplay(){
    display.value = "";
}
function removeChar(){
    delChar = display.value.slice(0, display.value.length-1);
    display.value = delChar;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}