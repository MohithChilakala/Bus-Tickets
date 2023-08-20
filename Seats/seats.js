/*
JSON
{
    travels: name,
    arrival: time,
    destiny: time,
    upperdeck: true,
    columns: [left, right],
    rows: total,
    lower: [],
    upper: []
    // status: 0, 1, 2, 3 --> booked, available, female, male
}
*/

// const prices = document.querySelector(".prices");

const lower_deck = document.querySelector(".lower-deck");
const upper_deck = document.querySelector(".upper-deck");
const lower_deck_left = document.querySelector(".lower-deck > div > .left");
const lower_deck_right = document.querySelector(".lower-deck > div > .right");
const upper_deck_left = document.querySelector(".upper-deck > div > .left");
const upper_deck_right = document.querySelector(".upper-deck > div > .right");
const status = ["booked", "available", "female", "male"];

// const available_prices = [1800, 1200, 800];
const upper_deck_available = true;
const left_columns = 1;
const right_columns = 2;
const rows = 5;

/*
available_prices.forEach((price)=>{
    prices.innerHTML += "<div class=\"unchecked\">" + price + "</div>";
});
*/

if(upper_deck_available === false) upper_deck.style.display = "none";

for(i = 1; i <= left_columns; i++) {
    column = "c" + i;
    lower_deck_left.innerHTML += "<div class=" + column + "></div>";
    upper_deck_left.innerHTML += "<div class=" + column + "></div>";

    var ll_column = document.querySelector(".lower-deck > div > .left > ." + column); // add status[lower[seat_number]]
    var ul_column = document.querySelector(".upper-deck > div > .left > ." + column); // add status[upper[seat_number]]

    for(j = 0; j < rows; j++) {
        var seat_number = i +  3 * j;
        ll_column.innerHTML += "<div id=L"+seat_number+" class=\"sleeper\">L" + seat_number + "</div>";
        if(upper_deck_available == true) {
            ul_column.innerHTML += "<div id=U"+seat_number+" class=\"sleeper\">U" + seat_number + "</div>";
        }
    }
}

for(i = 1; i <= right_columns; i++) {
    column = "c" + i;
    lower_deck_right.innerHTML += "<div class=" + column + "></div>";
    upper_deck_right.innerHTML += "<div class=" + column + "></div>";

    var lr_column = document.querySelector(".lower-deck > div > .right > ." + column);
    var ur_column = document.querySelector(".upper-deck > div > .right > ." + column);

    for(j = 0; j < rows; j++) {
        var seat_number = i + left_columns +  3 * j;
        lr_column.innerHTML += "<div id=L"+seat_number+" class=\"sleeper\">L" + seat_number + "</div>";
        if(upper_deck_available == true) {
            ur_column.innerHTML += "<div id=U"+seat_number+" class=\"sleeper\">U" + seat_number + "</div>";
        }
    }
}

var seats = document.getElementsByClassName("sleeper");
var n = seats.length;
var selected = [];
var count = 0;
for(var i = 0; i < n; i++) {
    seats[i].onclick = function() {
        const seat = document.getElementById(this.id);
        if(seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            selected.splice(selected.indexOf(this.id), 1);
            count--;
        }
        else {
            seat.classList.add("selected");
            selected.push(this.id);
            count++;
        }

        selected_seats = document.querySelector(".selected-seats");
        if(count === 0) {
            selected_seats.style.display = "none";
        } else {
            selected_seats.style.display = "block";
            selected_seats.innerHTML = "Selected: ";
            selected = selected.sort();
            selected.forEach((seat)=>{
                selected_seats.innerHTML += seat + ", ";
            });
        }
    }
}