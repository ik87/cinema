//
var scheme = [
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];


// create places
createPlacesSVG(80, 15, scheme);

// set status
// for ex. [
//          {row: 1, place: 2, status: free},
//          {row: 2, place: 3, status: occupied},
//          {row: 3, place: 4, status: chose},
//        ]


let status = [
    {row: 1, place: 2, status: "free"},
    {row: 2, place: 3, status: "occupied"},
    {row: 3, place: 4, status: "chose"}
];



setStatusPlaceSVG(status);

function setStatusPlaceSVG(places) {
    places.forEach((element) => {
        var id = element.row + "," + element.place;
        var place = document.getElementById(id);
        place.setAttributeNS(null, "class", element.status);
    })
}

function createPlacesSVG(size, offset, scheme) {
    var xmlns = "http://www.w3.org/2000/svg";
    var WIDTH = scheme[0].length * (size + offset);
    var HEIGHT = scheme.length * (size + offset);

    var places = document.createElementNS(xmlns, "svg");
    places.setAttributeNS(null, "viewBox", "0 0 " + WIDTH + " " + HEIGHT);

    for (row = 0; row < scheme.length; row++) {
        var y = 0.5 + (offset + size) * row;
        for (p = 1, cell = 0; cell < scheme[row].length; cell++) {
            var x = 0.5 + (offset + size) * cell;

            if (scheme[row][cell] != 0) {
                var place = document.createElementNS(xmlns, "rect");
                place.setAttributeNS(null, "id", row + 1 + "," + p++);
                place.setAttributeNS(null, "height", size);
                place.setAttributeNS(null, "width", size);
                place.setAttributeNS(null, "rx", size / 4.7);
                place.setAttributeNS(null, "ry", size / 4.7);
                place.setAttributeNS(null, "x", x);
                place.setAttributeNS(null, "y", y);
                places.appendChild(place);
            }
        }
    }
    document.getElementById("places").appendChild(places);
}

