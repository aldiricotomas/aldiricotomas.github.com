/*
 1. Tema sin seleccionar. => Dark Mode
 2. Su dispositivo esta configurado para dark mode, y el usuario no haya cambiado eso. => Dark Mode
 3. Dispositivo: dark mode. Usuario: light mode. => Light Mode
 4. Dispositivo: light mode. Usuario: No cambio. => Light Mode
 5. Dispositivo: light mode. Usuario: dark mode. => Dark Mode

*/

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const colorSchemeLSKey = 'mp--color--scheme';


(function(){
    readColorSchemeFromLS();
    let checkboxElement = document.querySelector(".dark-toggle");
     
    checkboxElement.checked = isUsingDarkMode();
    
    checkboxElement.addEventListener("change", function(){
        if(this.checked){
            /* Cambiar a dark mode*/
            changeToDarkMode();
        }else{
            /* Cambiar a light mode */
            changeToLightMode();
        }
    })
/*    if(comprobarInputs){
       document.querySelector("input.submit-form").addEventListener("click",redirect);
    } */
}())
/* function comprobarInputs(){
    if()
    return true;
} */
function redirect(){
     
    setTimeout(() => {
        location.href = "./hola.html"
    }, 3000);
}
function readColorSchemeFromLS(){
    let colorScheme = getColorSchemeFromLS();
    if(!colorScheme){
        return;
    }
    if(colorScheme === 'light'){
        changeToLightMode();
    }else{
        changeToDarkMode();
    }
}
function changeToLightMode(){
    let bodyElement = document.querySelector("body");
    bodyElement.classList.remove("force-dark");
    bodyElement.classList.add("force-light"); 
    setColorSchemeToLS("light");
}
function changeToDarkMode(){
    let bodyElement = document.querySelector("body");

    bodyElement.classList.remove("force-light");
    bodyElement.classList.add("force-dark");
    setColorSchemeToLS("dark")
}
function setPosition(theme){
    if(theme==='light') return 'left: calc(100% - (var(--circle-size) - var(--height-control) /2) );';
    return 'left: calc( (var(--circle-size) - var(--height-control)) * -1 );';
}
function setColorSchemeToLS(value){
    try{
        window.localStorage.setItem(colorSchemeLSKey, value);
    }catch{
        console.log("error el local storage");
    }
}
function getColorSchemeFromLS(){
    try{
        return window.localStorage.getItem(colorSchemeLSKey);
    }catch{
        console.log("error el local storage");
    }
}

function isUsingDarkMode(){
    let bodyElement = document.querySelector("body");

    let bodyStyle = getComputedStyle(bodyElement);
    let bodyBackgroundColor = rgb2hex(bodyStyle.backgroundColor);
    let darkModeBgColor = '#161D33';

    return darkModeBgColor === bodyBackgroundColor;

}
function rgb2hex(rgb){
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x){
    return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
    }
function setInitialValueForColorScheme(){

}