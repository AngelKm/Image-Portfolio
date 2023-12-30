"use strict"

/* Generates when the website was last updated used in all html pages/

/* <!-- This fulfills requirement 3.2.1 G)--> */
// Controls when the website was last updated dislayed int he footer
document.getElementById("copyright-year").innerHTML = "Updated on " + document.lastModified;
