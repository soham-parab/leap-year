var button = document.querySelector("#click-button");
var inputYear = document.querySelector("#input-year");
var outputDiv = document.querySelector("#output");



function isItALeapYear(input) {
    if ([input % 4] == 0) {
        var result = "You were born in a leap year!!!"

    } else {

        var result = "you were not born in a leap year"

    }
    outputDiv.innerHTML = result;
    return result;

}


function clickHandler() {
    var yearInput = inputYear.value;
    isItALeapYear(yearInput);


}

clickButton.addEventListener("click", clickHandler);