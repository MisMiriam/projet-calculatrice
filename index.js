// Variables
const display = document.querySelector(".calc__display");
const equalBtn = document.querySelector(".btn__equal");
const clearBtn = document.querySelector(".btn__clear");
const removeBtn = document.querySelector(".btn__remove");
let numberBtns = document.querySelectorAll(".btn__number");
let operateurBtns = document.querySelectorAll(".btn__operator");
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
 * @param {String} textBtn - L'intitulé du bouton
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