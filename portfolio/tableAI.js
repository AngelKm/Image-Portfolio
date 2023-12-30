"use strict";

/* Generate a HTML table of 3 rows and 3 columns flled with Images used in ai.html*/

// an array containing the image source of the images to appear on the first row
var firstRow = new Array();

firstRow[1] = "1952923285_ancient_Mozart__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__.png";
firstRow[2] = "3380972243_Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__sharp_focus__mat.png";
firstRow[3] = "446396485_backrooms__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__sharp.png";

// an array containing the image source of the images to appear on the second row
var secondRow = new Array();

secondRow[1] = "2075662196_ancient_Mozart__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__.png";
secondRow[2] = "371873079_inside_a_dream__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__.png";
secondRow[3] = "1857133952_inside_a_dream__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__.png";

// an array containing the image source of the images to appear on the third  row
var thirdRow = new Array();

thirdRow[1] = "1704812757_Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__sharp_focus__mat.png";
thirdRow[2] = "1596418090_inside_a_dream__Highly_detailed__surrealism__trending_on_art_station__triadic_color_scheme__smooth__.png";
thirdRow[3] = "3790368750_ancient_universe_with_Japansese_cultural_details__Highly_detailed__surrealism__trending_on_art_stati.png";


/* <!-- This fulfills requirement 3.2.5 A)--> */
// Create a table to store the AI images
var tables = "<table>";

// 3 x 3 table
for (var i = 1; i< firstRow.length; i++) {
    tables += "<tr><td><img src="+firstRow[i]+" alt='image'></td>"; 
    tables += "<td><img src="+secondRow[i]+" alt='image'></td>"
    tables += "<td><img src="+thirdRow[i]+" alt='image'></td></tr>"; 
}

tables += "</table>";       // close table tag
// Apply the tables value to the inner HTML of the div element with the ID tableDemo.
document.getElementById("tableDemo").innerHTML = tables;