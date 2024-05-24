let dayOfTheWeek = prompt("Enter your favorite day of the week!");

let theResponse;

switch (dayOfTheWeek) {
    case "monday":
        theResponse = "Ack!"
        break;
    case "tuesday":
        theResponse = "Taco Tuesday!!"
        break;
    case "wednesday":
        theResponse = "Wine Wednesday"
        break;
    case "thursday":
        theResponse = "ITS ALMOST FRIDAY!!!"
        break;
    case "friday":
        theResponse = "TGIF!!! yes!!!"
        break;

    default:
        theResponse = "YAY!!!! its the weekend"
        break;



}
alert(theResponse);

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
d.setDate(19);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
    let dayOfWeek = d.getDay();
    

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    let youShould;
    // todo: output the value of youShould into the thingToDo div
    switch (dayOfWeek) {
        case 0:
            youShould = "go to gym";
            break;
        case 1:
            youShould = "watch a movie";
            break;
        case 2:
            youShould = "pilates";
            break;
        case 3:
            youShould = "nap time"
            break;
        case 4:
            youShould = "go jogging";
            break;
        case 5:
            youShould = "play time";
            break;
        case 6:
            youShould = "baking day!";
            break;
        default:
            "no such day";
            break;

    }
    todoButton.innerHTML = youShould;
}