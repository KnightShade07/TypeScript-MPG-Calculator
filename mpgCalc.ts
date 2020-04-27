/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid(): boolean{
    let isAllDataValid: boolean = true;

    //validate miles driven, display error if invalid
    let milesBox: HTMLInputElement = 
        <HTMLInputElement>document.getElementById("miles");
    let milesDriven:string = milesBox.value;

    let gallonsBox: HTMLInputElement =
        <HTMLInputElement>document.getElementById("gallons")
    let gallonsNumber: string = gallonsBox.value

    

    if(milesDriven == "" || isNaN(parseFloat(milesDriven))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML =
            "Miles Driven is required and must be a number";
    }

    if(gallonsNumber == "" || isNaN(parseFloat(gallonsNumber))) {
        isAllDataValid = false;
        gallonsBox.nextElementSibling.innerHTML =
            "Gallons Used is required and must be a number";
    }

    
    return isAllDataValid;
    
}

/** 
 * This function should be called when the calculate button is clicked
*/

function main(){
    if(isValid()){
        let miles: string =
            (<HTMLInputElement>document.getElementById("miles")).value;

        let gallons: HTMLInputElement =
            <HTMLInputElement>document.getElementById("gallons");

        let gallonsData: number = parseFloat(gallons.value);

        let mpg = calculateMPG(parseFloat(miles),gallonsData);
            displayResults(mpg);

    }
    //check if data is valid
    //if data is valid
        //calculate MPG
}

/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon){
    let mpgBox: HTMLInputElement =
        <HTMLInputElement>document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param {string|number} milesDrive The number of miles driven
 * @param {string|number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDrive, gallonsUsed){
    let mpg = milesDrive / gallonsUsed;
    return mpg;
    
}


window.onload = function() {
    let calcBtn: HTMLElement = document.getElementById("calculate");
    calcBtn.onclick = main;

    let clearBtn: HTMLElement = document.getElementById("clear");
    clearBtn.onclick = resetForm;


}


function clearOnDblClick() {
    let gallonsBox = <HTMLInputElement>document.getElementById("gallons");
    let milesBox = <HTMLInputElement>document.getElementById("miles");
    gallonsBox.value = "";
    milesBox.value = "";
    
    
}



function resetForm(): void{
    //clear all texts
    let allBoxes = document.querySelectorAll("input[type=text]");
    for(let i = 0; i < allBoxes.length; i++) {
        let currBox = <HTMLInputElement>allBoxes[i];
        currBox.value = "";
        
    }
    //reset the spans
    let allSpans = document.querySelectorAll("span");
    for(let j = 0; j < allSpans.length; j++) {
        let currBox = <HTMLInputElement>allSpans[j];
        currBox.innerHTML = "";

    }
}